import json
from collections import defaultdict
from parse_sku_data import parsed_skus

print(f"Total parsed SKUs: {len(parsed_skus)}")

# Test grouping by (collection, type, color)
groups = defaultdict(list)
for sku in parsed_skus:
    key = (sku['collection'], sku['type'], sku['color'])
    groups[key].append(sku)

print(f"Total (collection, type, color) groups: {len(groups)}")

# Check consistency within each group
inconsistencies = []
for key, items in groups.items():
    fabrics = set(x['fabric'] for x in items)
    categories = set(x['category'] for x in items)
    off_prices = set(x['offline_bazaar_price'] for x in items)
    def_prices = set(x['marketplace_default_price'] for x in items)
    fin_prices = set(x['marketplace_final_price'] for x in items)
    
    if len(fabrics) > 1 or len(categories) > 1:
        inconsistencies.append((key, "fabric/category conflict", fabrics, categories))
    if len(def_prices) > 1 or len(fin_prices) > 1:
        print(f"Notice: Price variance in {key}: default={def_prices}, final={fin_prices}")

print(f"Inconsistencies in (collection, type, color): {len(inconsistencies)}")

# Let's inspect some groups
for i, (key, items) in enumerate(list(groups.items())[:10]):
    print(f"\nGroup {i+1}: {key[0]} {key[1]} ({key[2]})")
    print(f"  Category: {items[0]['category']}, Fabric: {items[0]['fabric']}")
    print(f"  Default Price: {items[0]['marketplace_default_price']}, Final Price: {items[0]['marketplace_final_price']}")
    print(f"  Variants ({len(items)}): {', '.join([x['size'] + ' (' + x['sku_code'] + ')' for x in items])}")
