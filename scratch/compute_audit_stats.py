import json
from collections import defaultdict, Counter
from parse_sku_data import parsed_skus

total_skus = len(parsed_skus)

# 1. Collections breakdown
coll_counts = Counter(s['collection'] for s in parsed_skus)
coll_prod_counts = defaultdict(set)
for s in parsed_skus:
    coll_prod_counts[s['collection']].add((s['type'], s['color']))

# 2. Categories breakdown
cat_counts = Counter(s['category'] for s in parsed_skus)
cat_prod_counts = defaultdict(set)
for s in parsed_skus:
    cat_prod_counts[s['category']].add((s['collection'], s['type'], s['color']))

# 3. Fabric breakdown
fabric_counts = Counter(s['fabric'] for s in parsed_skus)

# 4. Item types breakdown
type_counts = Counter(s['type'] for s in parsed_skus)

# 5. Color breakdown
color_counts = Counter(s['color'] for s in parsed_skus)

# 6. Size breakdown
size_counts = Counter(s['size'] for s in parsed_skus)

# 7. Price stats
default_prices = [s['marketplace_default_price'] for s in parsed_skus]
final_prices = [s['marketplace_final_price'] for s in parsed_skus]
offline_prices = [s['offline_bazaar_price'] for s in parsed_skus]

print("=== COLLECTIONS ===")
for k, v in sorted(coll_counts.items()):
    print(f"| {k} | {len(coll_prod_counts[k])} | {v} |")

print("\n=== CATEGORIES ===")
for k, v in sorted(cat_counts.items()):
    print(f"| {k} | {len(cat_prod_counts[k])} | {v} |")

print("\n=== FABRICS ===")
for k, v in sorted(fabric_counts.items()):
    print(f"| {k} | {v} |")

print("\n=== TYPES ===")
for k, v in sorted(type_counts.items()):
    print(f"| {k} | {v} |")

print("\n=== SIZES ===")
for k, v in sorted(size_counts.items()):
    print(f"| {k} | {v} |")

print(f"\nPrice ranges:")
print(f"Default: Min Rp{min(default_prices):,}, Max Rp{max(default_prices):,}, Avg Rp{sum(default_prices)//len(default_prices):,}")
print(f"Final: Min Rp{min(final_prices):,}, Max Rp{max(final_prices):,}, Avg Rp{sum(final_prices)//len(final_prices):,}")
print(f"Offline: Min Rp{min(offline_prices):,}, Max Rp{max(offline_prices):,}, Avg Rp{sum(offline_prices)//len(offline_prices):,}")
