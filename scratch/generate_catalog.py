import json
from collections import defaultdict
from parse_sku_data import parsed_skus

# Generate TS code for data/sku-master.ts

sku_items_ts = []
for s in parsed_skus:
    item_str = f"""  {{
    skuNo: {s['sku_no']},
    skuCode: {json.dumps(s['sku_code'])},
    skuName: {json.dumps(s['sku_name'])},
    collection: {json.dumps(s['collection'])},
    fabric: {json.dumps(s['fabric'])},
    category: {json.dumps(s['category'])},
    type: {json.dumps(s['type'])},
    color: {json.dumps(s['color'])},
    size: {json.dumps(s['size'])},
    offlineBazaarPrice: {s['offline_bazaar_price']},
    marketplaceDefaultPrice: {s['marketplace_default_price']},
    marketplaceFinalPrice: {s['marketplace_final_price']},
  }},"""
    sku_items_ts.append(item_str)

sku_master_content = f"""export interface SKUMasterItem {{
  skuNo: number;
  skuCode: string;
  skuName: string;
  collection: string;
  fabric: string;
  category: string;
  type: string;
  color: string;
  size: string;
  offlineBazaarPrice: number;
  marketplaceDefaultPrice: number;
  marketplaceFinalPrice: number;
}}

/**
 * Authoritative AISCHMIRA SKU Master Dataset
 * Total Records: {len(parsed_skus)}
 */
export const skuMasterData: SKUMasterItem[] = [
{chr(10).join(sku_items_ts)}
];
"""

with open('data/sku-master.ts', 'w', encoding='utf-8') as f:
    f.write(sku_master_content)

print(f"Generated data/sku-master.ts with {len(parsed_skus)} records.")

# Now group into products
groups = defaultdict(list)
for sku in parsed_skus:
    key = (sku['collection'], sku['type'], sku['color'])
    groups[key].append(sku)

# Map collection name to collectionId
collection_id_map = {
    "Am Monogram": "col_am_monogram",
    "Amara": "col_amara",
    "Aveline": "col_aveline",
    "Bianca": "col_bianca",
    "Briana": "col_briana",
    "Chili Chic": "col_chili_chic",
    "Dasya": "col_dasya",
    "Femme": "col_femme",
    "Floral Meadow": "col_floral_meadow",
    "Garlic Bloom": "col_garlic_bloom",
    "Gendis": "col_gendis",
    "Her": "col_her",
    "Jolly": "col_jolly",
    "Luna": "col_luna",
    "Priscila": "col_priscila",
    "Safira": "col_safira",
    "She": "col_she",
    "Spice Blossom": "col_spice_blossom",
    "Tifani": "col_tifani",
    "Zamira": "col_zamira",
}

# Real media mapping for She Dress
she_dress_images = {
    "Broken White": [
        "/images/products/she-dress/she-dress-hero-white-01.jpg",
        "/images/products/she-dress/she-dress-lifestyle-ivory-01.jpg"
    ],
    "Black": [
        "/images/products/she-dress/she-dress-front-black-01.jpg"
    ],
    "Maroon": [
        "/images/products/she-dress/she-dress-editorial-crimson-01.jpg"
    ],
    "Baby Pink": [
        "/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg"
    ],
    "Butter Yellow": [
        "/images/products/she-dress/she-dress-hero-white-01.jpg"
    ]
}

products_ts = []
featured_keys = [
    ("Bianca", "Blazer", "Red Chili"),
    ("Priscila", "Pleated Pants", "White Garlic"),
    ("Safira", "Top", "Green Pandan"),
    ("She", "Dress", "Broken White"),
    ("Femme", "Outer", "Black"),
    ("Zamira", "Long Dress", "Multicolor Garlic"),
    ("Her", "Long Sleeve Top", "Maroon"),
    ("Am Monogram", "Scarf", "Dirt")
]

for idx, ((coll, ptype, color), skus) in enumerate(groups.items()):
    prod_id = f"prod_{idx + 1}"
    first_sku = skus[0]
    
    # Base SKU (without size suffix)
    # e.g. "BIANCA-BLAZER-REDCHILI"
    base_sku = "-".join(first_sku['sku_code'].rsplit('-', 1)[:-1]) if '-' in first_sku['sku_code'] else first_sku['sku_code']
    if first_sku['size'] == '-': # scarves
        base_sku = first_sku['sku_code']
        
    name = f"{coll} {ptype} {color}".strip()
    
    clean_slug = name.lower().replace('+', 'and').replace('/', '-').replace(' ', '-')
    clean_slug = ''.join(c for c in clean_slug if c.isalnum() or c == '-')
    while '--' in clean_slug:
        clean_slug = clean_slug.replace('--', '-')
        
    collection_id = collection_id_map.get(coll, f"col_{coll.lower().replace(' ', '_')}")
    category = first_sku['category']
    fabric = first_sku['fabric']
    material_desc = f"{fabric} fabrication" if fabric != '-' else "Artisanal luxury textile"
    
    default_price = first_sku['marketplace_default_price']
    final_price = first_sku['marketplace_final_price']
    offline_price = first_sku['offline_bazaar_price']
    
    # Images
    if coll == "She" and ptype == "Dress" and color in she_dress_images:
        images = she_dress_images[color]
    else:
        images = ["/images/products/placeholder.png"]
        
    is_featured = (coll, ptype, color) in featured_keys
    
    # Editorial description
    description = f"An exquisite {color} {ptype.lower()} from the AISCHMIRA {coll} collection. Tailored from premium {fabric if fabric != '-' else 'textile'} with meticulous finishing."
    story = f"Part of the signature {coll} collection, embodying AISCHMIRA's dedication to architectural grace and tactile luxury."
    
    # Variants
    variants_ts = []
    for v_idx, v in enumerate(skus):
        v_id = f"v_{v['sku_no']}"
        v_img = images if images else ["/images/products/placeholder.png"]
        variants_ts.append(f"""      {{
        id: {json.dumps(v_id)},
        sku: {json.dumps(v['sku_code'])},
        skuNo: {v['sku_no']},
        skuCode: {json.dumps(v['sku_code'])},
        skuName: {json.dumps(v['sku_name'])},
        color: {json.dumps(v['color'])},
        size: {json.dumps(v['size'])},
        price: {v['marketplace_final_price']},
        compareAtPrice: {v['marketplace_default_price']},
        offlineBazaarPrice: {v['offline_bazaar_price']},
        stock: 10,
        images: {json.dumps(v_img)},
      }}""")
        
    variants_str = ",\n".join(variants_ts)
    
    prod_str = f"""  {{
    id: {json.dumps(prod_id)},
    sku: {json.dumps(base_sku)},
    parentSku: {json.dumps(base_sku)},
    name: {json.dumps(name)},
    slug: {json.dumps(clean_slug)},
    categoryId: {json.dumps(category)},
    category: {json.dumps(category)},
    collectionId: {json.dumps(collection_id)},
    collection: {json.dumps(coll)},
    type: {json.dumps(ptype)},
    fabric: {json.dumps(fabric)},
    material: {json.dumps(material_desc)},
    price: {final_price},
    basePrice: {final_price},
    compareAtPrice: {default_price},
    offlineBazaarPrice: {offline_price},
    currency: "IDR",
    description: {json.dumps(description)},
    story: {json.dumps(story)},
    careInstruction: "Dry clean only. Do not bleach. Iron on low heat. Store in a cool, dry place away from direct sunlight.",
    shippingInfo: "Complimentary express shipping on all orders. Delivered in our signature AISCHMIRA packaging. Returns accepted within 14 days.",
    variants: [
{variants_str}
    ],
    images: {json.dumps(images)},
    status: "active",
    isActive: true,
    isFeatured: {json.dumps(is_featured)},
    createdAt: "2026-07-01T00:00:00Z",
    updatedAt: "2026-08-20T00:00:00Z",
  }},"""
    products_ts.append(prod_str)

products_file_content = f"""import {{ Product }} from "@/types";

/**
 * Real AISCHMIRA Product Master Catalog (106 Products grouped from 369 SKU records)
 * Authoritative pricing:
 * - basePrice / price = MARKETPLACE FINAL PRICE (Current customer price)
 * - compareAtPrice = MARKETPLACE DEFAULT PRICE (Strikethrough original price)
 * - offlineBazaarPrice = OFFLINE BAZAAR PRICE (Preserved for business reference)
 */
export const productsData: Product[] = [
{chr(10).join(products_ts)}
];
"""

with open('data/products.ts', 'w', encoding='utf-8') as f:
    f.write(products_file_content)

print(f"Generated data/products.ts with {len(groups)} products.")
