from collections import defaultdict
from parse_sku_data import parsed_skus

groups = defaultdict(list)
for sku in parsed_skus:
    key = (sku['collection'], sku['type'], sku['color'])
    groups[key].append(sku)

slugs = {}
for (coll, ptype, color), skus in groups.items():
    # Build clean product name and slug
    raw_name = f"{coll} {ptype} {color}".strip()
    # Scarf special handling: if type is Scarf, name is e.g. "Am Monogram Scarf Dirt" or "Floral Meadow Scarf Pink Blossom"
    clean_slug = raw_name.lower().replace('+', 'and').replace('/', '-').replace(' ', '-')
    clean_slug = ''.join(c for c in clean_slug if c.isalnum() or c == '-')
    while '--' in clean_slug:
        clean_slug = clean_slug.replace('--', '-')
    
    if clean_slug in slugs:
        print(f"SLUG COLLISION: {clean_slug} for {raw_name} and {slugs[clean_slug]}")
    slugs[clean_slug] = raw_name

print(f"Total Unique Slugs: {len(slugs)} / {len(groups)}")
