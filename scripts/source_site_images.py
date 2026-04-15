"""
Source unique stock images for Steel City Cleanouts site.

Pulls landscape photos from Pexels (primary) and Unsplash (secondary),
dedupes by photo ID across batches, filters by orientation + min resolution,
saves to public/images/_staging/<slug>.jpg, and writes a manifest JSON with
attribution tracking.

Usage:
    python scripts/source_site_images.py --batch areas
    python scripts/source_site_images.py --batch hero
    python scripts/source_site_images.py --batch services
    python scripts/source_site_images.py --batch pricing
    python scripts/source_site_images.py --batch hubs
    python scripts/source_site_images.py --batch resources

Requires:
    UNSPLASH_ACCESS_KEY + PEXELS_API_KEY in ~/.config/last30days/.env
"""

import argparse
import json
import os
import sys
import time
from pathlib import Path

import requests
from dotenv import load_dotenv

# Force UTF-8 stdout on Windows so photographer names with diacritics don't crash.
try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

load_dotenv(Path.home() / ".config" / "last30days" / ".env")

UNSPLASH_KEY = os.getenv("UNSPLASH_ACCESS_KEY", "")
PEXELS_KEY = os.getenv("PEXELS_API_KEY", "")

PROJECT_ROOT = Path(__file__).resolve().parent.parent
STAGING_DIR = PROJECT_ROOT / "public" / "images" / "_staging"
MANIFEST_PATH = PROJECT_ROOT / "scripts" / "image_manifest.json"

MIN_WIDTH = 1600
MIN_HEIGHT = 900
HTTP_TIMEOUT = 30

# ---------------------------------------------------------------------------
# Batches: page slug -> search query + scene description
# Query language aims for real stock photo results (no AI look, no generics).
# ---------------------------------------------------------------------------

BATCHES = {
    "hero": [
        ("hero-1", "movers loading couch into truck residential street"),
        ("hero-2", "junk removal crew carrying furniture suburban home"),
        ("hero-3", "pickup truck full of furniture curbside house"),
    ],
    "areas": [
        ("pittsburgh", "pittsburgh pennsylvania row houses neighborhood street"),
        ("cranberry-township", "suburban new construction house cul de sac pennsylvania"),
        ("wexford", "large two story suburban home driveway pennsylvania"),
        ("mt-lebanon", "brick colonial house tree lined street autumn"),
        ("monroeville", "mid century ranch house suburban pennsylvania"),
        ("shadyside", "pittsburgh victorian row house brick sidewalk"),
        ("squirrel-hill", "brick duplex tree lined urban neighborhood"),
        ("upper-st-clair", "large two story colonial home suburban driveway"),
        ("sewickley", "historic small town main street pennsylvania"),
        ("bethel-park", "split level suburban home pennsylvania"),
        ("ross-township", "ranch style home suburban pennsylvania driveway"),
        ("fox-chapel", "large estate home wooded lot pennsylvania"),
        ("shaler-township", "brick ranch house suburban pennsylvania"),
        ("penn-hills", "mid century brick home suburban"),
        ("plum-borough", "suburban ranch home driveway pennsylvania"),
        ("moon-township", "split level home suburban driveway"),
        ("robinson-township", "suburban two story home pennsylvania"),
        ("hampton-township", "colonial home suburban pennsylvania driveway"),
        ("mccandless", "two story colonial home suburban"),
    ],
    "services": [
        ("estate-cleanouts", "empty living room hardwood floor after cleanout"),
        ("junk-removal", "pile of old furniture curbside waiting pickup"),
        ("appliance-removal", "old refrigerator washing machine curb"),
        ("furniture-removal", "two workers carrying couch out of house"),
        ("garage-cleanouts", "cluttered garage full of boxes and tools"),
        ("hoarder-cleanouts", "room full of cluttered belongings boxes"),
        ("foreclosure-cleanouts", "empty foreclosed house interior vacant"),
        ("eviction-cleanouts", "furniture and belongings on curb"),
        ("construction-debris", "construction debris pile wood drywall"),
        ("yard-waste-removal", "pile of tree branches yard waste"),
        ("storage-unit-cleanouts", "open storage unit full of boxes"),
        ("commercial-cleanouts", "empty office space chairs desks"),
        ("bereavement-cleanouts", "vintage living room old furniture photos"),
    ],
    "pricing": [
        ("by-load-size", "pickup truck bed full of household items"),
        ("minimum-charge", "single mattress on curb for pickup"),
        ("quarter-truck", "small pile of boxes in truck bed"),
        ("half-truck", "half loaded pickup truck furniture"),
        ("full-truck", "fully loaded pickup truck household junk"),
        ("estate-cleanout", "estate sale belongings home interior"),
        ("hoarder-cleanout", "extremely cluttered hoarding home"),
        ("garage-cleanout", "garage cleanout progress boxes sorted"),
        ("basement-cleanout", "basement full of old boxes and clutter"),
        ("same-day", "workers hurrying to load truck fast"),
        ("surcharges", "heavy piano being moved by workers"),
        ("vs-dumpster-rental", "roll off dumpster in home driveway"),
        ("vs-diy", "person struggling to load couch into car"),
        ("pittsburgh-vs-national", "pittsburgh neighborhood with work truck"),
        ("by-item", "single old sofa on sidewalk"),
    ],
    "hubs": [
        ("about", "small business owner construction truck"),
        ("contact", "person on phone near work truck"),
        ("pricing", "calculator and clipboard on invoice"),
        ("services", "work crew portrait orange vests"),
        ("reviews", "happy homeowner shaking hands with worker"),
        ("service-areas", "pittsburgh suburban neighborhood aerial"),
    ],
    "resources": [
        ("estate-cleanout-guide", "open notebook with pen on wooden desk"),
        ("what-we-take", "assorted household items in pile"),
        ("pricing-faq", "question mark dollar sign calculator"),
        ("donation-partners", "donation boxes clothes charity"),
    ],
}


# ---------------------------------------------------------------------------
# Search providers
# ---------------------------------------------------------------------------


def pexels_search(query: str, used_ids: set[str], per_page: int = 15) -> dict | None:
    """Search Pexels; return first candidate not in used_ids meeting criteria."""
    if not PEXELS_KEY:
        return None
    r = requests.get(
        "https://api.pexels.com/v1/search",
        headers={"Authorization": PEXELS_KEY},
        params={"query": query, "per_page": per_page, "orientation": "landscape"},
        timeout=HTTP_TIMEOUT,
    )
    if r.status_code != 200:
        print(f"  pexels error: {r.status_code} {r.text[:200]}")
        return None
    for photo in r.json().get("photos", []):
        pid = f"pexels-{photo['id']}"
        if pid in used_ids:
            continue
        if photo["width"] < MIN_WIDTH or photo["height"] < MIN_HEIGHT:
            continue
        return {
            "id": pid,
            "source": "pexels",
            "download_url": photo["src"]["large2x"],
            "photographer": photo["photographer"],
            "photographer_url": photo["photographer_url"],
            "page_url": photo["url"],
            "width": photo["width"],
            "height": photo["height"],
        }
    return None


def unsplash_search(query: str, used_ids: set[str], per_page: int = 15) -> dict | None:
    """Search Unsplash; return first candidate not in used_ids meeting criteria."""
    if not UNSPLASH_KEY:
        return None
    r = requests.get(
        "https://api.unsplash.com/search/photos",
        headers={"Authorization": f"Client-ID {UNSPLASH_KEY}"},
        params={"query": query, "per_page": per_page, "orientation": "landscape"},
        timeout=HTTP_TIMEOUT,
    )
    if r.status_code != 200:
        print(f"  unsplash error: {r.status_code} {r.text[:200]}")
        return None
    for photo in r.json().get("results", []):
        pid = f"unsplash-{photo['id']}"
        if pid in used_ids:
            continue
        if photo["width"] < MIN_WIDTH or photo["height"] < MIN_HEIGHT:
            continue
        return {
            "id": pid,
            "source": "unsplash",
            "download_url": photo["urls"]["full"],
            "photographer": photo["user"]["name"],
            "photographer_url": photo["user"]["links"]["html"],
            "page_url": photo["links"]["html"],
            "width": photo["width"],
            "height": photo["height"],
        }
    return None


def find_best_photo(query: str, used_ids: set[str]) -> dict | None:
    """Try Pexels first, fall back to Unsplash."""
    photo = pexels_search(query, used_ids)
    if photo:
        return photo
    return unsplash_search(query, used_ids)


def download_photo(url: str, dest: Path) -> bool:
    try:
        r = requests.get(url, timeout=HTTP_TIMEOUT, stream=True)
        r.raise_for_status()
        dest.parent.mkdir(parents=True, exist_ok=True)
        with open(dest, "wb") as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
        return True
    except Exception as e:
        print(f"  download failed: {e}")
        return False


# ---------------------------------------------------------------------------
# Manifest I/O
# ---------------------------------------------------------------------------


def load_manifest() -> dict:
    if MANIFEST_PATH.exists():
        return json.loads(MANIFEST_PATH.read_text())
    return {"entries": {}, "used_ids": []}


def save_manifest(manifest: dict) -> None:
    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2))


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------


def run_batch(batch_name: str) -> None:
    if batch_name not in BATCHES:
        print(f"Unknown batch: {batch_name}. Options: {list(BATCHES.keys())}")
        sys.exit(1)

    manifest = load_manifest()
    used_ids = set(manifest.get("used_ids", []))
    entries = manifest.get("entries", {})

    STAGING_DIR.mkdir(parents=True, exist_ok=True)
    batch_dir = STAGING_DIR / batch_name
    batch_dir.mkdir(parents=True, exist_ok=True)

    print(f"\n=== Sourcing batch: {batch_name} ({len(BATCHES[batch_name])} images) ===\n")

    for slug, query in BATCHES[batch_name]:
        dest = batch_dir / f"{slug}.jpg"
        if dest.exists():
            print(f"[skip] {slug} — already staged at {dest.relative_to(PROJECT_ROOT)}")
            continue

        print(f"[{slug}] query: {query}")
        photo = find_best_photo(query, used_ids)
        if not photo:
            print(f"  !! no candidate found, try a different query")
            continue

        if not download_photo(photo["download_url"], dest):
            continue

        used_ids.add(photo["id"])
        entries[f"{batch_name}/{slug}"] = {
            "slug": slug,
            "query": query,
            "path": str(dest.relative_to(PROJECT_ROOT)).replace("\\", "/"),
            **{k: photo[k] for k in ("id", "source", "photographer", "photographer_url", "page_url", "width", "height")},
        }
        print(f"  ok: {photo['source']} {photo['width']}x{photo['height']} by {photo['photographer']}")
        time.sleep(0.3)  # polite pacing

    manifest["used_ids"] = sorted(used_ids)
    manifest["entries"] = entries
    save_manifest(manifest)
    print(f"\nManifest saved: {MANIFEST_PATH.relative_to(PROJECT_ROOT)}")
    print(f"Staged images: {batch_dir.relative_to(PROJECT_ROOT)}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--batch", required=True, help="Batch to source (e.g. areas, hero)")
    args = parser.parse_args()
    run_batch(args.batch)
