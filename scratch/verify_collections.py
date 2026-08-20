import re
from parse_sku_data import parsed_skus

collection_names = sorted(list(set(x['collection'] for x in parsed_skus)))

# Read collections from data/collections.ts
with open('data/collections.ts', 'r', encoding='utf-8') as f:
    content = f.read()

col_ids = re.findall(r'id:\s*"(col_[^"]+)"', content)
col_slugs = re.findall(r'slug:\s*"([^"]+)"', content)
col_names = re.findall(r'name:\s*"([^"]+)"', content)

print("Collections in data/collections.ts:")
for cid, cslug, cname in zip(col_ids, col_slugs, col_names):
    print(f"  {cid}: {cname} (slug: {cslug})")

print("\nMatching with SKU Dataset collections:")
for cname in collection_names:
    slug = cname.lower().replace(' ', '_').replace('-', '_')
    expected_id = f"col_{slug}"
    found = expected_id in col_ids
    print(f"  Dataset: '{cname}' -> Expected ID: '{expected_id}' -> Found in collections.ts: {found}")
