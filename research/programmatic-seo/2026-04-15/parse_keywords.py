"""Parse DataForSEO keyword research files for Steel City Cleanouts programmatic SEO.

Reads 4 raw MCP tool output files, filters to commercial/transactional intent +
volume thresholds, and writes clean markdown + CSV to the same folder.
"""

import csv
import json
import re
from pathlib import Path

TOOL_RESULTS = Path(
    r"C:/Users/hocke/.claude/projects/"
    r"c--Users-Jorda-Projects-Peacock-Bookkeeping-Services-Estate-Cleanout-Website/"
    r"32db9215-6a3e-4962-bf89-79084b911d16/tool-results"
)
OUT_DIR = Path(__file__).parent

FILES = {
    "estate_suggestions": "mcp-dataforseo-dataforseo_labs_google_keyword_suggestions-1776231178190.txt",
    "estate_ideas": "mcp-dataforseo-dataforseo_labs_google_keyword_ideas-1776231185795.txt",
    "junk_suggestions": "mcp-dataforseo-dataforseo_labs_google_keyword_suggestions-1776231199995.txt",
    "junk_ideas": "mcp-dataforseo-dataforseo_labs_google_keyword_ideas-1776231205479.txt",
}

# Regions / cities Steel City Cleanouts serves or would serve
PITT_TOKENS = [
    "pittsburgh", "allegheny", "western pa", "western pennsylvania",
    "cranberry", "wexford", "mars ", " mars", "butler", "warrendale",
    "mt lebanon", "mt. lebanon", "monroeville", "shadyside", "squirrel hill",
    "upper st clair", "sewickley", "bethel park", "ross township",
    "fox chapel", "shaler", "penn hills", "plum borough", "plum ",
    "moon township", "robinson township", "hampton township", "mccandless",
    "south hills", "north hills", "north side", "south side", "north shore",
    "greensburg", "washington pa", "beaver", "westmoreland", "latrobe",
    "pennsylvania", " pa ", " pa,",
]

INFO_TOKENS_STRONG = [
    "how to ", "how does ", "how do ", "what is ", "what does ",
    "why is ", "why does ", "when should ", "define ", "meaning of ",
]


def classify_intent(kw: str, intent_field: str | None) -> str:
    k = kw.lower()
    if intent_field:
        return intent_field
    if any(t in k for t in INFO_TOKENS_STRONG):
        return "informational"
    if any(t in k for t in ["cost", "price", "rate", "how much", "estimate", "quote"]):
        return "transactional"
    if any(t in k for t in ["near me", "services", "company", "companies", " hire", "best "]):
        return "commercial"
    return "commercial"


def is_local_pa(kw: str) -> bool:
    k = kw.lower()
    return any(t in k for t in PITT_TOKENS)


def load(path: Path):
    text = path.read_text(encoding="utf-8", errors="ignore")
    data = json.loads(text)
    return data.get("items", [])


def extract(items: list[dict]) -> list[dict]:
    rows = []
    seen = set()
    for it in items:
        kw = (it.get("keyword") or "").strip()
        if not kw or kw in seen:
            continue
        seen.add(kw)
        ki = it.get("keyword_info") or {}
        sv = ki.get("search_volume") or 0
        comp = ki.get("competition") or 0.0
        comp_level = ki.get("competition_level") or ""
        cpc = ki.get("cpc") or 0.0
        intent_info = it.get("search_intent_info") or {}
        intent = classify_intent(kw, intent_info.get("main_intent"))
        rows.append({
            "keyword": kw,
            "volume": sv,
            "competition": round(float(comp), 2),
            "competition_level": comp_level,
            "cpc": round(float(cpc), 2),
            "intent": intent,
            "opportunity": round(float(sv) * (1 - float(comp)), 1),
            "local_pa": is_local_pa(kw),
        })
    return rows


def main():
    all_rows: list[dict] = []
    per_file_stats = {}
    for key, fname in FILES.items():
        path = TOOL_RESULTS / fname
        if not path.exists():
            print(f"MISSING: {path}")
            continue
        items = load(path)
        rows = extract(items)
        per_file_stats[key] = len(rows)
        for r in rows:
            r["source"] = key
            all_rows.append(r)

    # Deduplicate across sources, keep highest-volume occurrence
    by_kw: dict[str, dict] = {}
    for r in all_rows:
        prev = by_kw.get(r["keyword"])
        if (not prev) or r["volume"] > prev["volume"]:
            by_kw[r["keyword"]] = r
    unique = list(by_kw.values())
    unique.sort(key=lambda r: r["volume"], reverse=True)

    print(f"Per-file row counts: {per_file_stats}")
    print(f"Total unique keywords: {len(unique)}")
    print(f"Pittsburgh-local keywords: {sum(1 for r in unique if r['local_pa'])}")

    # Write full CSV
    csv_path = OUT_DIR / "keywords_all.csv"
    with csv_path.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=[
            "keyword", "volume", "competition", "competition_level",
            "cpc", "intent", "opportunity", "local_pa", "source"
        ])
        w.writeheader()
        w.writerows(unique)

    # Commercial / transactional only, volume >= 20
    comm = [r for r in unique if r["intent"] in ("commercial", "transactional") and r["volume"] >= 20]
    comm.sort(key=lambda r: r["opportunity"], reverse=True)

    # Local PA keywords (any volume)
    local = [r for r in unique if r["local_pa"]]
    local.sort(key=lambda r: r["volume"], reverse=True)

    def tbl(rows, limit=None):
        out = ["| # | Keyword | Vol | Comp | CPC | Intent | Opp |",
               "|---|---------|-----|------|-----|--------|-----|"]
        for i, r in enumerate(rows[:limit] if limit else rows, 1):
            out.append(
                f"| {i} | {r['keyword']} | {r['volume']} | {r['competition']} "
                f"| ${r['cpc']} | {r['intent']} | {int(r['opportunity'])} |"
            )
        return "\n".join(out)

    # Pattern buckets
    def bucket(rows, patterns):
        pat_re = re.compile("|".join(patterns), re.IGNORECASE)
        return [r for r in rows if pat_re.search(r["keyword"])]

    buckets = {
        "Cost / pricing queries": bucket(unique, [r"\bcost\b", r"\bprice", r"\bhow much\b", r"\brate", r"per hour"]),
        "Property-type modifiers (attic, basement, shed, barn, garage)": bucket(unique, [
            r"\battic", r"\bbasement", r"\bshed", r"\bbarn", r"\bcrawl space", r"\battics", r"\bstorage unit"
        ]),
        "Specific-item removal (piano, hot tub, pool, mattress, appliance)": bucket(unique, [
            r"\bpiano", r"\bhot tub", r"\bpool\b", r"\bmattress", r"\bappliance", r"\brefrigerator",
            r"\btire", r"\btv\b", r"\btelevision", r"\bcouch", r"\bsofa", r"\btreadmill"
        ]),
        "Urgency / timing (same day, emergency, next day)": bucket(unique, [
            r"same day", r"same-day", r"\bemergency", r"next day", r"24 hour", r"24/7"
        ]),
        "Donation / charity / free": bucket(unique, [
            r"\bfree\b", r"\bdonat", r"\bcharity", r"\bcharities", r"\bgoodwill", r"\bsalvation", r"\btax"
        ]),
        "Senior / downsizing / probate": bucket(unique, [
            r"\bsenior", r"\bdownsiz", r"\bprobate", r"\bmoving out", r"\bmove manager", r"\bdeceased",
            r"\bafter death", r"\bestate sale"
        ]),
        "Business / foreclosure / eviction / commercial": bucket(unique, [
            r"\bforeclosure", r"\beviction", r"\bcommercial", r"\boffice\b", r"\blandlord", r"\brental",
            r"\brealtor", r"\breal estate"
        ]),
        "Near me / local intent": bucket(unique, [r"near me", r"nearby", r"local\b"]),
        "Pittsburgh / PA-local": local,
    }

    # Write markdown report
    md = [
        "# Steel City Cleanouts — Keyword Research",
        "",
        "**Date:** 2026-04-15",
        "**Seeds:** `estate cleanout`, `junk removal`",
        "**Source:** DataForSEO MCP — keyword_suggestions + keyword_ideas",
        "**Location:** United States (national; PA-local filtering applied after pull)",
        "",
        f"**Total unique keywords pulled:** {len(unique):,}",
        f"**Commercial/transactional with vol ≥ 20:** {len(comm):,}",
        f"**Pittsburgh / PA-local (any volume):** {len(local):,}",
        "",
        "---",
        "",
        "## Top 60 commercial / transactional keywords by opportunity",
        "",
        "Opportunity = volume × (1 − competition). Volume ≥ 20.",
        "",
        tbl(comm, limit=60),
        "",
        "---",
        "",
        "## Pittsburgh / PA-local keywords (every match, any volume)",
        "",
        tbl(local),
        "",
        "---",
        "",
        "## Pattern buckets (net-new programmatic opportunities)",
        "",
    ]
    for name, rows in buckets.items():
        if name == "Pittsburgh / PA-local":
            continue
        rows_sorted = sorted(rows, key=lambda r: r["volume"], reverse=True)
        md += [f"### {name}", f"", f"Count: {len(rows_sorted)}. Top 25 below.", "", tbl(rows_sorted, limit=25), ""]

    (OUT_DIR / "keyword-research.md").write_text("\n".join(md), encoding="utf-8")
    print(f"Wrote: {OUT_DIR / 'keyword-research.md'}")
    print(f"Wrote: {csv_path}")


if __name__ == "__main__":
    main()
