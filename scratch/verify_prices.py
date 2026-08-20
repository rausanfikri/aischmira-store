from parse_sku_data import parsed_skus

print("--- Price Verification ---")
price_issues = []
for sku in parsed_skus:
    def_p = sku['marketplace_default_price']
    fin_p = sku['marketplace_final_price']
    off_p = sku['offline_bazaar_price']
    if def_p is None or fin_p is None:
        price_issues.append((sku['sku_no'], sku['sku_code'], "Missing marketplace price"))
    elif fin_p > def_p:
        price_issues.append((sku['sku_no'], sku['sku_code'], f"Final price {fin_p} > Default price {def_p}"))

print(f"Price issues found: {len(price_issues)}")
if price_issues:
    print(price_issues)

# Summary of price ranges
final_prices = [x['marketplace_final_price'] for x in parsed_skus]
default_prices = [x['marketplace_default_price'] for x in parsed_skus]
offline_prices = [x['offline_bazaar_price'] for x in parsed_skus]

print(f"Min Final Price: Rp{min(final_prices):,}, Max Final Price: Rp{max(final_prices):,}")
print(f"Min Default Price: Rp{min(default_prices):,}, Max Default Price: Rp{max(default_prices):,}")
print(f"Min Offline Price: Rp{min(offline_prices):,}, Max Offline Price: Rp{max(offline_prices):,}")
