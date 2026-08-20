import json
from collections import defaultdict
from parse_sku_data import parsed_skus

groups = defaultdict(list)
for sku in parsed_skus:
    key = (sku['collection'], sku['type'], sku['color'])
    groups[key].append(sku)

print(f"Total Products: {len(groups)}")

collections_map = defaultdict(list)
for (coll, ptype, color), skus in groups.items():
    collections_map[coll].append({
        "type": ptype,
        "color": color,
        "skus_count": len(skus),
        "fabric": skus[0]['fabric'],
        "category": skus[0]['category'],
        "default_price": skus[0]['marketplace_default_price'],
        "final_price": skus[0]['marketplace_final_price'],
        "offline_price": skus[0]['offline_bazaar_price'],
        "sizes": [s['size'] for s in skus]
    })

print("\n--- Collections Breakdown ---")
for coll, prods in sorted(collections_map.items()):
    total_skus = sum(p['skus_count'] for p in prods)
    print(f"Collection: {coll} -> {len(prods)} products, {total_skus} SKUs")
    for p in prods:
        print(f"  - {p['type']} ({p['color']}) | Cat: {p['category']} | Fabric: {p['fabric']} | Sizes: {p['sizes']} | Price: Rp{p['final_price']:,} (was Rp{p['default_price']:,})")
