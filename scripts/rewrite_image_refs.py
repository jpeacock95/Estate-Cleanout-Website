"""
One-shot: rewrite all heroImage references in data files to point to the
new unique-per-slug image paths.

For each data file, walk the entries, match each `slug: "X"` to the next
`heroImage: "..."` line, and replace the path based on the file's section.
"""

import re
from pathlib import Path

PROJECT = Path(__file__).resolve().parent.parent
SRC_LIB = PROJECT / "src" / "lib"

# file -> image subfolder for that entity type
TARGETS = {
    "services-data.ts": "services",
    "pricing-data.ts": "pricing",
    "service-areas-data.ts": "areas",
    "resources-data.ts": "resources",
}

SLUG_RE = re.compile(r'slug:\s*"([^"]+)"')
HERO_RE = re.compile(r'(heroImage:\s*")([^"]+)(")')


def rewrite_file(path: Path, subfolder: str) -> int:
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines(keepends=True)
    current_slug = None
    changes = 0
    out_lines = []
    for line in lines:
        slug_match = SLUG_RE.search(line)
        if slug_match:
            current_slug = slug_match.group(1)
        hero_match = HERO_RE.search(line)
        if hero_match and current_slug:
            new_path = f"/images/{subfolder}/{current_slug}.jpg"
            if hero_match.group(2) != new_path:
                line = HERO_RE.sub(lambda m: m.group(1) + new_path + m.group(3), line)
                changes += 1
        out_lines.append(line)
    path.write_text("".join(out_lines), encoding="utf-8")
    return changes


def main() -> None:
    total = 0
    for filename, subfolder in TARGETS.items():
        path = SRC_LIB / filename
        n = rewrite_file(path, subfolder)
        print(f"{filename}: {n} heroImage references updated")
        total += n
    print(f"\nTotal: {total} heroImage references rewritten")


if __name__ == "__main__":
    main()
