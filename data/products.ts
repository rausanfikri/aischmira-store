import { Product } from "@/types";

/**
 * Authoritative AISCHMIRA Product Master Catalog
 * Derived directly from MASTER PRODUCTS.xlsx -> DASHBOARD (369 SKU records normalized into 28 products)
 * 
 * Pricing Rules:
 * - price / basePrice: MARKETPLACE FINAL PRICE (Current customer price)
 * - compareAtPrice: MARKETPLACE DEFAULT PRICE (Strikethrough original price)
 * - offlineBazaarPrice: OFFLINE BAZAAR PRICE (Preserved for Bazaar/Event context)
 * 
 * Stock: BigSeller synchronization ready (0 default / real inventory only)
 */
export const productsData: Product[] = [
  {
    "id": "prod_1",
    "sku": "BIANCA-BLAZER-REDCHILI",
    "name": "Bianca Blazer",
    "slug": "bianca-blazer",
    "categoryId": "Outerwear",
    "category": "Outerwear",
    "collectionId": "col_bianca",
    "collection": "Bianca",
    "type": "Blazer",
    "fabric": "Satin",
    "price": 1189000,
    "basePrice": 1189000,
    "compareAtPrice": 1209000,
    "offlineBazaarPrice": 789000,
    "currency": "IDR",
    "description": "The Bianca Blazer from the AISCHMIRA Bianca collection. Tailored in Satin with architectural precision and timeless editorial elegance.",
    "story": "Part of the Bianca collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Red Chili",
      "Yellow Ginger",
      "Pink Garlic"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "variants": [
      {
        "id": "v_1",
        "sku": "BIANCA-BLAZER-REDCHILI-S",
        "skuNo": 1,
        "skuCode": "BIANCA-BLAZER-REDCHILI-S",
        "skuName": "AISCHMIRA Bianca Blazer Red Chili S",
        "color": "Red Chili",
        "size": "S",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_2",
        "sku": "BIANCA-BLAZER-REDCHILI-M",
        "skuNo": 2,
        "skuCode": "BIANCA-BLAZER-REDCHILI-M",
        "skuName": "AISCHMIRA Bianca Blazer Red Chili M",
        "color": "Red Chili",
        "size": "M",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_3",
        "sku": "BIANCA-BLAZER-REDCHILI-L",
        "skuNo": 3,
        "skuCode": "BIANCA-BLAZER-REDCHILI-L",
        "skuName": "AISCHMIRA Bianca Blazer Red Chili L",
        "color": "Red Chili",
        "size": "L",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_4",
        "sku": "BIANCA-BLAZER-REDCHILI-XL",
        "skuNo": 4,
        "skuCode": "BIANCA-BLAZER-REDCHILI-XL",
        "skuName": "AISCHMIRA Bianca Blazer Red Chili XL",
        "color": "Red Chili",
        "size": "XL",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_5",
        "sku": "BIANCA-BLAZER-YELLOWGINGER-S",
        "skuNo": 5,
        "skuCode": "BIANCA-BLAZER-YELLOWGINGER-S",
        "skuName": "AISCHMIRA Bianca Blazer Yellow Ginger S",
        "color": "Yellow Ginger",
        "size": "S",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_6",
        "sku": "BIANCA-BLAZER-YELLOWGINGER-M",
        "skuNo": 6,
        "skuCode": "BIANCA-BLAZER-YELLOWGINGER-M",
        "skuName": "AISCHMIRA Bianca Blazer Yellow Ginger M",
        "color": "Yellow Ginger",
        "size": "M",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_7",
        "sku": "BIANCA-BLAZER-YELLOWGINGER-L",
        "skuNo": 7,
        "skuCode": "BIANCA-BLAZER-YELLOWGINGER-L",
        "skuName": "AISCHMIRA Bianca Blazer Yellow Ginger L",
        "color": "Yellow Ginger",
        "size": "L",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_8",
        "sku": "BIANCA-BLAZER-YELLOWGINGER-XL",
        "skuNo": 8,
        "skuCode": "BIANCA-BLAZER-YELLOWGINGER-XL",
        "skuName": "AISCHMIRA Bianca Blazer Yellow Ginger XL",
        "color": "Yellow Ginger",
        "size": "XL",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_9",
        "sku": "BIANCA-BLAZER-PINKGARLIC-S",
        "skuNo": 9,
        "skuCode": "BIANCA-BLAZER-PINKGARLIC-S",
        "skuName": "AISCHMIRA Bianca Blazer Pink Garlic S",
        "color": "Pink Garlic",
        "size": "S",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_10",
        "sku": "BIANCA-BLAZER-PINKGARLIC-M",
        "skuNo": 10,
        "skuCode": "BIANCA-BLAZER-PINKGARLIC-M",
        "skuName": "AISCHMIRA Bianca Blazer Pink Garlic M",
        "color": "Pink Garlic",
        "size": "M",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_11",
        "sku": "BIANCA-BLAZER-PINKGARLIC-L",
        "skuNo": 11,
        "skuCode": "BIANCA-BLAZER-PINKGARLIC-L",
        "skuName": "AISCHMIRA Bianca Blazer Pink Garlic L",
        "color": "Pink Garlic",
        "size": "L",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_12",
        "sku": "BIANCA-BLAZER-PINKGARLIC-XL",
        "skuNo": 12,
        "skuCode": "BIANCA-BLAZER-PINKGARLIC-XL",
        "skuName": "AISCHMIRA Bianca Blazer Pink Garlic XL",
        "color": "Pink Garlic",
        "size": "XL",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": true,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_2",
    "sku": "BIANCA-OBIE-REDCHILI-S",
    "name": "Bianca Obie",
    "slug": "bianca-obie",
    "categoryId": "Accessories",
    "category": "Accessories",
    "collectionId": "col_bianca",
    "collection": "Bianca",
    "type": "Obie",
    "fabric": "Satin Printing",
    "price": 229000,
    "basePrice": 229000,
    "compareAtPrice": 239000,
    "offlineBazaarPrice": 149000,
    "currency": "IDR",
    "description": "The Bianca Obie from the AISCHMIRA Bianca collection. Tailored in Satin Printing with architectural precision and timeless editorial elegance.",
    "story": "Part of the Bianca collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Red Chili",
      "Yellow Ginger",
      "Pink Garlic"
    ],
    "availableSizes": [
      "S-M",
      "L-XL"
    ],
    "variants": [
      {
        "id": "v_13",
        "sku": "BIANCA-OBIE-REDCHILI-S-M",
        "skuNo": 13,
        "skuCode": "BIANCA-OBIE-REDCHILI-S-M",
        "skuName": "AISCHMIRA Bianca Obie Red Chili S-M",
        "color": "Red Chili",
        "size": "S-M",
        "price": 229000,
        "compareAtPrice": 239000,
        "offlineBazaarPrice": 149000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_14",
        "sku": "BIANCA-OBIE-REDCHILI-L-XL",
        "skuNo": 14,
        "skuCode": "BIANCA-OBIE-REDCHILI-L-XL",
        "skuName": "AISCHMIRA Bianca Obie Red Chili L-XL",
        "color": "Red Chili",
        "size": "L-XL",
        "price": 229000,
        "compareAtPrice": 239000,
        "offlineBazaarPrice": 149000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_15",
        "sku": "BIANCA-OBIE-YELLOWGINGER-S-M",
        "skuNo": 15,
        "skuCode": "BIANCA-OBIE-YELLOWGINGER-S-M",
        "skuName": "AISCHMIRA Bianca Obie Yellow Ginger S-M",
        "color": "Yellow Ginger",
        "size": "S-M",
        "price": 229000,
        "compareAtPrice": 239000,
        "offlineBazaarPrice": 149000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_16",
        "sku": "BIANCA-OBIE-YELLOWGINGER-L-XL",
        "skuNo": 16,
        "skuCode": "BIANCA-OBIE-YELLOWGINGER-L-XL",
        "skuName": "AISCHMIRA Bianca Obie Yellow Ginger L-XL",
        "color": "Yellow Ginger",
        "size": "L-XL",
        "price": 229000,
        "compareAtPrice": 239000,
        "offlineBazaarPrice": 149000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_17",
        "sku": "BIANCA-OBIE-PINKGARLIC-S-M",
        "skuNo": 17,
        "skuCode": "BIANCA-OBIE-PINKGARLIC-S-M",
        "skuName": "AISCHMIRA Bianca Obie Pink Garlic S-M",
        "color": "Pink Garlic",
        "size": "S-M",
        "price": 229000,
        "compareAtPrice": 239000,
        "offlineBazaarPrice": 149000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_18",
        "sku": "BIANCA-OBIE-PINKGARLIC-L-XL",
        "skuNo": 18,
        "skuCode": "BIANCA-OBIE-PINKGARLIC-L-XL",
        "skuName": "AISCHMIRA Bianca Obie Pink Garlic L-XL",
        "color": "Pink Garlic",
        "size": "L-XL",
        "price": 229000,
        "compareAtPrice": 239000,
        "offlineBazaarPrice": 149000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": true,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_3",
    "sku": "PRISCILA-PLEATEDPANTS-WHITEGARLIC",
    "name": "Priscila Pleated Pants",
    "slug": "priscila-pleated-pants",
    "categoryId": "Bottoms",
    "category": "Bottoms",
    "collectionId": "col_priscila",
    "collection": "Priscila",
    "type": "Pleated Pants",
    "fabric": "Satin Pleats",
    "price": 739000,
    "basePrice": 739000,
    "compareAtPrice": 749000,
    "offlineBazaarPrice": 489000,
    "currency": "IDR",
    "description": "The Priscila Pleated Pants from the AISCHMIRA Priscila collection. Tailored in Satin Pleats with architectural precision and timeless editorial elegance.",
    "story": "Part of the Priscila collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "White Garlic",
      "Gold Ginger",
      "Teal Mint"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "variants": [
      {
        "id": "v_19",
        "sku": "PRISCILA-PLEATEDPANTS-WHITEGARLIC-S",
        "skuNo": 19,
        "skuCode": "PRISCILA-PLEATEDPANTS-WHITEGARLIC-S",
        "skuName": "AISCHMIRA Priscila Pleated Pants White Garlic S",
        "color": "White Garlic",
        "size": "S",
        "price": 739000,
        "compareAtPrice": 749000,
        "offlineBazaarPrice": 489000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_20",
        "sku": "PRISCILA-PLEATEDPANTS-WHITEGARLIC-M",
        "skuNo": 20,
        "skuCode": "PRISCILA-PLEATEDPANTS-WHITEGARLIC-M",
        "skuName": "AISCHMIRA Priscila Pleated Pants White Garlic M",
        "color": "White Garlic",
        "size": "M",
        "price": 739000,
        "compareAtPrice": 749000,
        "offlineBazaarPrice": 489000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_21",
        "sku": "PRISCILA-PLEATEDPANTS-WHITEGARLIC-L",
        "skuNo": 21,
        "skuCode": "PRISCILA-PLEATEDPANTS-WHITEGARLIC-L",
        "skuName": "AISCHMIRA Priscila Pleated Pants White Garlic L",
        "color": "White Garlic",
        "size": "L",
        "price": 739000,
        "compareAtPrice": 749000,
        "offlineBazaarPrice": 489000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_22",
        "sku": "PRISCILA-PLEATEDPANTS-WHITEGARLIC-XL",
        "skuNo": 22,
        "skuCode": "PRISCILA-PLEATEDPANTS-WHITEGARLIC-XL",
        "skuName": "AISCHMIRA Priscila Pleated Pants White Garlic XL",
        "color": "White Garlic",
        "size": "XL",
        "price": 739000,
        "compareAtPrice": 749000,
        "offlineBazaarPrice": 489000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_23",
        "sku": "PRISCILA-PLEATEDPANTS-GOLDGINGER-S",
        "skuNo": 23,
        "skuCode": "PRISCILA-PLEATEDPANTS-GOLDGINGER-S",
        "skuName": "AISCHMIRA Priscila Pleated Pants Gold Ginger S",
        "color": "Gold Ginger",
        "size": "S",
        "price": 739000,
        "compareAtPrice": 749000,
        "offlineBazaarPrice": 489000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_24",
        "sku": "PRISCILA-PLEATEDPANTS-GOLDGINGER-M",
        "skuNo": 24,
        "skuCode": "PRISCILA-PLEATEDPANTS-GOLDGINGER-M",
        "skuName": "AISCHMIRA Priscila Pleated Pants Gold Ginger M",
        "color": "Gold Ginger",
        "size": "M",
        "price": 739000,
        "compareAtPrice": 749000,
        "offlineBazaarPrice": 489000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_25",
        "sku": "PRISCILA-PLEATEDPANTS-GOLDGINGER-L",
        "skuNo": 25,
        "skuCode": "PRISCILA-PLEATEDPANTS-GOLDGINGER-L",
        "skuName": "AISCHMIRA Priscila Pleated Pants Gold Ginger L",
        "color": "Gold Ginger",
        "size": "L",
        "price": 739000,
        "compareAtPrice": 749000,
        "offlineBazaarPrice": 489000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_26",
        "sku": "PRISCILA-PLEATEDPANTS-GOLDGINGER-XL",
        "skuNo": 26,
        "skuCode": "PRISCILA-PLEATEDPANTS-GOLDGINGER-XL",
        "skuName": "AISCHMIRA Priscila Pleated Pants Gold Ginger XL",
        "color": "Gold Ginger",
        "size": "XL",
        "price": 739000,
        "compareAtPrice": 749000,
        "offlineBazaarPrice": 489000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_27",
        "sku": "PRISCILA-PLEATEDPANTS-TEALMINT-S",
        "skuNo": 27,
        "skuCode": "PRISCILA-PLEATEDPANTS-TEALMINT-S",
        "skuName": "AISCHMIRA Priscila Pleated Pants Teal Mint S",
        "color": "Teal Mint",
        "size": "S",
        "price": 739000,
        "compareAtPrice": 749000,
        "offlineBazaarPrice": 489000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_28",
        "sku": "PRISCILA-PLEATEDPANTS-TEALMINT-M",
        "skuNo": 28,
        "skuCode": "PRISCILA-PLEATEDPANTS-TEALMINT-M",
        "skuName": "AISCHMIRA Priscila Pleated Pants Teal Mint M",
        "color": "Teal Mint",
        "size": "M",
        "price": 739000,
        "compareAtPrice": 749000,
        "offlineBazaarPrice": 489000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_29",
        "sku": "PRISCILA-PLEATEDPANTS-TEALMINT-L",
        "skuNo": 29,
        "skuCode": "PRISCILA-PLEATEDPANTS-TEALMINT-L",
        "skuName": "AISCHMIRA Priscila Pleated Pants Teal Mint L",
        "color": "Teal Mint",
        "size": "L",
        "price": 739000,
        "compareAtPrice": 749000,
        "offlineBazaarPrice": 489000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_30",
        "sku": "PRISCILA-PLEATEDPANTS-TEALMINT-XL",
        "skuNo": 30,
        "skuCode": "PRISCILA-PLEATEDPANTS-TEALMINT-XL",
        "skuName": "AISCHMIRA Priscila Pleated Pants Teal Mint XL",
        "color": "Teal Mint",
        "size": "XL",
        "price": 739000,
        "compareAtPrice": 749000,
        "offlineBazaarPrice": 489000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": false,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_4",
    "sku": "SAFIRA-TOP-GREENPANDAN-S",
    "name": "Safira Top",
    "slug": "safira-top",
    "categoryId": "Tops",
    "category": "Tops",
    "collectionId": "col_safira",
    "collection": "Safira",
    "type": "Top",
    "fabric": "Cotton Toyobo Premium",
    "price": 1249000,
    "basePrice": 1249000,
    "compareAtPrice": 1269000,
    "offlineBazaarPrice": 829000,
    "currency": "IDR",
    "description": "The Safira Top from the AISCHMIRA Safira collection. Tailored in Cotton Toyobo Premium with architectural precision and timeless editorial elegance.",
    "story": "Part of the Safira collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Green Pandan",
      "Beige Candlenut",
      "Brown Cinnamon"
    ],
    "availableSizes": [
      "S-M",
      "L-XL"
    ],
    "variants": [
      {
        "id": "v_31",
        "sku": "SAFIRA-TOP-GREENPANDAN-S-M",
        "skuNo": 31,
        "skuCode": "SAFIRA-TOP-GREENPANDAN-S-M",
        "skuName": "AISCHMIRA Safira Top Green Pandan S-M",
        "color": "Green Pandan",
        "size": "S-M",
        "price": 1249000,
        "compareAtPrice": 1269000,
        "offlineBazaarPrice": 829000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_32",
        "sku": "SAFIRA-TOP-GREENPANDAN-L-XL",
        "skuNo": 32,
        "skuCode": "SAFIRA-TOP-GREENPANDAN-L-XL",
        "skuName": "AISCHMIRA Safira Top Green Pandan L-XL",
        "color": "Green Pandan",
        "size": "L-XL",
        "price": 1249000,
        "compareAtPrice": 1269000,
        "offlineBazaarPrice": 829000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_33",
        "sku": "SAFIRA-TOP-BEIGECANDLENUT-S-M",
        "skuNo": 33,
        "skuCode": "SAFIRA-TOP-BEIGECANDLENUT-S-M",
        "skuName": "AISCHMIRA Safira Top Beige Candlenut S-M",
        "color": "Beige Candlenut",
        "size": "S-M",
        "price": 1249000,
        "compareAtPrice": 1269000,
        "offlineBazaarPrice": 829000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_34",
        "sku": "SAFIRA-TOP-BEIGECANDLENUT-L-XL",
        "skuNo": 34,
        "skuCode": "SAFIRA-TOP-BEIGECANDLENUT-L-XL",
        "skuName": "AISCHMIRA Safira Top Beige Candlenut L-XL",
        "color": "Beige Candlenut",
        "size": "L-XL",
        "price": 1249000,
        "compareAtPrice": 1269000,
        "offlineBazaarPrice": 829000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_35",
        "sku": "SAFIRA-TOP-BROWNCINNAMON-S-M",
        "skuNo": 35,
        "skuCode": "SAFIRA-TOP-BROWNCINNAMON-S-M",
        "skuName": "AISCHMIRA Safira Top Brown Cinnamon S-M",
        "color": "Brown Cinnamon",
        "size": "S-M",
        "price": 1249000,
        "compareAtPrice": 1269000,
        "offlineBazaarPrice": 829000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_36",
        "sku": "SAFIRA-TOP-BROWNCINNAMON-L-XL",
        "skuNo": 36,
        "skuCode": "SAFIRA-TOP-BROWNCINNAMON-L-XL",
        "skuName": "AISCHMIRA Safira Top Brown Cinnamon L-XL",
        "color": "Brown Cinnamon",
        "size": "L-XL",
        "price": 1249000,
        "compareAtPrice": 1269000,
        "offlineBazaarPrice": 829000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": true,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_5",
    "sku": "SAFIRA-SKIRT-GREENPANDAN-S",
    "name": "Safira Skirt",
    "slug": "safira-skirt",
    "categoryId": "Bottoms",
    "category": "Bottoms",
    "collectionId": "col_safira",
    "collection": "Safira",
    "type": "Skirt",
    "fabric": "Cotton Toyobo Premium",
    "price": 829000,
    "basePrice": 829000,
    "compareAtPrice": 839000,
    "offlineBazaarPrice": 549000,
    "currency": "IDR",
    "description": "The Safira Skirt from the AISCHMIRA Safira collection. Tailored in Cotton Toyobo Premium with architectural precision and timeless editorial elegance.",
    "story": "Part of the Safira collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Green Pandan",
      "Beige Candlenut",
      "Brown Cinnamon"
    ],
    "availableSizes": [
      "S-M",
      "L-XL"
    ],
    "variants": [
      {
        "id": "v_37",
        "sku": "SAFIRA-SKIRT-GREENPANDAN-S-M",
        "skuNo": 37,
        "skuCode": "SAFIRA-SKIRT-GREENPANDAN-S-M",
        "skuName": "AISCHMIRA Safira Skirt Green Pandan S-M",
        "color": "Green Pandan",
        "size": "S-M",
        "price": 829000,
        "compareAtPrice": 839000,
        "offlineBazaarPrice": 549000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_38",
        "sku": "SAFIRA-SKIRT-GREENPANDAN-L-XL",
        "skuNo": 38,
        "skuCode": "SAFIRA-SKIRT-GREENPANDAN-L-XL",
        "skuName": "AISCHMIRA Safira Skirt Green Pandan L-XL",
        "color": "Green Pandan",
        "size": "L-XL",
        "price": 829000,
        "compareAtPrice": 839000,
        "offlineBazaarPrice": 549000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_39",
        "sku": "SAFIRA-SKIRT-BEIGECANDLENUT-S-M",
        "skuNo": 39,
        "skuCode": "SAFIRA-SKIRT-BEIGECANDLENUT-S-M",
        "skuName": "AISCHMIRA Safira Skirt Beige Candlenut S-M",
        "color": "Beige Candlenut",
        "size": "S-M",
        "price": 829000,
        "compareAtPrice": 839000,
        "offlineBazaarPrice": 549000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_40",
        "sku": "SAFIRA-SKIRT-BEIGECANDLENUT-L-XL",
        "skuNo": 40,
        "skuCode": "SAFIRA-SKIRT-BEIGECANDLENUT-L-XL",
        "skuName": "AISCHMIRA Safira Skirt Beige Candlenut L-XL",
        "color": "Beige Candlenut",
        "size": "L-XL",
        "price": 829000,
        "compareAtPrice": 839000,
        "offlineBazaarPrice": 549000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_41",
        "sku": "SAFIRA-SKIRT-BROWNCINNAMON-S-M",
        "skuNo": 41,
        "skuCode": "SAFIRA-SKIRT-BROWNCINNAMON-S-M",
        "skuName": "AISCHMIRA Safira Skirt Brown Cinnamon S-M",
        "color": "Brown Cinnamon",
        "size": "S-M",
        "price": 829000,
        "compareAtPrice": 839000,
        "offlineBazaarPrice": 549000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_42",
        "sku": "SAFIRA-SKIRT-BROWNCINNAMON-L-XL",
        "skuNo": 42,
        "skuCode": "SAFIRA-SKIRT-BROWNCINNAMON-L-XL",
        "skuName": "AISCHMIRA Safira Skirt Brown Cinnamon L-XL",
        "color": "Brown Cinnamon",
        "size": "L-XL",
        "price": 829000,
        "compareAtPrice": 839000,
        "offlineBazaarPrice": 549000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": true,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_6",
    "sku": "BRIANA-BLOUSE-LIGHTTEALGALANGAL",
    "name": "Briana Blouse",
    "slug": "briana-blouse",
    "categoryId": "Tops",
    "category": "Tops",
    "collectionId": "col_briana",
    "collection": "Briana",
    "type": "Blouse",
    "fabric": "Satin Armani",
    "price": 599000,
    "basePrice": 599000,
    "compareAtPrice": 609000,
    "offlineBazaarPrice": 399000,
    "currency": "IDR",
    "description": "The Briana Blouse from the AISCHMIRA Briana collection. Tailored in Satin Armani with architectural precision and timeless editorial elegance.",
    "story": "Part of the Briana collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Light Teal Galangal",
      "Black Chili",
      "White Clove"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "variants": [
      {
        "id": "v_43",
        "sku": "BRIANA-BLOUSE-LIGHTTEALGALANGAL-S",
        "skuNo": 43,
        "skuCode": "BRIANA-BLOUSE-LIGHTTEALGALANGAL-S",
        "skuName": "AISCHMIRA Briana Blouse Light Teal Galangal S",
        "color": "Light Teal Galangal",
        "size": "S",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_44",
        "sku": "BRIANA-BLOUSE-LIGHTTEALGALANGAL-M",
        "skuNo": 44,
        "skuCode": "BRIANA-BLOUSE-LIGHTTEALGALANGAL-M",
        "skuName": "AISCHMIRA Briana Blouse Light Teal Galangal M",
        "color": "Light Teal Galangal",
        "size": "M",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_45",
        "sku": "BRIANA-BLOUSE-LIGHTTEALGALANGAL-L",
        "skuNo": 45,
        "skuCode": "BRIANA-BLOUSE-LIGHTTEALGALANGAL-L",
        "skuName": "AISCHMIRA Briana Blouse Light Teal Galangal L",
        "color": "Light Teal Galangal",
        "size": "L",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_46",
        "sku": "BRIANA-BLOUSE-LIGHTTEALGALANGAL-XL",
        "skuNo": 46,
        "skuCode": "BRIANA-BLOUSE-LIGHTTEALGALANGAL-XL",
        "skuName": "AISCHMIRA Briana Blouse Light Teal Galangal XL",
        "color": "Light Teal Galangal",
        "size": "XL",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_47",
        "sku": "BRIANA-BLOUSE-BLACKCHILI-S",
        "skuNo": 47,
        "skuCode": "BRIANA-BLOUSE-BLACKCHILI-S",
        "skuName": "AISCHMIRA Briana Blouse Black Chili S",
        "color": "Black Chili",
        "size": "S",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_48",
        "sku": "BRIANA-BLOUSE-BLACKCHILI-M",
        "skuNo": 48,
        "skuCode": "BRIANA-BLOUSE-BLACKCHILI-M",
        "skuName": "AISCHMIRA Briana Blouse Black Chili M",
        "color": "Black Chili",
        "size": "M",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_49",
        "sku": "BRIANA-BLOUSE-BLACKCHILI-L",
        "skuNo": 49,
        "skuCode": "BRIANA-BLOUSE-BLACKCHILI-L",
        "skuName": "AISCHMIRA Briana Blouse Black Chili L",
        "color": "Black Chili",
        "size": "L",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_50",
        "sku": "BRIANA-BLOUSE-BLACKCHILI-XL",
        "skuNo": 50,
        "skuCode": "BRIANA-BLOUSE-BLACKCHILI-XL",
        "skuName": "AISCHMIRA Briana Blouse Black Chili XL",
        "color": "Black Chili",
        "size": "XL",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_51",
        "sku": "BRIANA-BLOUSE-WHITECLOVE-S",
        "skuNo": 51,
        "skuCode": "BRIANA-BLOUSE-WHITECLOVE-S",
        "skuName": "AISCHMIRA Briana Blouse White Clove S",
        "color": "White Clove",
        "size": "S",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_52",
        "sku": "BRIANA-BLOUSE-WHITECLOVE-M",
        "skuNo": 52,
        "skuCode": "BRIANA-BLOUSE-WHITECLOVE-M",
        "skuName": "AISCHMIRA Briana Blouse White Clove M",
        "color": "White Clove",
        "size": "M",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_53",
        "sku": "BRIANA-BLOUSE-WHITECLOVE-L",
        "skuNo": 53,
        "skuCode": "BRIANA-BLOUSE-WHITECLOVE-L",
        "skuName": "AISCHMIRA Briana Blouse White Clove L",
        "color": "White Clove",
        "size": "L",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_54",
        "sku": "BRIANA-BLOUSE-WHITECLOVE-XL",
        "skuNo": 54,
        "skuCode": "BRIANA-BLOUSE-WHITECLOVE-XL",
        "skuName": "AISCHMIRA Briana Blouse White Clove XL",
        "color": "White Clove",
        "size": "XL",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": false,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_7",
    "sku": "TIFANI-TROUSERS-BROWNCLOVE",
    "name": "Tifani Trousers",
    "slug": "tifani-trousers",
    "categoryId": "Bottoms",
    "category": "Bottoms",
    "collectionId": "col_tifani",
    "collection": "Tifani",
    "type": "Trousers",
    "fabric": "Satin Maxmara",
    "price": 599000,
    "basePrice": 599000,
    "compareAtPrice": 609000,
    "offlineBazaarPrice": 399000,
    "currency": "IDR",
    "description": "The Tifani Trousers from the AISCHMIRA Tifani collection. Tailored in Satin Maxmara with architectural precision and timeless editorial elegance.",
    "story": "Part of the Tifani collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Brown Clove",
      "Red Chili",
      "Gold Coriander Seed"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "variants": [
      {
        "id": "v_55",
        "sku": "TIFANI-TROUSERS-BROWNCLOVE-S",
        "skuNo": 55,
        "skuCode": "TIFANI-TROUSERS-BROWNCLOVE-S",
        "skuName": "AISCHMIRA Tifani Trousers Brown Clove S",
        "color": "Brown Clove",
        "size": "S",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_56",
        "sku": "TIFANI-TROUSERS-BROWNCLOVE-M",
        "skuNo": 56,
        "skuCode": "TIFANI-TROUSERS-BROWNCLOVE-M",
        "skuName": "AISCHMIRA Tifani Trousers Brown Clove M",
        "color": "Brown Clove",
        "size": "M",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_57",
        "sku": "TIFANI-TROUSERS-BROWNCLOVE-L",
        "skuNo": 57,
        "skuCode": "TIFANI-TROUSERS-BROWNCLOVE-L",
        "skuName": "AISCHMIRA Tifani Trousers Brown Clove L",
        "color": "Brown Clove",
        "size": "L",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_58",
        "sku": "TIFANI-TROUSERS-BROWNCLOVE-XL",
        "skuNo": 58,
        "skuCode": "TIFANI-TROUSERS-BROWNCLOVE-XL",
        "skuName": "AISCHMIRA Tifani Trousers Brown Clove XL",
        "color": "Brown Clove",
        "size": "XL",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_59",
        "sku": "TIFANI-TROUSERS-REDCHILI-S",
        "skuNo": 59,
        "skuCode": "TIFANI-TROUSERS-REDCHILI-S",
        "skuName": "AISCHMIRA Tifani Trousers Red Chili S",
        "color": "Red Chili",
        "size": "S",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_60",
        "sku": "TIFANI-TROUSERS-REDCHILI-M",
        "skuNo": 60,
        "skuCode": "TIFANI-TROUSERS-REDCHILI-M",
        "skuName": "AISCHMIRA Tifani Trousers Red Chili M",
        "color": "Red Chili",
        "size": "M",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_61",
        "sku": "TIFANI-TROUSERS-REDCHILI-L",
        "skuNo": 61,
        "skuCode": "TIFANI-TROUSERS-REDCHILI-L",
        "skuName": "AISCHMIRA Tifani Trousers Red Chili L",
        "color": "Red Chili",
        "size": "L",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_62",
        "sku": "TIFANI-TROUSERS-REDCHILI-XL",
        "skuNo": 62,
        "skuCode": "TIFANI-TROUSERS-REDCHILI-XL",
        "skuName": "AISCHMIRA Tifani Trousers Red Chili XL",
        "color": "Red Chili",
        "size": "XL",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_63",
        "sku": "TIFANI-TROUSERS-GOLDCORIANDERSEED-S",
        "skuNo": 63,
        "skuCode": "TIFANI-TROUSERS-GOLDCORIANDERSEED-S",
        "skuName": "AISCHMIRA Tifani Trousers Gold Coriander Seed S",
        "color": "Gold Coriander Seed",
        "size": "S",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_64",
        "sku": "TIFANI-TROUSERS-GOLDCORIANDERSEED-M",
        "skuNo": 64,
        "skuCode": "TIFANI-TROUSERS-GOLDCORIANDERSEED-M",
        "skuName": "AISCHMIRA Tifani Trousers Gold Coriander Seed M",
        "color": "Gold Coriander Seed",
        "size": "M",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_65",
        "sku": "TIFANI-TROUSERS-GOLDCORIANDERSEED-L",
        "skuNo": 65,
        "skuCode": "TIFANI-TROUSERS-GOLDCORIANDERSEED-L",
        "skuName": "AISCHMIRA Tifani Trousers Gold Coriander Seed L",
        "color": "Gold Coriander Seed",
        "size": "L",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_66",
        "sku": "TIFANI-TROUSERS-GOLDCORIANDERSEED-XL",
        "skuNo": 66,
        "skuCode": "TIFANI-TROUSERS-GOLDCORIANDERSEED-XL",
        "skuName": "AISCHMIRA Tifani Trousers Gold Coriander Seed XL",
        "color": "Gold Coriander Seed",
        "size": "XL",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": false,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_8",
    "sku": "ZAMIRA-LONGDRESS-MULTICOLORGARLIC",
    "name": "Zamira Long Dress",
    "slug": "zamira-long-dress",
    "categoryId": "Dress",
    "category": "Dress",
    "collectionId": "col_zamira",
    "collection": "Zamira",
    "type": "Long Dress",
    "fabric": "Satin Printing",
    "price": 1949000,
    "basePrice": 1949000,
    "compareAtPrice": 1969000,
    "offlineBazaarPrice": 1299000,
    "currency": "IDR",
    "description": "The Zamira Long Dress from the AISCHMIRA Zamira collection. Tailored in Satin Printing with architectural precision and timeless editorial elegance.",
    "story": "Part of the Zamira collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Multicolor Garlic",
      "Green Lime",
      "Orange Turmeric"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "variants": [
      {
        "id": "v_67",
        "sku": "ZAMIRA-LONGDRESS-MULTICOLORGARLIC-S",
        "skuNo": 67,
        "skuCode": "ZAMIRA-LONGDRESS-MULTICOLORGARLIC-S",
        "skuName": "AISCHMIRA Zamira Long Dress Multicolor Garlic",
        "color": "Multicolor Garlic",
        "size": "S",
        "price": 1949000,
        "compareAtPrice": 1969000,
        "offlineBazaarPrice": 1299000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_68",
        "sku": "ZAMIRA-LONGDRESS-MULTICOLORGARLIC-M",
        "skuNo": 68,
        "skuCode": "ZAMIRA-LONGDRESS-MULTICOLORGARLIC-M",
        "skuName": "AISCHMIRA Zamira Long Dress Multicolor Garlic",
        "color": "Multicolor Garlic",
        "size": "M",
        "price": 1949000,
        "compareAtPrice": 1969000,
        "offlineBazaarPrice": 1299000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_69",
        "sku": "ZAMIRA-LONGDRESS-MULTICOLORGARLIC-L",
        "skuNo": 69,
        "skuCode": "ZAMIRA-LONGDRESS-MULTICOLORGARLIC-L",
        "skuName": "AISCHMIRA Zamira Long Dress Multicolor Garlic",
        "color": "Multicolor Garlic",
        "size": "L",
        "price": 1949000,
        "compareAtPrice": 1969000,
        "offlineBazaarPrice": 1299000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_70",
        "sku": "ZAMIRA-LONGDRESS-MULTICOLORGARLIC-XL",
        "skuNo": 70,
        "skuCode": "ZAMIRA-LONGDRESS-MULTICOLORGARLIC-XL",
        "skuName": "AISCHMIRA Zamira Long Dress Multicolor Garlic",
        "color": "Multicolor Garlic",
        "size": "XL",
        "price": 1949000,
        "compareAtPrice": 1969000,
        "offlineBazaarPrice": 1299000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_71",
        "sku": "ZAMIRA-LONGDRESS-GREENLIME-S",
        "skuNo": 71,
        "skuCode": "ZAMIRA-LONGDRESS-GREENLIME-S",
        "skuName": "AISCHMIRA Zamira Long Dress Green Lime",
        "color": "Green Lime",
        "size": "S",
        "price": 1949000,
        "compareAtPrice": 1969000,
        "offlineBazaarPrice": 1299000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_72",
        "sku": "ZAMIRA-LONGDRESS-GREENLIME-M",
        "skuNo": 72,
        "skuCode": "ZAMIRA-LONGDRESS-GREENLIME-M",
        "skuName": "AISCHMIRA Zamira Long Dress Green Lime",
        "color": "Green Lime",
        "size": "M",
        "price": 1949000,
        "compareAtPrice": 1969000,
        "offlineBazaarPrice": 1299000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_73",
        "sku": "ZAMIRA-LONGDRESS-GREENLIME-L",
        "skuNo": 73,
        "skuCode": "ZAMIRA-LONGDRESS-GREENLIME-L",
        "skuName": "AISCHMIRA Zamira Long Dress Green Lime",
        "color": "Green Lime",
        "size": "L",
        "price": 1949000,
        "compareAtPrice": 1969000,
        "offlineBazaarPrice": 1299000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_74",
        "sku": "ZAMIRA-LONGDRESS-GREENLIME-XL",
        "skuNo": 74,
        "skuCode": "ZAMIRA-LONGDRESS-GREENLIME-XL",
        "skuName": "AISCHMIRA Zamira Long Dress Green Lime",
        "color": "Green Lime",
        "size": "XL",
        "price": 1949000,
        "compareAtPrice": 1969000,
        "offlineBazaarPrice": 1299000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_75",
        "sku": "ZAMIRA-LONGDRESS-ORANGETURMERIC-S",
        "skuNo": 75,
        "skuCode": "ZAMIRA-LONGDRESS-ORANGETURMERIC-S",
        "skuName": "AISCHMIRA Zamira Long Dress Orange Turmeric",
        "color": "Orange Turmeric",
        "size": "S",
        "price": 1949000,
        "compareAtPrice": 1969000,
        "offlineBazaarPrice": 1299000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_76",
        "sku": "ZAMIRA-LONGDRESS-ORANGETURMERIC-M",
        "skuNo": 76,
        "skuCode": "ZAMIRA-LONGDRESS-ORANGETURMERIC-M",
        "skuName": "AISCHMIRA Zamira Long Dress Orange Turmeric",
        "color": "Orange Turmeric",
        "size": "M",
        "price": 1949000,
        "compareAtPrice": 1969000,
        "offlineBazaarPrice": 1299000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_77",
        "sku": "ZAMIRA-LONGDRESS-ORANGETURMERIC-L",
        "skuNo": 77,
        "skuCode": "ZAMIRA-LONGDRESS-ORANGETURMERIC-L",
        "skuName": "AISCHMIRA Zamira Long Dress Orange Turmeric",
        "color": "Orange Turmeric",
        "size": "L",
        "price": 1949000,
        "compareAtPrice": 1969000,
        "offlineBazaarPrice": 1299000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_78",
        "sku": "ZAMIRA-LONGDRESS-ORANGETURMERIC-XL",
        "skuNo": 78,
        "skuCode": "ZAMIRA-LONGDRESS-ORANGETURMERIC-XL",
        "skuName": "AISCHMIRA Zamira Long Dress Orange Turmeric",
        "color": "Orange Turmeric",
        "size": "XL",
        "price": 1949000,
        "compareAtPrice": 1969000,
        "offlineBazaarPrice": 1299000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": false,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_9",
    "sku": "GENDIS-TOP-PINKCHILI",
    "name": "Gendis Top",
    "slug": "gendis-top",
    "categoryId": "Tops",
    "category": "Tops",
    "collectionId": "col_gendis",
    "collection": "Gendis",
    "type": "Top",
    "fabric": "Satin Bridal",
    "price": 1049000,
    "basePrice": 1049000,
    "compareAtPrice": 1069000,
    "offlineBazaarPrice": 699000,
    "currency": "IDR",
    "description": "The Gendis Top from the AISCHMIRA Gendis collection. Tailored in Satin Bridal with architectural precision and timeless editorial elegance.",
    "story": "Part of the Gendis collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Pink Chili",
      "Gold Chili",
      "Green Chili",
      "Purple Chili"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "variants": [
      {
        "id": "v_79",
        "sku": "GENDIS-TOP-PINKCHILI-S",
        "skuNo": 79,
        "skuCode": "GENDIS-TOP-PINKCHILI-S",
        "skuName": "AISCHMIRA Gendis Top Pink Chili S",
        "color": "Pink Chili",
        "size": "S",
        "price": 1049000,
        "compareAtPrice": 1069000,
        "offlineBazaarPrice": 699000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_80",
        "sku": "GENDIS-TOP-PINKCHILI-M",
        "skuNo": 80,
        "skuCode": "GENDIS-TOP-PINKCHILI-M",
        "skuName": "AISCHMIRA Gendis Top Pink Chili M",
        "color": "Pink Chili",
        "size": "M",
        "price": 1049000,
        "compareAtPrice": 1069000,
        "offlineBazaarPrice": 699000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_81",
        "sku": "GENDIS-TOP-PINKCHILI-L",
        "skuNo": 81,
        "skuCode": "GENDIS-TOP-PINKCHILI-L",
        "skuName": "AISCHMIRA Gendis Top Pink Chili L",
        "color": "Pink Chili",
        "size": "L",
        "price": 1049000,
        "compareAtPrice": 1069000,
        "offlineBazaarPrice": 699000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_82",
        "sku": "GENDIS-TOP-PINKCHILI-XL",
        "skuNo": 82,
        "skuCode": "GENDIS-TOP-PINKCHILI-XL",
        "skuName": "AISCHMIRA Gendis Top Pink Chili XL",
        "color": "Pink Chili",
        "size": "XL",
        "price": 1049000,
        "compareAtPrice": 1069000,
        "offlineBazaarPrice": 699000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_83",
        "sku": "GENDIS-TOP-GOLDCHILI-S",
        "skuNo": 83,
        "skuCode": "GENDIS-TOP-GOLDCHILI-S",
        "skuName": "AISCHMIRA Gendis Top Gold Chili S",
        "color": "Gold Chili",
        "size": "S",
        "price": 1049000,
        "compareAtPrice": 1069000,
        "offlineBazaarPrice": 699000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_84",
        "sku": "GENDIS-TOP-GOLDCHILI-M",
        "skuNo": 84,
        "skuCode": "GENDIS-TOP-GOLDCHILI-M",
        "skuName": "AISCHMIRA Gendis Top Gold Chili M",
        "color": "Gold Chili",
        "size": "M",
        "price": 1049000,
        "compareAtPrice": 1069000,
        "offlineBazaarPrice": 699000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_85",
        "sku": "GENDIS-TOP-GOLDCHILI-L",
        "skuNo": 85,
        "skuCode": "GENDIS-TOP-GOLDCHILI-L",
        "skuName": "AISCHMIRA Gendis Top Gold Chili L",
        "color": "Gold Chili",
        "size": "L",
        "price": 1049000,
        "compareAtPrice": 1069000,
        "offlineBazaarPrice": 699000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_86",
        "sku": "GENDIS-TOP-GOLDCHILI-XL",
        "skuNo": 86,
        "skuCode": "GENDIS-TOP-GOLDCHILI-XL",
        "skuName": "AISCHMIRA Gendis Top Gold Chili XL",
        "color": "Gold Chili",
        "size": "XL",
        "price": 1049000,
        "compareAtPrice": 1069000,
        "offlineBazaarPrice": 699000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_87",
        "sku": "GENDIS-TOP-GREENCHILI-S",
        "skuNo": 87,
        "skuCode": "GENDIS-TOP-GREENCHILI-S",
        "skuName": "AISCHMIRA Gendis Top Green Chili S",
        "color": "Green Chili",
        "size": "S",
        "price": 1049000,
        "compareAtPrice": 1069000,
        "offlineBazaarPrice": 699000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_88",
        "sku": "GENDIS-TOP-GREENCHILI-M",
        "skuNo": 88,
        "skuCode": "GENDIS-TOP-GREENCHILI-M",
        "skuName": "AISCHMIRA Gendis Top Green Chili M",
        "color": "Green Chili",
        "size": "M",
        "price": 1049000,
        "compareAtPrice": 1069000,
        "offlineBazaarPrice": 699000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_89",
        "sku": "GENDIS-TOP-GREENCHILI-L",
        "skuNo": 89,
        "skuCode": "GENDIS-TOP-GREENCHILI-L",
        "skuName": "AISCHMIRA Gendis Top Green Chili L",
        "color": "Green Chili",
        "size": "L",
        "price": 1049000,
        "compareAtPrice": 1069000,
        "offlineBazaarPrice": 699000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_90",
        "sku": "GENDIS-TOP-GREENCHILI-XL",
        "skuNo": 90,
        "skuCode": "GENDIS-TOP-GREENCHILI-XL",
        "skuName": "AISCHMIRA Gendis Top Green Chili XL",
        "color": "Green Chili",
        "size": "XL",
        "price": 1049000,
        "compareAtPrice": 1069000,
        "offlineBazaarPrice": 699000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_91",
        "sku": "GENDIS-TOP-PURPLECHILI-S",
        "skuNo": 91,
        "skuCode": "GENDIS-TOP-PURPLECHILI-S",
        "skuName": "AISCHMIRA Gendis Top Purple Chili S",
        "color": "Purple Chili",
        "size": "S",
        "price": 1049000,
        "compareAtPrice": 1069000,
        "offlineBazaarPrice": 699000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_92",
        "sku": "GENDIS-TOP-PURPLECHILI-M",
        "skuNo": 92,
        "skuCode": "GENDIS-TOP-PURPLECHILI-M",
        "skuName": "AISCHMIRA Gendis Top Purple Chili M",
        "color": "Purple Chili",
        "size": "M",
        "price": 1049000,
        "compareAtPrice": 1069000,
        "offlineBazaarPrice": 699000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_93",
        "sku": "GENDIS-TOP-PURPLECHILI-L",
        "skuNo": 93,
        "skuCode": "GENDIS-TOP-PURPLECHILI-L",
        "skuName": "AISCHMIRA Gendis Top Purple Chili L",
        "color": "Purple Chili",
        "size": "L",
        "price": 1049000,
        "compareAtPrice": 1069000,
        "offlineBazaarPrice": 699000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_94",
        "sku": "GENDIS-TOP-PURPLECHILI-XL",
        "skuNo": 94,
        "skuCode": "GENDIS-TOP-PURPLECHILI-XL",
        "skuName": "AISCHMIRA Gendis Top Purple Chili XL",
        "color": "Purple Chili",
        "size": "XL",
        "price": 1049000,
        "compareAtPrice": 1069000,
        "offlineBazaarPrice": 699000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": false,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_10",
    "sku": "AMARA-SKIRT-PINKCHILI",
    "name": "Amara Skirt",
    "slug": "amara-skirt",
    "categoryId": "Bottoms",
    "category": "Bottoms",
    "collectionId": "col_amara",
    "collection": "Amara",
    "type": "Skirt",
    "fabric": "Satin Bridal",
    "price": 1099000,
    "basePrice": 1099000,
    "compareAtPrice": 1119000,
    "offlineBazaarPrice": 729000,
    "currency": "IDR",
    "description": "The Amara Skirt from the AISCHMIRA Amara collection. Tailored in Satin Bridal with architectural precision and timeless editorial elegance.",
    "story": "Part of the Amara collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Pink Chili",
      "Green Chili",
      "Light Green Chili",
      "Purple Chili"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "variants": [
      {
        "id": "v_95",
        "sku": "AMARA-SKIRT-PINKCHILI-S",
        "skuNo": 95,
        "skuCode": "AMARA-SKIRT-PINKCHILI-S",
        "skuName": "AISCHMIRA Amara Skirt Pink Chili S",
        "color": "Pink Chili",
        "size": "S",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_96",
        "sku": "AMARA-SKIRT-PINKCHILI-M",
        "skuNo": 96,
        "skuCode": "AMARA-SKIRT-PINKCHILI-M",
        "skuName": "AISCHMIRA Amara Skirt Pink Chili M",
        "color": "Pink Chili",
        "size": "M",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_97",
        "sku": "AMARA-SKIRT-PINKCHILI-L",
        "skuNo": 97,
        "skuCode": "AMARA-SKIRT-PINKCHILI-L",
        "skuName": "AISCHMIRA Amara Skirt Pink Chili L",
        "color": "Pink Chili",
        "size": "L",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_98",
        "sku": "AMARA-SKIRT-PINKCHILI-XL",
        "skuNo": 98,
        "skuCode": "AMARA-SKIRT-PINKCHILI-XL",
        "skuName": "AISCHMIRA Amara Skirt Pink Chili XL",
        "color": "Pink Chili",
        "size": "XL",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_99",
        "sku": "AMARA-SKIRT-GREENCHILI-S",
        "skuNo": 99,
        "skuCode": "AMARA-SKIRT-GREENCHILI-S",
        "skuName": "AISCHMIRA Amara Skirt Green Chili S",
        "color": "Green Chili",
        "size": "S",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_100",
        "sku": "AMARA-SKIRT-GREENCHILI-M",
        "skuNo": 100,
        "skuCode": "AMARA-SKIRT-GREENCHILI-M",
        "skuName": "AISCHMIRA Amara Skirt Green Chili M",
        "color": "Green Chili",
        "size": "M",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_101",
        "sku": "AMARA-SKIRT-GREENCHILI-L",
        "skuNo": 101,
        "skuCode": "AMARA-SKIRT-GREENCHILI-L",
        "skuName": "AISCHMIRA Amara Skirt Green Chili L",
        "color": "Green Chili",
        "size": "L",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_102",
        "sku": "AMARA-SKIRT-GREENCHILI-XL",
        "skuNo": 102,
        "skuCode": "AMARA-SKIRT-GREENCHILI-XL",
        "skuName": "AISCHMIRA Amara Skirt Green Chili XL",
        "color": "Green Chili",
        "size": "XL",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_103",
        "sku": "AMARA-SKIRT-LIGHTGREENCHILI-S",
        "skuNo": 103,
        "skuCode": "AMARA-SKIRT-LIGHTGREENCHILI-S",
        "skuName": "AISCHMIRA Amara Skirt Light Green Chili S",
        "color": "Light Green Chili",
        "size": "S",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_104",
        "sku": "AMARA-SKIRT-LIGHTGREENCHILI-M",
        "skuNo": 104,
        "skuCode": "AMARA-SKIRT-LIGHTGREENCHILI-M",
        "skuName": "AISCHMIRA Amara Skirt Light Green Chili M",
        "color": "Light Green Chili",
        "size": "M",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_105",
        "sku": "AMARA-SKIRT-LIGHTGREENCHILI-L",
        "skuNo": 105,
        "skuCode": "AMARA-SKIRT-LIGHTGREENCHILI-L",
        "skuName": "AISCHMIRA Amara Skirt Light Green Chili L",
        "color": "Light Green Chili",
        "size": "L",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_106",
        "sku": "AMARA-SKIRT-LIGHTGREENCHILI-XL",
        "skuNo": 106,
        "skuCode": "AMARA-SKIRT-LIGHTGREENCHILI-XL",
        "skuName": "AISCHMIRA Amara Skirt Light Green Chili XL",
        "color": "Light Green Chili",
        "size": "XL",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_107",
        "sku": "AMARA-SKIRT-PURPLECHILI-S",
        "skuNo": 107,
        "skuCode": "AMARA-SKIRT-PURPLECHILI-S",
        "skuName": "AISCHMIRA Amara Skirt Purple Chili S",
        "color": "Purple Chili",
        "size": "S",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_108",
        "sku": "AMARA-SKIRT-PURPLECHILI-M",
        "skuNo": 108,
        "skuCode": "AMARA-SKIRT-PURPLECHILI-M",
        "skuName": "AISCHMIRA Amara Skirt Purple Chili M",
        "color": "Purple Chili",
        "size": "M",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_109",
        "sku": "AMARA-SKIRT-PURPLECHILI-L",
        "skuNo": 109,
        "skuCode": "AMARA-SKIRT-PURPLECHILI-L",
        "skuName": "AISCHMIRA Amara Skirt Purple Chili L",
        "color": "Purple Chili",
        "size": "L",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_110",
        "sku": "AMARA-SKIRT-PURPLECHILI-XL",
        "skuNo": 110,
        "skuCode": "AMARA-SKIRT-PURPLECHILI-XL",
        "skuName": "AISCHMIRA Amara Skirt Purple Chili XL",
        "color": "Purple Chili",
        "size": "XL",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": false,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_11",
    "sku": "DASYA-BLOUSE-REDSICHUANPEPPER-S",
    "name": "Dasya Blouse",
    "slug": "dasya-blouse",
    "categoryId": "Tops",
    "category": "Tops",
    "collectionId": "col_dasya",
    "collection": "Dasya",
    "type": "Blouse",
    "fabric": "Tencel Uniqlo",
    "price": 619000,
    "basePrice": 619000,
    "compareAtPrice": 629000,
    "offlineBazaarPrice": 409000,
    "currency": "IDR",
    "description": "The Dasya Blouse from the AISCHMIRA Dasya collection. Tailored in Tencel Uniqlo with architectural precision and timeless editorial elegance.",
    "story": "Part of the Dasya collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Red Sichuan Pepper",
      "Green Cardamom",
      "White Garlic"
    ],
    "availableSizes": [
      "S-M",
      "L-XL"
    ],
    "variants": [
      {
        "id": "v_111",
        "sku": "DASYA-BLOUSE-REDSICHUANPEPPER-S-M",
        "skuNo": 111,
        "skuCode": "DASYA-BLOUSE-REDSICHUANPEPPER-S-M",
        "skuName": "AISCHMIRA Dasya Blouse Red Sichuan Pepper S-M",
        "color": "Red Sichuan Pepper",
        "size": "S-M",
        "price": 619000,
        "compareAtPrice": 629000,
        "offlineBazaarPrice": 409000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_112",
        "sku": "DASYA-BLOUSE-REDSICHUANPEPPER-L-XL",
        "skuNo": 112,
        "skuCode": "DASYA-BLOUSE-REDSICHUANPEPPER-L-XL",
        "skuName": "AISCHMIRA Dasya Blouse Red Sichuan Pepper L-XL",
        "color": "Red Sichuan Pepper",
        "size": "L-XL",
        "price": 619000,
        "compareAtPrice": 629000,
        "offlineBazaarPrice": 409000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_113",
        "sku": "DASYA-BLOUSE-GREENCARDAMOM-S-M",
        "skuNo": 113,
        "skuCode": "DASYA-BLOUSE-GREENCARDAMOM-S-M",
        "skuName": "AISCHMIRA Dasya Blouse Green Cardamom S-M",
        "color": "Green Cardamom",
        "size": "S-M",
        "price": 619000,
        "compareAtPrice": 629000,
        "offlineBazaarPrice": 409000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_114",
        "sku": "DASYA-BLOUSE-GREENCARDAMOM-L-XL",
        "skuNo": 114,
        "skuCode": "DASYA-BLOUSE-GREENCARDAMOM-L-XL",
        "skuName": "AISCHMIRA Dasya Blouse Green Cardamom L-XL",
        "color": "Green Cardamom",
        "size": "L-XL",
        "price": 619000,
        "compareAtPrice": 629000,
        "offlineBazaarPrice": 409000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_115",
        "sku": "DASYA-BLOUSE-WHITEGARLIC-S-M",
        "skuNo": 115,
        "skuCode": "DASYA-BLOUSE-WHITEGARLIC-S-M",
        "skuName": "AISCHMIRA Dasya Blouse White Garlic S-M",
        "color": "White Garlic",
        "size": "S-M",
        "price": 619000,
        "compareAtPrice": 629000,
        "offlineBazaarPrice": 409000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_116",
        "sku": "DASYA-BLOUSE-WHITEGARLIC-L-XL",
        "skuNo": 116,
        "skuCode": "DASYA-BLOUSE-WHITEGARLIC-L-XL",
        "skuName": "AISCHMIRA Dasya Blouse White Garlic L-XL",
        "color": "White Garlic",
        "size": "L-XL",
        "price": 619000,
        "compareAtPrice": 629000,
        "offlineBazaarPrice": 409000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": false,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_12",
    "sku": "DASYA-TROUSERS-REDSICHUANPEPPER-S",
    "name": "Dasya Trousers",
    "slug": "dasya-trousers",
    "categoryId": "Bottoms",
    "category": "Bottoms",
    "collectionId": "col_dasya",
    "collection": "Dasya",
    "type": "Trousers",
    "fabric": "Tencel Uniqlo",
    "price": 589000,
    "basePrice": 589000,
    "compareAtPrice": 599000,
    "offlineBazaarPrice": 389000,
    "currency": "IDR",
    "description": "The Dasya Trousers from the AISCHMIRA Dasya collection. Tailored in Tencel Uniqlo with architectural precision and timeless editorial elegance.",
    "story": "Part of the Dasya collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Red Sichuan Pepper",
      "Green Cardamom",
      "White Garlic"
    ],
    "availableSizes": [
      "S-M",
      "L-XL"
    ],
    "variants": [
      {
        "id": "v_117",
        "sku": "DASYA-TROUSERS-REDSICHUANPEPPER-S-M",
        "skuNo": 117,
        "skuCode": "DASYA-TROUSERS-REDSICHUANPEPPER-S-M",
        "skuName": "AISCHMIRA Dasya Trousers Red Sichuan Pepper S-M",
        "color": "Red Sichuan Pepper",
        "size": "S-M",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_118",
        "sku": "DASYA-TROUSERS-REDSICHUANPEPPER-L-XL",
        "skuNo": 118,
        "skuCode": "DASYA-TROUSERS-REDSICHUANPEPPER-L-XL",
        "skuName": "AISCHMIRA Dasya Trousers Red Sichuan Pepper L-XL",
        "color": "Red Sichuan Pepper",
        "size": "L-XL",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_119",
        "sku": "DASYA-TROUSERS-GREENCARDAMOM-S-M",
        "skuNo": 119,
        "skuCode": "DASYA-TROUSERS-GREENCARDAMOM-S-M",
        "skuName": "AISCHMIRA Dasya Trousers Green Cardamom S-M",
        "color": "Green Cardamom",
        "size": "S-M",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_120",
        "sku": "DASYA-TROUSERS-GREENCARDAMOM-L-XL",
        "skuNo": 120,
        "skuCode": "DASYA-TROUSERS-GREENCARDAMOM-L-XL",
        "skuName": "AISCHMIRA Dasya Trousers Green Cardamom L-XL",
        "color": "Green Cardamom",
        "size": "L-XL",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_121",
        "sku": "DASYA-TROUSERS-WHITEGARLIC-S-M",
        "skuNo": 121,
        "skuCode": "DASYA-TROUSERS-WHITEGARLIC-S-M",
        "skuName": "AISCHMIRA Dasya Trousers White Garlic S-M",
        "color": "White Garlic",
        "size": "S-M",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_122",
        "sku": "DASYA-TROUSERS-WHITEGARLIC-L-XL",
        "skuNo": 122,
        "skuCode": "DASYA-TROUSERS-WHITEGARLIC-L-XL",
        "skuName": "AISCHMIRA Dasya Trousers White Garlic L-XL",
        "color": "White Garlic",
        "size": "L-XL",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": false,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_13",
    "sku": "JOLLY-LONGPYJAMASET-REDCHILI",
    "name": "Jolly Long Sleeve Top + Pants",
    "slug": "jolly-long-sleeve-top-pants",
    "categoryId": "Pyjamas",
    "category": "Pyjamas",
    "collectionId": "col_jolly",
    "collection": "Jolly",
    "type": "Long Sleeve Top + Pants",
    "fabric": "Satin",
    "price": 979000,
    "basePrice": 979000,
    "compareAtPrice": 989000,
    "offlineBazaarPrice": 649000,
    "currency": "IDR",
    "description": "The Jolly Long Sleeve Top + Pants from the AISCHMIRA Jolly collection. Tailored in Satin with architectural precision and timeless editorial elegance.",
    "story": "Part of the Jolly collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Red Chili",
      "Pink Garlic",
      "Purple Shallot"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "variants": [
      {
        "id": "v_123",
        "sku": "JOLLY-LONGPYJAMASET-REDCHILI-S",
        "skuNo": 123,
        "skuCode": "JOLLY-LONGPYJAMASET-REDCHILI-S",
        "skuName": "AISCHMIRA Jolly Long Pyjama Set Red Chili S",
        "color": "Red Chili",
        "size": "S",
        "price": 979000,
        "compareAtPrice": 989000,
        "offlineBazaarPrice": 649000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_124",
        "sku": "JOLLY-LONGPYJAMASET-REDCHILI-M",
        "skuNo": 124,
        "skuCode": "JOLLY-LONGPYJAMASET-REDCHILI-M",
        "skuName": "AISCHMIRA Jolly Long Pyjama Set Red Chili M",
        "color": "Red Chili",
        "size": "M",
        "price": 979000,
        "compareAtPrice": 989000,
        "offlineBazaarPrice": 649000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_125",
        "sku": "JOLLY-LONGPYJAMASET-REDCHILI-L",
        "skuNo": 125,
        "skuCode": "JOLLY-LONGPYJAMASET-REDCHILI-L",
        "skuName": "AISCHMIRA Jolly Long Pyjama Set Red Chili L",
        "color": "Red Chili",
        "size": "L",
        "price": 979000,
        "compareAtPrice": 989000,
        "offlineBazaarPrice": 649000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_126",
        "sku": "JOLLY-LONGPYJAMASET-REDCHILI-XL",
        "skuNo": 126,
        "skuCode": "JOLLY-LONGPYJAMASET-REDCHILI-XL",
        "skuName": "AISCHMIRA Jolly Long Pyjama Set Red Chili XL",
        "color": "Red Chili",
        "size": "XL",
        "price": 979000,
        "compareAtPrice": 989000,
        "offlineBazaarPrice": 649000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_127",
        "sku": "JOLLY-LONGPYJAMASET-PINKGARLIC-S",
        "skuNo": 127,
        "skuCode": "JOLLY-LONGPYJAMASET-PINKGARLIC-S",
        "skuName": "AISCHMIRA Jolly Long Pyjama Set Pink Garlic S",
        "color": "Pink Garlic",
        "size": "S",
        "price": 979000,
        "compareAtPrice": 989000,
        "offlineBazaarPrice": 649000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_128",
        "sku": "JOLLY-LONGPYJAMASET-PINKGARLIC-M",
        "skuNo": 128,
        "skuCode": "JOLLY-LONGPYJAMASET-PINKGARLIC-M",
        "skuName": "AISCHMIRA Jolly Long Pyjama Set Pink Garlic M",
        "color": "Pink Garlic",
        "size": "M",
        "price": 979000,
        "compareAtPrice": 989000,
        "offlineBazaarPrice": 649000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_129",
        "sku": "JOLLY-LONGPYJAMASET-PINKGARLIC-L",
        "skuNo": 129,
        "skuCode": "JOLLY-LONGPYJAMASET-PINKGARLIC-L",
        "skuName": "AISCHMIRA Jolly Long Pyjama Set Pink Garlic L",
        "color": "Pink Garlic",
        "size": "L",
        "price": 979000,
        "compareAtPrice": 989000,
        "offlineBazaarPrice": 649000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_130",
        "sku": "JOLLY-LONGPYJAMASET-PINKGARLIC-XL",
        "skuNo": 130,
        "skuCode": "JOLLY-LONGPYJAMASET-PINKGARLIC-XL",
        "skuName": "AISCHMIRA Jolly Long Pyjama Set Pink Garlic XL",
        "color": "Pink Garlic",
        "size": "XL",
        "price": 979000,
        "compareAtPrice": 989000,
        "offlineBazaarPrice": 649000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_131",
        "sku": "JOLLY-LONGPYJAMASET-PURPLESHALLOT-S",
        "skuNo": 131,
        "skuCode": "JOLLY-LONGPYJAMASET-PURPLESHALLOT-S",
        "skuName": "AISCHMIRA Jolly Long Pyjama Set Purple Shallot S",
        "color": "Purple Shallot",
        "size": "S",
        "price": 979000,
        "compareAtPrice": 989000,
        "offlineBazaarPrice": 649000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_132",
        "sku": "JOLLY-LONGPYJAMASET-PURPLESHALLOT-M",
        "skuNo": 132,
        "skuCode": "JOLLY-LONGPYJAMASET-PURPLESHALLOT-M",
        "skuName": "AISCHMIRA Jolly Long Pyjama Set Purple Shallot M",
        "color": "Purple Shallot",
        "size": "M",
        "price": 979000,
        "compareAtPrice": 989000,
        "offlineBazaarPrice": 649000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_133",
        "sku": "JOLLY-LONGPYJAMASET-PURPLESHALLOT-L",
        "skuNo": 133,
        "skuCode": "JOLLY-LONGPYJAMASET-PURPLESHALLOT-L",
        "skuName": "AISCHMIRA Jolly Long Pyjama Set Purple Shallot L",
        "color": "Purple Shallot",
        "size": "L",
        "price": 979000,
        "compareAtPrice": 989000,
        "offlineBazaarPrice": 649000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_134",
        "sku": "JOLLY-LONGPYJAMASET-PURPLESHALLOT-XL",
        "skuNo": 134,
        "skuCode": "JOLLY-LONGPYJAMASET-PURPLESHALLOT-XL",
        "skuName": "AISCHMIRA Jolly Long Pyjama Set Purple Shallot XL",
        "color": "Purple Shallot",
        "size": "XL",
        "price": 979000,
        "compareAtPrice": 989000,
        "offlineBazaarPrice": 649000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": true,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_14",
    "sku": "JOLLY-SHORTPYJAMASET-REDCHILI",
    "name": "Jolly Short Sleeve Top + Shorts",
    "slug": "jolly-short-sleeve-top-shorts",
    "categoryId": "Pyjamas",
    "category": "Pyjamas",
    "collectionId": "col_jolly",
    "collection": "Jolly",
    "type": "Short Sleeve Top + Shorts",
    "fabric": "Satin",
    "price": 899000,
    "basePrice": 899000,
    "compareAtPrice": 909000,
    "offlineBazaarPrice": 599000,
    "currency": "IDR",
    "description": "The Jolly Short Sleeve Top + Shorts from the AISCHMIRA Jolly collection. Tailored in Satin with architectural precision and timeless editorial elegance.",
    "story": "Part of the Jolly collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Red Chili",
      "Pink Garlic",
      "Purple Shallot"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "variants": [
      {
        "id": "v_135",
        "sku": "JOLLY-SHORTPYJAMASET-REDCHILI-S",
        "skuNo": 135,
        "skuCode": "JOLLY-SHORTPYJAMASET-REDCHILI-S",
        "skuName": "AISCHMIRA Jolly Short Pyjama Set Red Chili S",
        "color": "Red Chili",
        "size": "S",
        "price": 899000,
        "compareAtPrice": 909000,
        "offlineBazaarPrice": 599000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_136",
        "sku": "JOLLY-SHORTPYJAMASET-REDCHILI-M",
        "skuNo": 136,
        "skuCode": "JOLLY-SHORTPYJAMASET-REDCHILI-M",
        "skuName": "AISCHMIRA Jolly Short Pyjama Set Red Chili M",
        "color": "Red Chili",
        "size": "M",
        "price": 899000,
        "compareAtPrice": 909000,
        "offlineBazaarPrice": 599000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_137",
        "sku": "JOLLY-SHORTPYJAMASET-REDCHILI-L",
        "skuNo": 137,
        "skuCode": "JOLLY-SHORTPYJAMASET-REDCHILI-L",
        "skuName": "AISCHMIRA Jolly Short Pyjama Set Red Chili L",
        "color": "Red Chili",
        "size": "L",
        "price": 899000,
        "compareAtPrice": 909000,
        "offlineBazaarPrice": 599000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_138",
        "sku": "JOLLY-SHORTPYJAMASET-REDCHILI-XL",
        "skuNo": 138,
        "skuCode": "JOLLY-SHORTPYJAMASET-REDCHILI-XL",
        "skuName": "AISCHMIRA Jolly Short Pyjama Set Red Chili XL",
        "color": "Red Chili",
        "size": "XL",
        "price": 899000,
        "compareAtPrice": 909000,
        "offlineBazaarPrice": 599000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_139",
        "sku": "JOLLY-SHORTPYJAMASET-PINKGARLIC-S",
        "skuNo": 139,
        "skuCode": "JOLLY-SHORTPYJAMASET-PINKGARLIC-S",
        "skuName": "AISCHMIRA Jolly Short Pyjama Set Pink Garlic S",
        "color": "Pink Garlic",
        "size": "S",
        "price": 899000,
        "compareAtPrice": 909000,
        "offlineBazaarPrice": 599000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_140",
        "sku": "JOLLY-SHORTPYJAMASET-PINKGARLIC-M",
        "skuNo": 140,
        "skuCode": "JOLLY-SHORTPYJAMASET-PINKGARLIC-M",
        "skuName": "AISCHMIRA Jolly Short Pyjama Set Pink Garlic M",
        "color": "Pink Garlic",
        "size": "M",
        "price": 899000,
        "compareAtPrice": 909000,
        "offlineBazaarPrice": 599000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_141",
        "sku": "JOLLY-SHORTPYJAMASET-PINKGARLIC-L",
        "skuNo": 141,
        "skuCode": "JOLLY-SHORTPYJAMASET-PINKGARLIC-L",
        "skuName": "AISCHMIRA Jolly Short Pyjama Set Pink Garlic L",
        "color": "Pink Garlic",
        "size": "L",
        "price": 899000,
        "compareAtPrice": 909000,
        "offlineBazaarPrice": 599000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_142",
        "sku": "JOLLY-SHORTPYJAMASET-PINKGARLIC-XL",
        "skuNo": 142,
        "skuCode": "JOLLY-SHORTPYJAMASET-PINKGARLIC-XL",
        "skuName": "AISCHMIRA Jolly Short Pyjama Set Pink Garlic XL",
        "color": "Pink Garlic",
        "size": "XL",
        "price": 899000,
        "compareAtPrice": 909000,
        "offlineBazaarPrice": 599000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_143",
        "sku": "JOLLY-SHORTPYJAMASET-PURPLESHALLOT-S",
        "skuNo": 143,
        "skuCode": "JOLLY-SHORTPYJAMASET-PURPLESHALLOT-S",
        "skuName": "AISCHMIRA Jolly Short Pyjama Set Purple Shallot S",
        "color": "Purple Shallot",
        "size": "S",
        "price": 899000,
        "compareAtPrice": 909000,
        "offlineBazaarPrice": 599000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_144",
        "sku": "JOLLY-SHORTPYJAMASET-PURPLESHALLOT-M",
        "skuNo": 144,
        "skuCode": "JOLLY-SHORTPYJAMASET-PURPLESHALLOT-M",
        "skuName": "AISCHMIRA Jolly Short Pyjama Set Purple Shallot M",
        "color": "Purple Shallot",
        "size": "M",
        "price": 899000,
        "compareAtPrice": 909000,
        "offlineBazaarPrice": 599000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_145",
        "sku": "JOLLY-SHORTPYJAMASET-PURPLESHALLOT-L",
        "skuNo": 145,
        "skuCode": "JOLLY-SHORTPYJAMASET-PURPLESHALLOT-L",
        "skuName": "AISCHMIRA Jolly Short Pyjama Set Purple Shallot L",
        "color": "Purple Shallot",
        "size": "L",
        "price": 899000,
        "compareAtPrice": 909000,
        "offlineBazaarPrice": 599000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_146",
        "sku": "JOLLY-SHORTPYJAMASET-PURPLESHALLOT-XL",
        "skuNo": 146,
        "skuCode": "JOLLY-SHORTPYJAMASET-PURPLESHALLOT-XL",
        "skuName": "AISCHMIRA Jolly Short Pyjama Set Purple Shallot XL",
        "color": "Purple Shallot",
        "size": "XL",
        "price": 899000,
        "compareAtPrice": 909000,
        "offlineBazaarPrice": 599000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": true,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_15",
    "sku": "AVELINE-SHIRT-WHITEGARLIC",
    "name": "Aveline Shirt",
    "slug": "aveline-shirt",
    "categoryId": "Tops",
    "category": "Tops",
    "collectionId": "col_aveline",
    "collection": "Aveline",
    "type": "Shirt",
    "fabric": "Premium Fabric",
    "price": 599000,
    "basePrice": 599000,
    "compareAtPrice": 609000,
    "offlineBazaarPrice": 399000,
    "currency": "IDR",
    "description": "The Aveline Shirt from the AISCHMIRA Aveline collection. Tailored in Premium Fabric with architectural precision and timeless editorial elegance.",
    "story": "Part of the Aveline collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "White Garlic",
      "Green Cardamom",
      "Brown Ginger",
      "Lilac Onion",
      "Black Pepper"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "variants": [
      {
        "id": "v_147",
        "sku": "AVELINE-SHIRT-WHITEGARLIC-S",
        "skuNo": 147,
        "skuCode": "AVELINE-SHIRT-WHITEGARLIC-S",
        "skuName": "AISCHMIRA Aveline Shirt White Garlic S",
        "color": "White Garlic",
        "size": "S",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_148",
        "sku": "AVELINE-SHIRT-WHITEGARLIC-M",
        "skuNo": 148,
        "skuCode": "AVELINE-SHIRT-WHITEGARLIC-M",
        "skuName": "AISCHMIRA Aveline Shirt White Garlic M",
        "color": "White Garlic",
        "size": "M",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_149",
        "sku": "AVELINE-SHIRT-WHITEGARLIC-L",
        "skuNo": 149,
        "skuCode": "AVELINE-SHIRT-WHITEGARLIC-L",
        "skuName": "AISCHMIRA Aveline Shirt White Garlic L",
        "color": "White Garlic",
        "size": "L",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_150",
        "sku": "AVELINE-SHIRT-WHITEGARLIC-XL",
        "skuNo": 150,
        "skuCode": "AVELINE-SHIRT-WHITEGARLIC-XL",
        "skuName": "AISCHMIRA Aveline Shirt White Garlic XL",
        "color": "White Garlic",
        "size": "XL",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_151",
        "sku": "AVELINE-SHIRT-GREENCARDAMOM-S",
        "skuNo": 151,
        "skuCode": "AVELINE-SHIRT-GREENCARDAMOM-S",
        "skuName": "AISCHMIRA Aveline Shirt Green Cardamom S",
        "color": "Green Cardamom",
        "size": "S",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_152",
        "sku": "AVELINE-SHIRT-GREENCARDAMOM-M",
        "skuNo": 152,
        "skuCode": "AVELINE-SHIRT-GREENCARDAMOM-M",
        "skuName": "AISCHMIRA Aveline Shirt Green Cardamom M",
        "color": "Green Cardamom",
        "size": "M",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_153",
        "sku": "AVELINE-SHIRT-GREENCARDAMOM-L",
        "skuNo": 153,
        "skuCode": "AVELINE-SHIRT-GREENCARDAMOM-L",
        "skuName": "AISCHMIRA Aveline Shirt Green Cardamom L",
        "color": "Green Cardamom",
        "size": "L",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_154",
        "sku": "AVELINE-SHIRT-GREENCARDAMOM-XL",
        "skuNo": 154,
        "skuCode": "AVELINE-SHIRT-GREENCARDAMOM-XL",
        "skuName": "AISCHMIRA Aveline Shirt Green Cardamom XL",
        "color": "Green Cardamom",
        "size": "XL",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_155",
        "sku": "AVELINE-SHIRT-BROWNGINGER-S",
        "skuNo": 155,
        "skuCode": "AVELINE-SHIRT-BROWNGINGER-S",
        "skuName": "AISCHMIRA Aveline Shirt Brown Ginger S",
        "color": "Brown Ginger",
        "size": "S",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_156",
        "sku": "AVELINE-SHIRT-BROWNGINGER-M",
        "skuNo": 156,
        "skuCode": "AVELINE-SHIRT-BROWNGINGER-M",
        "skuName": "AISCHMIRA Aveline Shirt Brown Ginger M",
        "color": "Brown Ginger",
        "size": "M",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_157",
        "sku": "AVELINE-SHIRT-BROWNGINGER-L",
        "skuNo": 157,
        "skuCode": "AVELINE-SHIRT-BROWNGINGER-L",
        "skuName": "AISCHMIRA Aveline Shirt Brown Ginger L",
        "color": "Brown Ginger",
        "size": "L",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_158",
        "sku": "AVELINE-SHIRT-BROWNGINGER-XL",
        "skuNo": 158,
        "skuCode": "AVELINE-SHIRT-BROWNGINGER-XL",
        "skuName": "AISCHMIRA Aveline Shirt Brown Ginger XL",
        "color": "Brown Ginger",
        "size": "XL",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_159",
        "sku": "AVELINE-SHIRT-LILACONION-S",
        "skuNo": 159,
        "skuCode": "AVELINE-SHIRT-LILACONION-S",
        "skuName": "AISCHMIRA Aveline Shirt Lilac Onion S",
        "color": "Lilac Onion",
        "size": "S",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_160",
        "sku": "AVELINE-SHIRT-LILACONION-M",
        "skuNo": 160,
        "skuCode": "AVELINE-SHIRT-LILACONION-M",
        "skuName": "AISCHMIRA Aveline Shirt Lilac Onion M",
        "color": "Lilac Onion",
        "size": "M",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_161",
        "sku": "AVELINE-SHIRT-LILACONION-L",
        "skuNo": 161,
        "skuCode": "AVELINE-SHIRT-LILACONION-L",
        "skuName": "AISCHMIRA Aveline Shirt Lilac Onion L",
        "color": "Lilac Onion",
        "size": "L",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_162",
        "sku": "AVELINE-SHIRT-LILACONION-XL",
        "skuNo": 162,
        "skuCode": "AVELINE-SHIRT-LILACONION-XL",
        "skuName": "AISCHMIRA Aveline Shirt Lilac Onion XL",
        "color": "Lilac Onion",
        "size": "XL",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_163",
        "sku": "AVELINE-SHIRT-BLACKPEPPER-S",
        "skuNo": 163,
        "skuCode": "AVELINE-SHIRT-BLACKPEPPER-S",
        "skuName": "AISCHMIRA Aveline Shirt Black Pepper S",
        "color": "Black Pepper",
        "size": "S",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_164",
        "sku": "AVELINE-SHIRT-BLACKPEPPER-M",
        "skuNo": 164,
        "skuCode": "AVELINE-SHIRT-BLACKPEPPER-M",
        "skuName": "AISCHMIRA Aveline Shirt Black Pepper M",
        "color": "Black Pepper",
        "size": "M",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_165",
        "sku": "AVELINE-SHIRT-BLACKPEPPER-L",
        "skuNo": 165,
        "skuCode": "AVELINE-SHIRT-BLACKPEPPER-L",
        "skuName": "AISCHMIRA Aveline Shirt Black Pepper L",
        "color": "Black Pepper",
        "size": "L",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_166",
        "sku": "AVELINE-SHIRT-BLACKPEPPER-XL",
        "skuNo": 166,
        "skuCode": "AVELINE-SHIRT-BLACKPEPPER-XL",
        "skuName": "AISCHMIRA Aveline Shirt Black Pepper XL",
        "color": "Black Pepper",
        "size": "XL",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": false,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_16",
    "sku": "LUNA-PANTS-PINKGARLIC",
    "name": "Luna Pants",
    "slug": "luna-pants",
    "categoryId": "Bottoms",
    "category": "Bottoms",
    "collectionId": "col_luna",
    "collection": "Luna",
    "type": "Pants",
    "fabric": "Premium Fabric",
    "price": 749000,
    "basePrice": 749000,
    "compareAtPrice": 759000,
    "offlineBazaarPrice": 499000,
    "currency": "IDR",
    "description": "The Luna Pants from the AISCHMIRA Luna collection. Tailored in Premium Fabric with architectural precision and timeless editorial elegance.",
    "story": "Part of the Luna collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Pink Garlic",
      "Brown Nutmeg",
      "Black Pepper"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "variants": [
      {
        "id": "v_167",
        "sku": "LUNA-PANTS-PINKGARLIC-S",
        "skuNo": 167,
        "skuCode": "LUNA-PANTS-PINKGARLIC-S",
        "skuName": "AISCHMIRA Luna Pants Pink Garlic S",
        "color": "Pink Garlic",
        "size": "S",
        "price": 749000,
        "compareAtPrice": 759000,
        "offlineBazaarPrice": 499000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_168",
        "sku": "LUNA-PANTS-PINKGARLIC-M",
        "skuNo": 168,
        "skuCode": "LUNA-PANTS-PINKGARLIC-M",
        "skuName": "AISCHMIRA Luna Pants Pink Garlic M",
        "color": "Pink Garlic",
        "size": "M",
        "price": 749000,
        "compareAtPrice": 759000,
        "offlineBazaarPrice": 499000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_169",
        "sku": "LUNA-PANTS-PINKGARLIC-L",
        "skuNo": 169,
        "skuCode": "LUNA-PANTS-PINKGARLIC-L",
        "skuName": "AISCHMIRA Luna Pants Pink Garlic L",
        "color": "Pink Garlic",
        "size": "L",
        "price": 749000,
        "compareAtPrice": 759000,
        "offlineBazaarPrice": 499000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_170",
        "sku": "LUNA-PANTS-PINKGARLIC-XL",
        "skuNo": 170,
        "skuCode": "LUNA-PANTS-PINKGARLIC-XL",
        "skuName": "AISCHMIRA Luna Pants Pink Garlic XL",
        "color": "Pink Garlic",
        "size": "XL",
        "price": 749000,
        "compareAtPrice": 759000,
        "offlineBazaarPrice": 499000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_171",
        "sku": "LUNA-PANTS-BROWNNUTMEG-S",
        "skuNo": 171,
        "skuCode": "LUNA-PANTS-BROWNNUTMEG-S",
        "skuName": "AISCHMIRA Luna Pants Brown Nutmeg S",
        "color": "Brown Nutmeg",
        "size": "S",
        "price": 749000,
        "compareAtPrice": 759000,
        "offlineBazaarPrice": 499000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_172",
        "sku": "LUNA-PANTS-BROWNNUTMEG-M",
        "skuNo": 172,
        "skuCode": "LUNA-PANTS-BROWNNUTMEG-M",
        "skuName": "AISCHMIRA Luna Pants Brown Nutmeg M",
        "color": "Brown Nutmeg",
        "size": "M",
        "price": 749000,
        "compareAtPrice": 759000,
        "offlineBazaarPrice": 499000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_173",
        "sku": "LUNA-PANTS-BROWNNUTMEG-L",
        "skuNo": 173,
        "skuCode": "LUNA-PANTS-BROWNNUTMEG-L",
        "skuName": "AISCHMIRA Luna Pants Brown Nutmeg L",
        "color": "Brown Nutmeg",
        "size": "L",
        "price": 749000,
        "compareAtPrice": 759000,
        "offlineBazaarPrice": 499000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_174",
        "sku": "LUNA-PANTS-BROWNNUTMEG-XL",
        "skuNo": 174,
        "skuCode": "LUNA-PANTS-BROWNNUTMEG-XL",
        "skuName": "AISCHMIRA Luna Pants Brown Nutmeg XL",
        "color": "Brown Nutmeg",
        "size": "XL",
        "price": 749000,
        "compareAtPrice": 759000,
        "offlineBazaarPrice": 499000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_175",
        "sku": "LUNA-PANTS-BLACKPEPPER-S",
        "skuNo": 175,
        "skuCode": "LUNA-PANTS-BLACKPEPPER-S",
        "skuName": "AISCHMIRA Luna Pants Black Pepper S",
        "color": "Black Pepper",
        "size": "S",
        "price": 749000,
        "compareAtPrice": 759000,
        "offlineBazaarPrice": 499000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_176",
        "sku": "LUNA-PANTS-BLACKPEPPER-M",
        "skuNo": 176,
        "skuCode": "LUNA-PANTS-BLACKPEPPER-M",
        "skuName": "AISCHMIRA Luna Pants Black Pepper M",
        "color": "Black Pepper",
        "size": "M",
        "price": 749000,
        "compareAtPrice": 759000,
        "offlineBazaarPrice": 499000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_177",
        "sku": "LUNA-PANTS-BLACKPEPPER-L",
        "skuNo": 177,
        "skuCode": "LUNA-PANTS-BLACKPEPPER-L",
        "skuName": "AISCHMIRA Luna Pants Black Pepper L",
        "color": "Black Pepper",
        "size": "L",
        "price": 749000,
        "compareAtPrice": 759000,
        "offlineBazaarPrice": 499000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_178",
        "sku": "LUNA-PANTS-BLACKPEPPER-XL",
        "skuNo": 178,
        "skuCode": "LUNA-PANTS-BLACKPEPPER-XL",
        "skuName": "AISCHMIRA Luna Pants Black Pepper XL",
        "color": "Black Pepper",
        "size": "XL",
        "price": 749000,
        "compareAtPrice": 759000,
        "offlineBazaarPrice": 499000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": false,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_17",
    "sku": "AMMONOGRAM-SCARF",
    "name": "Am Monogram Scarf",
    "slug": "am-monogram-scarf",
    "categoryId": "Accessories",
    "category": "Accessories",
    "collectionId": "col_am-monogram",
    "collection": "Am Monogram",
    "type": "Scarf",
    "fabric": "Premium Fabric",
    "price": 279000,
    "basePrice": 279000,
    "compareAtPrice": 289000,
    "offlineBazaarPrice": 179000,
    "currency": "IDR",
    "description": "The Am Monogram Scarf from the AISCHMIRA Am Monogram collection. Tailored in Premium Fabric with architectural precision and timeless editorial elegance.",
    "story": "Part of the Am Monogram collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Dirt",
      "Coal",
      "Snow",
      "Sand",
      "Petal"
    ],
    "availableSizes": [
      "-"
    ],
    "variants": [
      {
        "id": "v_179",
        "sku": "AMMONOGRAM-SCARF-DIRT",
        "skuNo": 179,
        "skuCode": "AMMONOGRAM-SCARF-DIRT",
        "skuName": "AISCHMIRA Am Monogram Scarf Dirt",
        "color": "Dirt",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_180",
        "sku": "AMMONOGRAM-SCARF-COAL",
        "skuNo": 180,
        "skuCode": "AMMONOGRAM-SCARF-COAL",
        "skuName": "AISCHMIRA Am Monogram Scarf Coal",
        "color": "Coal",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_181",
        "sku": "AMMONOGRAM-SCARF-SNOW",
        "skuNo": 181,
        "skuCode": "AMMONOGRAM-SCARF-SNOW",
        "skuName": "AISCHMIRA Am Monogram Scarf Snow",
        "color": "Snow",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_182",
        "sku": "AMMONOGRAM-SCARF-SAND",
        "skuNo": 182,
        "skuCode": "AMMONOGRAM-SCARF-SAND",
        "skuName": "AISCHMIRA Am Monogram Scarf Sand",
        "color": "Sand",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_183",
        "sku": "AMMONOGRAM-SCARF-PETAL",
        "skuNo": 183,
        "skuCode": "AMMONOGRAM-SCARF-PETAL",
        "skuName": "AISCHMIRA Am Monogram Scarf Petal",
        "color": "Petal",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": false,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_18",
    "sku": "FLORALMEADOW-SCARF",
    "name": "Floral Meadow Scarf",
    "slug": "floral-meadow-scarf",
    "categoryId": "Accessories",
    "category": "Accessories",
    "collectionId": "col_floral-meadow",
    "collection": "Floral Meadow",
    "type": "Scarf",
    "fabric": "Premium Fabric",
    "price": 279000,
    "basePrice": 279000,
    "compareAtPrice": 289000,
    "offlineBazaarPrice": 179000,
    "currency": "IDR",
    "description": "The Floral Meadow Scarf from the AISCHMIRA Floral Meadow collection. Tailored in Premium Fabric with architectural precision and timeless editorial elegance.",
    "story": "Part of the Floral Meadow collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Pink Blossom",
      "Red Rose",
      "Pistachio",
      "Almond",
      "Sunflower"
    ],
    "availableSizes": [
      "-"
    ],
    "variants": [
      {
        "id": "v_184",
        "sku": "FLORALMEADOW-SCARF-PINKBLOSSOM",
        "skuNo": 184,
        "skuCode": "FLORALMEADOW-SCARF-PINKBLOSSOM",
        "skuName": "AISCHMIRA Floral Meadow Scarf Pink Blossom",
        "color": "Pink Blossom",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_185",
        "sku": "FLORALMEADOW-SCARF-REDROSE",
        "skuNo": 185,
        "skuCode": "FLORALMEADOW-SCARF-REDROSE",
        "skuName": "AISCHMIRA Floral Meadow Scarf Red Rose",
        "color": "Red Rose",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_186",
        "sku": "FLORALMEADOW-SCARF-PISTACHIO",
        "skuNo": 186,
        "skuCode": "FLORALMEADOW-SCARF-PISTACHIO",
        "skuName": "AISCHMIRA Floral Meadow Scarf Pistachio",
        "color": "Pistachio",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_187",
        "sku": "FLORALMEADOW-SCARF-ALMOND",
        "skuNo": 187,
        "skuCode": "FLORALMEADOW-SCARF-ALMOND",
        "skuName": "AISCHMIRA Floral Meadow Scarf Almond",
        "color": "Almond",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_188",
        "sku": "FLORALMEADOW-SCARF-SUNFLOWER",
        "skuNo": 188,
        "skuCode": "FLORALMEADOW-SCARF-SUNFLOWER",
        "skuName": "AISCHMIRA Floral Meadow Scarf Sunflower",
        "color": "Sunflower",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": false,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_19",
    "sku": "CHILICHIC-SCARF",
    "name": "Chili Chic Scarf",
    "slug": "chili-chic-scarf",
    "categoryId": "Accessories",
    "category": "Accessories",
    "collectionId": "col_chili-chic",
    "collection": "Chili Chic",
    "type": "Scarf",
    "fabric": "Premium Fabric",
    "price": 279000,
    "basePrice": 279000,
    "compareAtPrice": 289000,
    "offlineBazaarPrice": 179000,
    "currency": "IDR",
    "description": "The Chili Chic Scarf from the AISCHMIRA Chili Chic collection. Tailored in Premium Fabric with architectural precision and timeless editorial elegance.",
    "story": "Part of the Chili Chic collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Candlenut",
      "Green Chili",
      "Nutmeg",
      "Lemon Grass"
    ],
    "availableSizes": [
      "-"
    ],
    "variants": [
      {
        "id": "v_189",
        "sku": "CHILICHIC-SCARF-CANDLENUT",
        "skuNo": 189,
        "skuCode": "CHILICHIC-SCARF-CANDLENUT",
        "skuName": "AISCHMIRA Chili Chic Scarf Candlenut",
        "color": "Candlenut",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_190",
        "sku": "CHILICHIC-SCARF-GREENCHILI",
        "skuNo": 190,
        "skuCode": "CHILICHIC-SCARF-GREENCHILI",
        "skuName": "AISCHMIRA Chili Chic Scarf Green Chili",
        "color": "Green Chili",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_191",
        "sku": "CHILICHIC-SCARF-NUTMEG",
        "skuNo": 191,
        "skuCode": "CHILICHIC-SCARF-NUTMEG",
        "skuName": "AISCHMIRA Chili Chic Scarf Nutmeg",
        "color": "Nutmeg",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_192",
        "sku": "CHILICHIC-SCARF-LEMONGRASS",
        "skuNo": 192,
        "skuCode": "CHILICHIC-SCARF-LEMONGRASS",
        "skuName": "AISCHMIRA Chili Chic Scarf Lemon Grass",
        "color": "Lemon Grass",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": false,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_20",
    "sku": "GARLICBLOOM-SCARF",
    "name": "Garlic Bloom Scarf",
    "slug": "garlic-bloom-scarf",
    "categoryId": "Accessories",
    "category": "Accessories",
    "collectionId": "col_garlic-bloom",
    "collection": "Garlic Bloom",
    "type": "Scarf",
    "fabric": "Premium Fabric",
    "price": 279000,
    "basePrice": 279000,
    "compareAtPrice": 289000,
    "offlineBazaarPrice": 179000,
    "currency": "IDR",
    "description": "The Garlic Bloom Scarf from the AISCHMIRA Garlic Bloom collection. Tailored in Premium Fabric with architectural precision and timeless editorial elegance.",
    "story": "Part of the Garlic Bloom collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Mint",
      "Teal",
      "Baby Pink",
      "Purple",
      "White"
    ],
    "availableSizes": [
      "-"
    ],
    "variants": [
      {
        "id": "v_193",
        "sku": "GARLICBLOOM-SCARF-MINT",
        "skuNo": 193,
        "skuCode": "GARLICBLOOM-SCARF-MINT",
        "skuName": "AISCHMIRA Garlic Bloom Scarf Mint",
        "color": "Mint",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_194",
        "sku": "GARLICBLOOM-SCARF-TEAL",
        "skuNo": 194,
        "skuCode": "GARLICBLOOM-SCARF-TEAL",
        "skuName": "AISCHMIRA Garlic Bloom Scarf Teal",
        "color": "Teal",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_195",
        "sku": "GARLICBLOOM-SCARF-BABYPINK",
        "skuNo": 195,
        "skuCode": "GARLICBLOOM-SCARF-BABYPINK",
        "skuName": "AISCHMIRA Garlic Bloom Scarf Baby Pink",
        "color": "Baby Pink",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_196",
        "sku": "GARLICBLOOM-SCARF-PURPLE",
        "skuNo": 196,
        "skuCode": "GARLICBLOOM-SCARF-PURPLE",
        "skuName": "AISCHMIRA Garlic Bloom Scarf Purple",
        "color": "Purple",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_197",
        "sku": "GARLICBLOOM-SCARF-WHITE",
        "skuNo": 197,
        "skuCode": "GARLICBLOOM-SCARF-WHITE",
        "skuName": "AISCHMIRA Garlic Bloom Scarf White",
        "color": "White",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": false,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_21",
    "sku": "SPICEBLOSSOM-SCARF",
    "name": "Spice Blossom Scarf",
    "slug": "spice-blossom-scarf",
    "categoryId": "Accessories",
    "category": "Accessories",
    "collectionId": "col_spice-blossom",
    "collection": "Spice Blossom",
    "type": "Scarf",
    "fabric": "Premium Fabric",
    "price": 279000,
    "basePrice": 279000,
    "compareAtPrice": 289000,
    "offlineBazaarPrice": 179000,
    "currency": "IDR",
    "description": "The Spice Blossom Scarf from the AISCHMIRA Spice Blossom collection. Tailored in Premium Fabric with architectural precision and timeless editorial elegance.",
    "story": "Part of the Spice Blossom collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Red Chili",
      "Cardamom",
      "Bay Leaf",
      "Ginger"
    ],
    "availableSizes": [
      "-"
    ],
    "variants": [
      {
        "id": "v_198",
        "sku": "SPICEBLOSSOM-SCARF-REDCHILI",
        "skuNo": 198,
        "skuCode": "SPICEBLOSSOM-SCARF-REDCHILI",
        "skuName": "AISCHMIRA Spice Blossom Scarf Red Chili",
        "color": "Red Chili",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_199",
        "sku": "SPICEBLOSSOM-SCARF-CARDAMOM",
        "skuNo": 199,
        "skuCode": "SPICEBLOSSOM-SCARF-CARDAMOM",
        "skuName": "AISCHMIRA Spice Blossom Scarf Cardamom",
        "color": "Cardamom",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_200",
        "sku": "SPICEBLOSSOM-SCARF-BAYLEAF",
        "skuNo": 200,
        "skuCode": "SPICEBLOSSOM-SCARF-BAYLEAF",
        "skuName": "AISCHMIRA Spice Blossom Scarf Bay Leaf",
        "color": "Bay Leaf",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_201",
        "sku": "SPICEBLOSSOM-SCARF-GINGER",
        "skuNo": 201,
        "skuCode": "SPICEBLOSSOM-SCARF-GINGER",
        "skuName": "AISCHMIRA Spice Blossom Scarf Ginger",
        "color": "Ginger",
        "size": "-",
        "price": 279000,
        "compareAtPrice": 289000,
        "offlineBazaarPrice": 179000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": false,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_22",
    "sku": "FEMME-OUTER-BLACK",
    "name": "Femme Outer",
    "slug": "femme-outer",
    "categoryId": "Outerwear",
    "category": "Outerwear",
    "collectionId": "col_femme",
    "collection": "Femme",
    "type": "Outer",
    "fabric": "Semi Wool",
    "price": 589000,
    "basePrice": 589000,
    "compareAtPrice": 599000,
    "offlineBazaarPrice": 389000,
    "currency": "IDR",
    "description": "The Femme Outer from the AISCHMIRA Femme collection. Tailored in Semi Wool with architectural precision and timeless editorial elegance.",
    "story": "Part of the Femme collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Black",
      "Maroon",
      "Wood",
      "Baby Pink",
      "Oat"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "variants": [
      {
        "id": "v_202",
        "sku": "FEMME-OUTER-BLACK-S",
        "skuNo": 202,
        "skuCode": "FEMME-OUTER-BLACK-S",
        "skuName": "AISCHMIRA Femme Outer Black S",
        "color": "Black",
        "size": "S",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_203",
        "sku": "FEMME-OUTER-BLACK-M",
        "skuNo": 203,
        "skuCode": "FEMME-OUTER-BLACK-M",
        "skuName": "AISCHMIRA Femme Outer Black M",
        "color": "Black",
        "size": "M",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_204",
        "sku": "FEMME-OUTER-BLACK-L",
        "skuNo": 204,
        "skuCode": "FEMME-OUTER-BLACK-L",
        "skuName": "AISCHMIRA Femme Outer Black L",
        "color": "Black",
        "size": "L",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_205",
        "sku": "FEMME-OUTER-BLACK-XL",
        "skuNo": 205,
        "skuCode": "FEMME-OUTER-BLACK-XL",
        "skuName": "AISCHMIRA Femme Outer Black XL",
        "color": "Black",
        "size": "XL",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_206",
        "sku": "FEMME-OUTER-BLACK-XXL",
        "skuNo": 206,
        "skuCode": "FEMME-OUTER-BLACK-XXL",
        "skuName": "AISCHMIRA Femme Outer Black XXL",
        "color": "Black",
        "size": "XXL",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_207",
        "sku": "FEMME-OUTER-MAROON-S",
        "skuNo": 207,
        "skuCode": "FEMME-OUTER-MAROON-S",
        "skuName": "AISCHMIRA Femme Outer Maroon S",
        "color": "Maroon",
        "size": "S",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_208",
        "sku": "FEMME-OUTER-MAROON-M",
        "skuNo": 208,
        "skuCode": "FEMME-OUTER-MAROON-M",
        "skuName": "AISCHMIRA Femme Outer Maroon M",
        "color": "Maroon",
        "size": "M",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_209",
        "sku": "FEMME-OUTER-MAROON-L",
        "skuNo": 209,
        "skuCode": "FEMME-OUTER-MAROON-L",
        "skuName": "AISCHMIRA Femme Outer Maroon L",
        "color": "Maroon",
        "size": "L",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_210",
        "sku": "FEMME-OUTER-MAROON-XL",
        "skuNo": 210,
        "skuCode": "FEMME-OUTER-MAROON-XL",
        "skuName": "AISCHMIRA Femme Outer Maroon XL",
        "color": "Maroon",
        "size": "XL",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_211",
        "sku": "FEMME-OUTER-MAROON-XXL",
        "skuNo": 211,
        "skuCode": "FEMME-OUTER-MAROON-XXL",
        "skuName": "AISCHMIRA Femme Outer Maroon XXL",
        "color": "Maroon",
        "size": "XXL",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_212",
        "sku": "FEMME-OUTER-WOOD-S",
        "skuNo": 212,
        "skuCode": "FEMME-OUTER-WOOD-S",
        "skuName": "AISCHMIRA Femme Outer Wood S",
        "color": "Wood",
        "size": "S",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_213",
        "sku": "FEMME-OUTER-WOOD-M",
        "skuNo": 213,
        "skuCode": "FEMME-OUTER-WOOD-M",
        "skuName": "AISCHMIRA Femme Outer Wood M",
        "color": "Wood",
        "size": "M",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_214",
        "sku": "FEMME-OUTER-WOOD-L",
        "skuNo": 214,
        "skuCode": "FEMME-OUTER-WOOD-L",
        "skuName": "AISCHMIRA Femme Outer Wood L",
        "color": "Wood",
        "size": "L",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_215",
        "sku": "FEMME-OUTER-WOOD-XL",
        "skuNo": 215,
        "skuCode": "FEMME-OUTER-WOOD-XL",
        "skuName": "AISCHMIRA Femme Outer Wood XL",
        "color": "Wood",
        "size": "XL",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_216",
        "sku": "FEMME-OUTER-WOOD-XXL",
        "skuNo": 216,
        "skuCode": "FEMME-OUTER-WOOD-XXL",
        "skuName": "AISCHMIRA Femme Outer Wood XXL",
        "color": "Wood",
        "size": "XXL",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_217",
        "sku": "FEMME-OUTER-BABYPINK-S",
        "skuNo": 217,
        "skuCode": "FEMME-OUTER-BABYPINK-S",
        "skuName": "AISCHMIRA Femme Outer Baby Pink S",
        "color": "Baby Pink",
        "size": "S",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_218",
        "sku": "FEMME-OUTER-BABYPINK-M",
        "skuNo": 218,
        "skuCode": "FEMME-OUTER-BABYPINK-M",
        "skuName": "AISCHMIRA Femme Outer Baby Pink M",
        "color": "Baby Pink",
        "size": "M",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_219",
        "sku": "FEMME-OUTER-BABYPINK-L",
        "skuNo": 219,
        "skuCode": "FEMME-OUTER-BABYPINK-L",
        "skuName": "AISCHMIRA Femme Outer Baby Pink L",
        "color": "Baby Pink",
        "size": "L",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_220",
        "sku": "FEMME-OUTER-BABYPINK-XL",
        "skuNo": 220,
        "skuCode": "FEMME-OUTER-BABYPINK-XL",
        "skuName": "AISCHMIRA Femme Outer Baby Pink XL",
        "color": "Baby Pink",
        "size": "XL",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_221",
        "sku": "FEMME-OUTER-BABYPINK-XXL",
        "skuNo": 221,
        "skuCode": "FEMME-OUTER-BABYPINK-XXL",
        "skuName": "AISCHMIRA Femme Outer Baby Pink XXL",
        "color": "Baby Pink",
        "size": "XXL",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_222",
        "sku": "FEMME-OUTER-OAT-S",
        "skuNo": 222,
        "skuCode": "FEMME-OUTER-OAT-S",
        "skuName": "AISCHMIRA Femme Outer Oat S",
        "color": "Oat",
        "size": "S",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_223",
        "sku": "FEMME-OUTER-OAT-M",
        "skuNo": 223,
        "skuCode": "FEMME-OUTER-OAT-M",
        "skuName": "AISCHMIRA Femme Outer Oat M",
        "color": "Oat",
        "size": "M",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_224",
        "sku": "FEMME-OUTER-OAT-L",
        "skuNo": 224,
        "skuCode": "FEMME-OUTER-OAT-L",
        "skuName": "AISCHMIRA Femme Outer Oat L",
        "color": "Oat",
        "size": "L",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_225",
        "sku": "FEMME-OUTER-OAT-XL",
        "skuNo": 225,
        "skuCode": "FEMME-OUTER-OAT-XL",
        "skuName": "AISCHMIRA Femme Outer Oat XL",
        "color": "Oat",
        "size": "XL",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_226",
        "sku": "FEMME-OUTER-OAT-XXL",
        "skuNo": 226,
        "skuCode": "FEMME-OUTER-OAT-XXL",
        "skuName": "AISCHMIRA Femme Outer Oat XXL",
        "color": "Oat",
        "size": "XXL",
        "price": 589000,
        "compareAtPrice": 599000,
        "offlineBazaarPrice": 389000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": true,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_23",
    "sku": "FEMME-TANKTOP-BLACK",
    "name": "Femme Tank Top",
    "slug": "femme-tank-top",
    "categoryId": "Tops",
    "category": "Tops",
    "collectionId": "col_femme",
    "collection": "Femme",
    "type": "Tank Top",
    "fabric": "Semi Wool",
    "price": 409000,
    "basePrice": 409000,
    "compareAtPrice": 419000,
    "offlineBazaarPrice": 269000,
    "currency": "IDR",
    "description": "The Femme Tank Top from the AISCHMIRA Femme collection. Tailored in Semi Wool with architectural precision and timeless editorial elegance.",
    "story": "Part of the Femme collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Black",
      "Maroon",
      "Wood",
      "Baby Pink",
      "Oat"
    ],
    "availableSizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "variants": [
      {
        "id": "v_227",
        "sku": "FEMME-TANKTOP-BLACK-XS",
        "skuNo": 227,
        "skuCode": "FEMME-TANKTOP-BLACK-XS",
        "skuName": "AISCHMIRA Femme Tank Top Black XS",
        "color": "Black",
        "size": "XS",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_228",
        "sku": "FEMME-TANKTOP-BLACK-S",
        "skuNo": 228,
        "skuCode": "FEMME-TANKTOP-BLACK-S",
        "skuName": "AISCHMIRA Femme Tank Top Black S",
        "color": "Black",
        "size": "S",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_229",
        "sku": "FEMME-TANKTOP-BLACK-M",
        "skuNo": 229,
        "skuCode": "FEMME-TANKTOP-BLACK-M",
        "skuName": "AISCHMIRA Femme Tank Top Black M",
        "color": "Black",
        "size": "M",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_230",
        "sku": "FEMME-TANKTOP-BLACK-L",
        "skuNo": 230,
        "skuCode": "FEMME-TANKTOP-BLACK-L",
        "skuName": "AISCHMIRA Femme Tank Top Black L",
        "color": "Black",
        "size": "L",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_231",
        "sku": "FEMME-TANKTOP-BLACK-XL",
        "skuNo": 231,
        "skuCode": "FEMME-TANKTOP-BLACK-XL",
        "skuName": "AISCHMIRA Femme Tank Top Black XL",
        "color": "Black",
        "size": "XL",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_232",
        "sku": "FEMME-TANKTOP-MAROON-XS",
        "skuNo": 232,
        "skuCode": "FEMME-TANKTOP-MAROON-XS",
        "skuName": "AISCHMIRA Femme Tank Top Maroon XS",
        "color": "Maroon",
        "size": "XS",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_233",
        "sku": "FEMME-TANKTOP-MAROON-S",
        "skuNo": 233,
        "skuCode": "FEMME-TANKTOP-MAROON-S",
        "skuName": "AISCHMIRA Femme Tank Top Maroon S",
        "color": "Maroon",
        "size": "S",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_234",
        "sku": "FEMME-TANKTOP-MAROON-M",
        "skuNo": 234,
        "skuCode": "FEMME-TANKTOP-MAROON-M",
        "skuName": "AISCHMIRA Femme Tank Top Maroon M",
        "color": "Maroon",
        "size": "M",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_235",
        "sku": "FEMME-TANKTOP-MAROON-L",
        "skuNo": 235,
        "skuCode": "FEMME-TANKTOP-MAROON-L",
        "skuName": "AISCHMIRA Femme Tank Top Maroon L",
        "color": "Maroon",
        "size": "L",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_236",
        "sku": "FEMME-TANKTOP-MAROON-XL",
        "skuNo": 236,
        "skuCode": "FEMME-TANKTOP-MAROON-XL",
        "skuName": "AISCHMIRA Femme Tank Top Maroon XL",
        "color": "Maroon",
        "size": "XL",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_237",
        "sku": "FEMME-TANKTOP-WOOD-XS",
        "skuNo": 237,
        "skuCode": "FEMME-TANKTOP-WOOD-XS",
        "skuName": "AISCHMIRA Femme Tank Top Wood XS",
        "color": "Wood",
        "size": "XS",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_238",
        "sku": "FEMME-TANKTOP-WOOD-S",
        "skuNo": 238,
        "skuCode": "FEMME-TANKTOP-WOOD-S",
        "skuName": "AISCHMIRA Femme Tank Top Wood S",
        "color": "Wood",
        "size": "S",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_239",
        "sku": "FEMME-TANKTOP-WOOD-M",
        "skuNo": 239,
        "skuCode": "FEMME-TANKTOP-WOOD-M",
        "skuName": "AISCHMIRA Femme Tank Top Wood M",
        "color": "Wood",
        "size": "M",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_240",
        "sku": "FEMME-TANKTOP-WOOD-L",
        "skuNo": 240,
        "skuCode": "FEMME-TANKTOP-WOOD-L",
        "skuName": "AISCHMIRA Femme Tank Top Wood L",
        "color": "Wood",
        "size": "L",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_241",
        "sku": "FEMME-TANKTOP-WOOD-XL",
        "skuNo": 241,
        "skuCode": "FEMME-TANKTOP-WOOD-XL",
        "skuName": "AISCHMIRA Femme Tank Top Wood XL",
        "color": "Wood",
        "size": "XL",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_242",
        "sku": "FEMME-TANKTOP-BABYPINK-XS",
        "skuNo": 242,
        "skuCode": "FEMME-TANKTOP-BABYPINK-XS",
        "skuName": "AISCHMIRA Femme Tank Top Baby Pink XS",
        "color": "Baby Pink",
        "size": "XS",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_243",
        "sku": "FEMME-TANKTOP-BABYPINK-S",
        "skuNo": 243,
        "skuCode": "FEMME-TANKTOP-BABYPINK-S",
        "skuName": "AISCHMIRA Femme Tank Top Baby Pink S",
        "color": "Baby Pink",
        "size": "S",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_244",
        "sku": "FEMME-TANKTOP-BABYPINK-M",
        "skuNo": 244,
        "skuCode": "FEMME-TANKTOP-BABYPINK-M",
        "skuName": "AISCHMIRA Femme Tank Top Baby Pink M",
        "color": "Baby Pink",
        "size": "M",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_245",
        "sku": "FEMME-TANKTOP-BABYPINK-L",
        "skuNo": 245,
        "skuCode": "FEMME-TANKTOP-BABYPINK-L",
        "skuName": "AISCHMIRA Femme Tank Top Baby Pink L",
        "color": "Baby Pink",
        "size": "L",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_246",
        "sku": "FEMME-TANKTOP-BABYPINK-XL",
        "skuNo": 246,
        "skuCode": "FEMME-TANKTOP-BABYPINK-XL",
        "skuName": "AISCHMIRA Femme Tank Top Baby Pink XL",
        "color": "Baby Pink",
        "size": "XL",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_247",
        "sku": "FEMME-TANKTOP-OAT-XS",
        "skuNo": 247,
        "skuCode": "FEMME-TANKTOP-OAT-XS",
        "skuName": "AISCHMIRA Femme Tank Top Oat XS",
        "color": "Oat",
        "size": "XS",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_248",
        "sku": "FEMME-TANKTOP-OAT-S",
        "skuNo": 248,
        "skuCode": "FEMME-TANKTOP-OAT-S",
        "skuName": "AISCHMIRA Femme Tank Top Oat S",
        "color": "Oat",
        "size": "S",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_249",
        "sku": "FEMME-TANKTOP-OAT-M",
        "skuNo": 249,
        "skuCode": "FEMME-TANKTOP-OAT-M",
        "skuName": "AISCHMIRA Femme Tank Top Oat M",
        "color": "Oat",
        "size": "M",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_250",
        "sku": "FEMME-TANKTOP-OAT-L",
        "skuNo": 250,
        "skuCode": "FEMME-TANKTOP-OAT-L",
        "skuName": "AISCHMIRA Femme Tank Top Oat L",
        "color": "Oat",
        "size": "L",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_251",
        "sku": "FEMME-TANKTOP-OAT-XL",
        "skuNo": 251,
        "skuCode": "FEMME-TANKTOP-OAT-XL",
        "skuName": "AISCHMIRA Femme Tank Top Oat XL",
        "color": "Oat",
        "size": "XL",
        "price": 409000,
        "compareAtPrice": 419000,
        "offlineBazaarPrice": 269000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": true,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_24",
    "sku": "FEMME-SKIRT-BLACK",
    "name": "Femme Skirt",
    "slug": "femme-skirt",
    "categoryId": "Bottoms",
    "category": "Bottoms",
    "collectionId": "col_femme",
    "collection": "Femme",
    "type": "Skirt",
    "fabric": "Semi Wool",
    "price": 1099000,
    "basePrice": 1099000,
    "compareAtPrice": 1119000,
    "offlineBazaarPrice": 729000,
    "currency": "IDR",
    "description": "The Femme Skirt from the AISCHMIRA Femme collection. Tailored in Semi Wool with architectural precision and timeless editorial elegance.",
    "story": "Part of the Femme collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Black",
      "Maroon",
      "Wood",
      "Baby Pink",
      "Oat"
    ],
    "availableSizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "variants": [
      {
        "id": "v_252",
        "sku": "FEMME-SKIRT-BLACK-XS",
        "skuNo": 252,
        "skuCode": "FEMME-SKIRT-BLACK-XS",
        "skuName": "AISCHMIRA Femme Skirt Black XS",
        "color": "Black",
        "size": "XS",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_253",
        "sku": "FEMME-SKIRT-BLACK-S",
        "skuNo": 253,
        "skuCode": "FEMME-SKIRT-BLACK-S",
        "skuName": "AISCHMIRA Femme Skirt Black S",
        "color": "Black",
        "size": "S",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_254",
        "sku": "FEMME-SKIRT-BLACK-M",
        "skuNo": 254,
        "skuCode": "FEMME-SKIRT-BLACK-M",
        "skuName": "AISCHMIRA Femme Skirt Black M",
        "color": "Black",
        "size": "M",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_255",
        "sku": "FEMME-SKIRT-BLACK-L",
        "skuNo": 255,
        "skuCode": "FEMME-SKIRT-BLACK-L",
        "skuName": "AISCHMIRA Femme Skirt Black L",
        "color": "Black",
        "size": "L",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_256",
        "sku": "FEMME-SKIRT-BLACK-XL",
        "skuNo": 256,
        "skuCode": "FEMME-SKIRT-BLACK-XL",
        "skuName": "AISCHMIRA Femme Skirt Black XL",
        "color": "Black",
        "size": "XL",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_257",
        "sku": "FEMME-SKIRT-BLACK-XXL",
        "skuNo": 257,
        "skuCode": "FEMME-SKIRT-BLACK-XXL",
        "skuName": "AISCHMIRA Femme Skirt Black XXL",
        "color": "Black",
        "size": "XXL",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_258",
        "sku": "FEMME-SKIRT-MAROON-XS",
        "skuNo": 258,
        "skuCode": "FEMME-SKIRT-MAROON-XS",
        "skuName": "AISCHMIRA Femme Skirt Maroon XS",
        "color": "Maroon",
        "size": "XS",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_259",
        "sku": "FEMME-SKIRT-MAROON-S",
        "skuNo": 259,
        "skuCode": "FEMME-SKIRT-MAROON-S",
        "skuName": "AISCHMIRA Femme Skirt Maroon S",
        "color": "Maroon",
        "size": "S",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_260",
        "sku": "FEMME-SKIRT-MAROON-M",
        "skuNo": 260,
        "skuCode": "FEMME-SKIRT-MAROON-M",
        "skuName": "AISCHMIRA Femme Skirt Maroon M",
        "color": "Maroon",
        "size": "M",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_261",
        "sku": "FEMME-SKIRT-MAROON-L",
        "skuNo": 261,
        "skuCode": "FEMME-SKIRT-MAROON-L",
        "skuName": "AISCHMIRA Femme Skirt Maroon L",
        "color": "Maroon",
        "size": "L",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_262",
        "sku": "FEMME-SKIRT-MAROON-XL",
        "skuNo": 262,
        "skuCode": "FEMME-SKIRT-MAROON-XL",
        "skuName": "AISCHMIRA Femme Skirt Maroon XL",
        "color": "Maroon",
        "size": "XL",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_263",
        "sku": "FEMME-SKIRT-MAROON-XXL",
        "skuNo": 263,
        "skuCode": "FEMME-SKIRT-MAROON-XXL",
        "skuName": "AISCHMIRA Femme Skirt Maroon XXL",
        "color": "Maroon",
        "size": "XXL",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_264",
        "sku": "FEMME-SKIRT-WOOD-XS",
        "skuNo": 264,
        "skuCode": "FEMME-SKIRT-WOOD-XS",
        "skuName": "AISCHMIRA Femme Skirt Wood XS",
        "color": "Wood",
        "size": "XS",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_265",
        "sku": "FEMME-SKIRT-WOOD-S",
        "skuNo": 265,
        "skuCode": "FEMME-SKIRT-WOOD-S",
        "skuName": "AISCHMIRA Femme Skirt Wood S",
        "color": "Wood",
        "size": "S",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_266",
        "sku": "FEMME-SKIRT-WOOD-M",
        "skuNo": 266,
        "skuCode": "FEMME-SKIRT-WOOD-M",
        "skuName": "AISCHMIRA Femme Skirt Wood M",
        "color": "Wood",
        "size": "M",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_267",
        "sku": "FEMME-SKIRT-WOOD-L",
        "skuNo": 267,
        "skuCode": "FEMME-SKIRT-WOOD-L",
        "skuName": "AISCHMIRA Femme Skirt Wood L",
        "color": "Wood",
        "size": "L",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_268",
        "sku": "FEMME-SKIRT-WOOD-XL",
        "skuNo": 268,
        "skuCode": "FEMME-SKIRT-WOOD-XL",
        "skuName": "AISCHMIRA Femme Skirt Wood XL",
        "color": "Wood",
        "size": "XL",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_269",
        "sku": "FEMME-SKIRT-WOOD-XXL",
        "skuNo": 269,
        "skuCode": "FEMME-SKIRT-WOOD-XXL",
        "skuName": "AISCHMIRA Femme Skirt Wood XXL",
        "color": "Wood",
        "size": "XXL",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_270",
        "sku": "FEMME-SKIRT-BABYPINK-XS",
        "skuNo": 270,
        "skuCode": "FEMME-SKIRT-BABYPINK-XS",
        "skuName": "AISCHMIRA Femme Skirt Baby Pink XS",
        "color": "Baby Pink",
        "size": "XS",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_271",
        "sku": "FEMME-SKIRT-BABYPINK-S",
        "skuNo": 271,
        "skuCode": "FEMME-SKIRT-BABYPINK-S",
        "skuName": "AISCHMIRA Femme Skirt Baby Pink S",
        "color": "Baby Pink",
        "size": "S",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_272",
        "sku": "FEMME-SKIRT-BABYPINK-M",
        "skuNo": 272,
        "skuCode": "FEMME-SKIRT-BABYPINK-M",
        "skuName": "AISCHMIRA Femme Skirt Baby Pink M",
        "color": "Baby Pink",
        "size": "M",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_273",
        "sku": "FEMME-SKIRT-BABYPINK-L",
        "skuNo": 273,
        "skuCode": "FEMME-SKIRT-BABYPINK-L",
        "skuName": "AISCHMIRA Femme Skirt Baby Pink L",
        "color": "Baby Pink",
        "size": "L",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_274",
        "sku": "FEMME-SKIRT-BABYPINK-XL",
        "skuNo": 274,
        "skuCode": "FEMME-SKIRT-BABYPINK-XL",
        "skuName": "AISCHMIRA Femme Skirt Baby Pink XL",
        "color": "Baby Pink",
        "size": "XL",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_275",
        "sku": "FEMME-SKIRT-BABYPINK-XXL",
        "skuNo": 275,
        "skuCode": "FEMME-SKIRT-BABYPINK-XXL",
        "skuName": "AISCHMIRA Femme Skirt Baby Pink XXL",
        "color": "Baby Pink",
        "size": "XXL",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_276",
        "sku": "FEMME-SKIRT-OAT-XS",
        "skuNo": 276,
        "skuCode": "FEMME-SKIRT-OAT-XS",
        "skuName": "AISCHMIRA Femme Skirt Oat XS",
        "color": "Oat",
        "size": "XS",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_277",
        "sku": "FEMME-SKIRT-OAT-S",
        "skuNo": 277,
        "skuCode": "FEMME-SKIRT-OAT-S",
        "skuName": "AISCHMIRA Femme Skirt Oat S",
        "color": "Oat",
        "size": "S",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_278",
        "sku": "FEMME-SKIRT-OAT-M",
        "skuNo": 278,
        "skuCode": "FEMME-SKIRT-OAT-M",
        "skuName": "AISCHMIRA Femme Skirt Oat M",
        "color": "Oat",
        "size": "M",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_279",
        "sku": "FEMME-SKIRT-OAT-L",
        "skuNo": 279,
        "skuCode": "FEMME-SKIRT-OAT-L",
        "skuName": "AISCHMIRA Femme Skirt Oat L",
        "color": "Oat",
        "size": "L",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_280",
        "sku": "FEMME-SKIRT-OAT-XL",
        "skuNo": 280,
        "skuCode": "FEMME-SKIRT-OAT-XL",
        "skuName": "AISCHMIRA Femme Skirt Oat XL",
        "color": "Oat",
        "size": "XL",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_281",
        "sku": "FEMME-SKIRT-OAT-XXL",
        "skuNo": 281,
        "skuCode": "FEMME-SKIRT-OAT-XXL",
        "skuName": "AISCHMIRA Femme Skirt Oat XXL",
        "color": "Oat",
        "size": "XXL",
        "price": 1099000,
        "compareAtPrice": 1119000,
        "offlineBazaarPrice": 729000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": true,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_25",
    "sku": "HER-LONGSLEEVETOP-MAROON",
    "name": "Her Long Sleeve Top",
    "slug": "her-long-sleeve-top",
    "categoryId": "Tops",
    "category": "Tops",
    "collectionId": "col_her",
    "collection": "Her",
    "type": "Long Sleeve Top",
    "fabric": "Semi Wool",
    "price": 719000,
    "basePrice": 719000,
    "compareAtPrice": 729000,
    "offlineBazaarPrice": 479000,
    "currency": "IDR",
    "description": "The Her Long Sleeve Top from the AISCHMIRA Her collection. Tailored in Semi Wool with architectural precision and timeless editorial elegance.",
    "story": "Part of the Her collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Maroon",
      "Wood",
      "Black",
      "Oat"
    ],
    "availableSizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "variants": [
      {
        "id": "v_282",
        "sku": "HER-LONGSLEEVETOP-MAROON-XS",
        "skuNo": 282,
        "skuCode": "HER-LONGSLEEVETOP-MAROON-XS",
        "skuName": "AISCHMIRA Her Long Sleeve Top Maroon XS",
        "color": "Maroon",
        "size": "XS",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_283",
        "sku": "HER-LONGSLEEVETOP-MAROON-S",
        "skuNo": 283,
        "skuCode": "HER-LONGSLEEVETOP-MAROON-S",
        "skuName": "AISCHMIRA Her Long Sleeve Top Maroon S",
        "color": "Maroon",
        "size": "S",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_284",
        "sku": "HER-LONGSLEEVETOP-MAROON-M",
        "skuNo": 284,
        "skuCode": "HER-LONGSLEEVETOP-MAROON-M",
        "skuName": "AISCHMIRA Her Long Sleeve Top Maroon M",
        "color": "Maroon",
        "size": "M",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_285",
        "sku": "HER-LONGSLEEVETOP-MAROON-L",
        "skuNo": 285,
        "skuCode": "HER-LONGSLEEVETOP-MAROON-L",
        "skuName": "AISCHMIRA Her Long Sleeve Top Maroon L",
        "color": "Maroon",
        "size": "L",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_286",
        "sku": "HER-LONGSLEEVETOP-MAROON-XL",
        "skuNo": 286,
        "skuCode": "HER-LONGSLEEVETOP-MAROON-XL",
        "skuName": "AISCHMIRA Her Long Sleeve Top Maroon XL",
        "color": "Maroon",
        "size": "XL",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_287",
        "sku": "HER-LONGSLEEVETOP-WOOD-XS",
        "skuNo": 287,
        "skuCode": "HER-LONGSLEEVETOP-WOOD-XS",
        "skuName": "AISCHMIRA Her Long Sleeve Top Wood XS",
        "color": "Wood",
        "size": "XS",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_288",
        "sku": "HER-LONGSLEEVETOP-WOOD-S",
        "skuNo": 288,
        "skuCode": "HER-LONGSLEEVETOP-WOOD-S",
        "skuName": "AISCHMIRA Her Long Sleeve Top Wood S",
        "color": "Wood",
        "size": "S",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_289",
        "sku": "HER-LONGSLEEVETOP-WOOD-M",
        "skuNo": 289,
        "skuCode": "HER-LONGSLEEVETOP-WOOD-M",
        "skuName": "AISCHMIRA Her Long Sleeve Top Wood M",
        "color": "Wood",
        "size": "M",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_290",
        "sku": "HER-LONGSLEEVETOP-WOOD-L",
        "skuNo": 290,
        "skuCode": "HER-LONGSLEEVETOP-WOOD-L",
        "skuName": "AISCHMIRA Her Long Sleeve Top Wood L",
        "color": "Wood",
        "size": "L",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_291",
        "sku": "HER-LONGSLEEVETOP-WOOD-XL",
        "skuNo": 291,
        "skuCode": "HER-LONGSLEEVETOP-WOOD-XL",
        "skuName": "AISCHMIRA Her Long Sleeve Top Wood XL",
        "color": "Wood",
        "size": "XL",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_292",
        "sku": "HER-LONGSLEEVETOP-BLACK-XS",
        "skuNo": 292,
        "skuCode": "HER-LONGSLEEVETOP-BLACK-XS",
        "skuName": "AISCHMIRA Her Long Sleeve Top Black XS",
        "color": "Black",
        "size": "XS",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_293",
        "sku": "HER-LONGSLEEVETOP-BLACK-S",
        "skuNo": 293,
        "skuCode": "HER-LONGSLEEVETOP-BLACK-S",
        "skuName": "AISCHMIRA Her Long Sleeve Top Black S",
        "color": "Black",
        "size": "S",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_294",
        "sku": "HER-LONGSLEEVETOP-BLACK-M",
        "skuNo": 294,
        "skuCode": "HER-LONGSLEEVETOP-BLACK-M",
        "skuName": "AISCHMIRA Her Long Sleeve Top Black M",
        "color": "Black",
        "size": "M",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_295",
        "sku": "HER-LONGSLEEVETOP-BLACK-L",
        "skuNo": 295,
        "skuCode": "HER-LONGSLEEVETOP-BLACK-L",
        "skuName": "AISCHMIRA Her Long Sleeve Top Black L",
        "color": "Black",
        "size": "L",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_296",
        "sku": "HER-LONGSLEEVETOP-BLACK-XL",
        "skuNo": 296,
        "skuCode": "HER-LONGSLEEVETOP-BLACK-XL",
        "skuName": "AISCHMIRA Her Long Sleeve Top Black XL",
        "color": "Black",
        "size": "XL",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_297",
        "sku": "HER-LONGSLEEVETOP-OAT-XS",
        "skuNo": 297,
        "skuCode": "HER-LONGSLEEVETOP-OAT-XS",
        "skuName": "AISCHMIRA Her Long Sleeve Top Oat XS",
        "color": "Oat",
        "size": "XS",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_298",
        "sku": "HER-LONGSLEEVETOP-OAT-S",
        "skuNo": 298,
        "skuCode": "HER-LONGSLEEVETOP-OAT-S",
        "skuName": "AISCHMIRA Her Long Sleeve Top Oat S",
        "color": "Oat",
        "size": "S",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_299",
        "sku": "HER-LONGSLEEVETOP-OAT-M",
        "skuNo": 299,
        "skuCode": "HER-LONGSLEEVETOP-OAT-M",
        "skuName": "AISCHMIRA Her Long Sleeve Top Oat M",
        "color": "Oat",
        "size": "M",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_300",
        "sku": "HER-LONGSLEEVETOP-OAT-L",
        "skuNo": 300,
        "skuCode": "HER-LONGSLEEVETOP-OAT-L",
        "skuName": "AISCHMIRA Her Long Sleeve Top Oat L",
        "color": "Oat",
        "size": "L",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_301",
        "sku": "HER-LONGSLEEVETOP-OAT-XL",
        "skuNo": 301,
        "skuCode": "HER-LONGSLEEVETOP-OAT-XL",
        "skuName": "AISCHMIRA Her Long Sleeve Top Oat XL",
        "color": "Oat",
        "size": "XL",
        "price": 719000,
        "compareAtPrice": 729000,
        "offlineBazaarPrice": 479000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": true,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_26",
    "sku": "HER-SHORTSLEEVETOP-MAROON",
    "name": "Her Short Sleeve Top",
    "slug": "her-short-sleeve-top",
    "categoryId": "Tops",
    "category": "Tops",
    "collectionId": "col_her",
    "collection": "Her",
    "type": "Short Sleeve Top",
    "fabric": "Semi Wool",
    "price": 649000,
    "basePrice": 649000,
    "compareAtPrice": 659000,
    "offlineBazaarPrice": 429000,
    "currency": "IDR",
    "description": "The Her Short Sleeve Top from the AISCHMIRA Her collection. Tailored in Semi Wool with architectural precision and timeless editorial elegance.",
    "story": "Part of the Her collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Maroon",
      "Wood",
      "Black",
      "Oat"
    ],
    "availableSizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "variants": [
      {
        "id": "v_302",
        "sku": "HER-SHORTSLEEVETOP-MAROON-XS",
        "skuNo": 302,
        "skuCode": "HER-SHORTSLEEVETOP-MAROON-XS",
        "skuName": "AISCHMIRA Her Short Sleeve Top Maroon XS",
        "color": "Maroon",
        "size": "XS",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_303",
        "sku": "HER-SHORTSLEEVETOP-MAROON-S",
        "skuNo": 303,
        "skuCode": "HER-SHORTSLEEVETOP-MAROON-S",
        "skuName": "AISCHMIRA Her Short Sleeve Top Maroon S",
        "color": "Maroon",
        "size": "S",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_304",
        "sku": "HER-SHORTSLEEVETOP-MAROON-M",
        "skuNo": 304,
        "skuCode": "HER-SHORTSLEEVETOP-MAROON-M",
        "skuName": "AISCHMIRA Her Short Sleeve Top Maroon M",
        "color": "Maroon",
        "size": "M",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_305",
        "sku": "HER-SHORTSLEEVETOP-MAROON-L",
        "skuNo": 305,
        "skuCode": "HER-SHORTSLEEVETOP-MAROON-L",
        "skuName": "AISCHMIRA Her Short Sleeve Top Maroon L",
        "color": "Maroon",
        "size": "L",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_306",
        "sku": "HER-SHORTSLEEVETOP-MAROON-XL",
        "skuNo": 306,
        "skuCode": "HER-SHORTSLEEVETOP-MAROON-XL",
        "skuName": "AISCHMIRA Her Short Sleeve Top Maroon XL",
        "color": "Maroon",
        "size": "XL",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_307",
        "sku": "HER-SHORTSLEEVETOP-WOOD-XS",
        "skuNo": 307,
        "skuCode": "HER-SHORTSLEEVETOP-WOOD-XS",
        "skuName": "AISCHMIRA Her Short Sleeve Top Wood XS",
        "color": "Wood",
        "size": "XS",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_308",
        "sku": "HER-SHORTSLEEVETOP-WOOD-S",
        "skuNo": 308,
        "skuCode": "HER-SHORTSLEEVETOP-WOOD-S",
        "skuName": "AISCHMIRA Her Short Sleeve Top Wood S",
        "color": "Wood",
        "size": "S",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_309",
        "sku": "HER-SHORTSLEEVETOP-WOOD-M",
        "skuNo": 309,
        "skuCode": "HER-SHORTSLEEVETOP-WOOD-M",
        "skuName": "AISCHMIRA Her Short Sleeve Top Wood M",
        "color": "Wood",
        "size": "M",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_310",
        "sku": "HER-SHORTSLEEVETOP-WOOD-L",
        "skuNo": 310,
        "skuCode": "HER-SHORTSLEEVETOP-WOOD-L",
        "skuName": "AISCHMIRA Her Short Sleeve Top Wood L",
        "color": "Wood",
        "size": "L",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_311",
        "sku": "HER-SHORTSLEEVETOP-WOOD-XL",
        "skuNo": 311,
        "skuCode": "HER-SHORTSLEEVETOP-WOOD-XL",
        "skuName": "AISCHMIRA Her Short Sleeve Top Wood XL",
        "color": "Wood",
        "size": "XL",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_312",
        "sku": "HER-SHORTSLEEVETOP-BLACK-XS",
        "skuNo": 312,
        "skuCode": "HER-SHORTSLEEVETOP-BLACK-XS",
        "skuName": "AISCHMIRA Her Short Sleeve Top Black XS",
        "color": "Black",
        "size": "XS",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_313",
        "sku": "HER-SHORTSLEEVETOP-BLACK-S",
        "skuNo": 313,
        "skuCode": "HER-SHORTSLEEVETOP-BLACK-S",
        "skuName": "AISCHMIRA Her Short Sleeve Top Black S",
        "color": "Black",
        "size": "S",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_314",
        "sku": "HER-SHORTSLEEVETOP-BLACK-M",
        "skuNo": 314,
        "skuCode": "HER-SHORTSLEEVETOP-BLACK-M",
        "skuName": "AISCHMIRA Her Short Sleeve Top Black M",
        "color": "Black",
        "size": "M",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_315",
        "sku": "HER-SHORTSLEEVETOP-BLACK-L",
        "skuNo": 315,
        "skuCode": "HER-SHORTSLEEVETOP-BLACK-L",
        "skuName": "AISCHMIRA Her Short Sleeve Top Black L",
        "color": "Black",
        "size": "L",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_316",
        "sku": "HER-SHORTSLEEVETOP-BLACK-XL",
        "skuNo": 316,
        "skuCode": "HER-SHORTSLEEVETOP-BLACK-XL",
        "skuName": "AISCHMIRA Her Short Sleeve Top Black XL",
        "color": "Black",
        "size": "XL",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_317",
        "sku": "HER-SHORTSLEEVETOP-OAT-XS",
        "skuNo": 317,
        "skuCode": "HER-SHORTSLEEVETOP-OAT-XS",
        "skuName": "AISCHMIRA Her Short Sleeve Top Oat XS",
        "color": "Oat",
        "size": "XS",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_318",
        "sku": "HER-SHORTSLEEVETOP-OAT-S",
        "skuNo": 318,
        "skuCode": "HER-SHORTSLEEVETOP-OAT-S",
        "skuName": "AISCHMIRA Her Short Sleeve Top Oat S",
        "color": "Oat",
        "size": "S",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_319",
        "sku": "HER-SHORTSLEEVETOP-OAT-M",
        "skuNo": 319,
        "skuCode": "HER-SHORTSLEEVETOP-OAT-M",
        "skuName": "AISCHMIRA Her Short Sleeve Top Oat M",
        "color": "Oat",
        "size": "M",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_320",
        "sku": "HER-SHORTSLEEVETOP-OAT-L",
        "skuNo": 320,
        "skuCode": "HER-SHORTSLEEVETOP-OAT-L",
        "skuName": "AISCHMIRA Her Short Sleeve Top Oat L",
        "color": "Oat",
        "size": "L",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_321",
        "sku": "HER-SHORTSLEEVETOP-OAT-XL",
        "skuNo": 321,
        "skuCode": "HER-SHORTSLEEVETOP-OAT-XL",
        "skuName": "AISCHMIRA Her Short Sleeve Top Oat XL",
        "color": "Oat",
        "size": "XL",
        "price": 649000,
        "compareAtPrice": 659000,
        "offlineBazaarPrice": 429000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": true,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_27",
    "sku": "HER-PANTS-WOOD",
    "name": "Her Pants",
    "slug": "her-pants",
    "categoryId": "Bottoms",
    "category": "Bottoms",
    "collectionId": "col_her",
    "collection": "Her",
    "type": "Pants",
    "fabric": "Semi Wool",
    "price": 599000,
    "basePrice": 599000,
    "compareAtPrice": 609000,
    "offlineBazaarPrice": 399000,
    "currency": "IDR",
    "description": "The Her Pants from the AISCHMIRA Her collection. Tailored in Semi Wool with architectural precision and timeless editorial elegance.",
    "story": "Part of the Her collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Wood",
      "Black",
      "Oat"
    ],
    "availableSizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "variants": [
      {
        "id": "v_322",
        "sku": "HER-PANTS-WOOD-XS",
        "skuNo": 322,
        "skuCode": "HER-PANTS-WOOD-XS",
        "skuName": "AISCHMIRA Her Pants Wood XS",
        "color": "Wood",
        "size": "XS",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_323",
        "sku": "HER-PANTS-WOOD-S",
        "skuNo": 323,
        "skuCode": "HER-PANTS-WOOD-S",
        "skuName": "AISCHMIRA Her Pants Wood S",
        "color": "Wood",
        "size": "S",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_324",
        "sku": "HER-PANTS-WOOD-M",
        "skuNo": 324,
        "skuCode": "HER-PANTS-WOOD-M",
        "skuName": "AISCHMIRA Her Pants Wood M",
        "color": "Wood",
        "size": "M",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_325",
        "sku": "HER-PANTS-WOOD-L",
        "skuNo": 325,
        "skuCode": "HER-PANTS-WOOD-L",
        "skuName": "AISCHMIRA Her Pants Wood L",
        "color": "Wood",
        "size": "L",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_326",
        "sku": "HER-PANTS-WOOD-XL",
        "skuNo": 326,
        "skuCode": "HER-PANTS-WOOD-XL",
        "skuName": "AISCHMIRA Her Pants Wood XL",
        "color": "Wood",
        "size": "XL",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_327",
        "sku": "HER-PANTS-WOOD-XXL",
        "skuNo": 327,
        "skuCode": "HER-PANTS-WOOD-XXL",
        "skuName": "AISCHMIRA Her Pants Wood XXL",
        "color": "Wood",
        "size": "XXL",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_328",
        "sku": "HER-PANTS-BLACK-XS",
        "skuNo": 328,
        "skuCode": "HER-PANTS-BLACK-XS",
        "skuName": "AISCHMIRA Her Pants Black XS",
        "color": "Black",
        "size": "XS",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_329",
        "sku": "HER-PANTS-BLACK-S",
        "skuNo": 329,
        "skuCode": "HER-PANTS-BLACK-S",
        "skuName": "AISCHMIRA Her Pants Black S",
        "color": "Black",
        "size": "S",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_330",
        "sku": "HER-PANTS-BLACK-M",
        "skuNo": 330,
        "skuCode": "HER-PANTS-BLACK-M",
        "skuName": "AISCHMIRA Her Pants Black M",
        "color": "Black",
        "size": "M",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_331",
        "sku": "HER-PANTS-BLACK-L",
        "skuNo": 331,
        "skuCode": "HER-PANTS-BLACK-L",
        "skuName": "AISCHMIRA Her Pants Black L",
        "color": "Black",
        "size": "L",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_332",
        "sku": "HER-PANTS-BLACK-XL",
        "skuNo": 332,
        "skuCode": "HER-PANTS-BLACK-XL",
        "skuName": "AISCHMIRA Her Pants Black XL",
        "color": "Black",
        "size": "XL",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_333",
        "sku": "HER-PANTS-BLACK-XXL",
        "skuNo": 333,
        "skuCode": "HER-PANTS-BLACK-XXL",
        "skuName": "AISCHMIRA Her Pants Black XXL",
        "color": "Black",
        "size": "XXL",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_334",
        "sku": "HER-PANTS-OAT-XS",
        "skuNo": 334,
        "skuCode": "HER-PANTS-OAT-XS",
        "skuName": "AISCHMIRA Her Pants Oat XS",
        "color": "Oat",
        "size": "XS",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_335",
        "sku": "HER-PANTS-OAT-S",
        "skuNo": 335,
        "skuCode": "HER-PANTS-OAT-S",
        "skuName": "AISCHMIRA Her Pants Oat S",
        "color": "Oat",
        "size": "S",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_336",
        "sku": "HER-PANTS-OAT-M",
        "skuNo": 336,
        "skuCode": "HER-PANTS-OAT-M",
        "skuName": "AISCHMIRA Her Pants Oat M",
        "color": "Oat",
        "size": "M",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_337",
        "sku": "HER-PANTS-OAT-L",
        "skuNo": 337,
        "skuCode": "HER-PANTS-OAT-L",
        "skuName": "AISCHMIRA Her Pants Oat L",
        "color": "Oat",
        "size": "L",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_338",
        "sku": "HER-PANTS-OAT-XL",
        "skuNo": 338,
        "skuCode": "HER-PANTS-OAT-XL",
        "skuName": "AISCHMIRA Her Pants Oat XL",
        "color": "Oat",
        "size": "XL",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      },
      {
        "id": "v_339",
        "sku": "HER-PANTS-OAT-XXL",
        "skuNo": 339,
        "skuCode": "HER-PANTS-OAT-XXL",
        "skuName": "AISCHMIRA Her Pants Oat XXL",
        "color": "Oat",
        "size": "XXL",
        "price": 599000,
        "compareAtPrice": 609000,
        "offlineBazaarPrice": 399000,
        "stock": 0,
        "images": [
          "/images/products/placeholder.png"
        ]
      }
    ],
    "images": [
      "/images/products/placeholder.png"
    ],
    "isFeatured": true,
    "status": "active",
    "isActive": true
  },
  {
    "id": "prod_28",
    "sku": "SHE-DRESS-BLACK",
    "name": "She Dress",
    "slug": "she-dress",
    "categoryId": "Dress",
    "category": "Dress",
    "collectionId": "col_she",
    "collection": "She",
    "type": "Dress",
    "fabric": "Katun",
    "price": 1189000,
    "basePrice": 1189000,
    "compareAtPrice": 1209000,
    "offlineBazaarPrice": 789000,
    "currency": "IDR",
    "description": "The She Dress from the AISCHMIRA She collection. Tailored in Katun with architectural precision and timeless editorial elegance.",
    "story": "Part of the She collection, celebrating refined silhouettes, fluid drape, and understated luxury.",
    "careInstruction": "Dry clean or gentle hand wash with cool water. Do not bleach. Iron on low heat on the reverse side.",
    "shippingInfo": "Complimentary standard packaging. Orders processed and dispatched via WhatsApp concierge.",
    "availableColors": [
      "Black",
      "Maroon",
      "Baby Pink",
      "Butter Yellow",
      "Broken White"
    ],
    "availableSizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "variants": [
      {
        "id": "v_340",
        "sku": "SHE-DRESS-BLACK-XS",
        "skuNo": 340,
        "skuCode": "SHE-DRESS-BLACK-XS",
        "skuName": "AISCHMIRA She Dress Black XS",
        "color": "Black",
        "size": "XS",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-front-black-01.jpg"
        ]
      },
      {
        "id": "v_341",
        "sku": "SHE-DRESS-BLACK-S",
        "skuNo": 341,
        "skuCode": "SHE-DRESS-BLACK-S",
        "skuName": "AISCHMIRA She Dress Black S",
        "color": "Black",
        "size": "S",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-front-black-01.jpg"
        ]
      },
      {
        "id": "v_342",
        "sku": "SHE-DRESS-BLACK-M",
        "skuNo": 342,
        "skuCode": "SHE-DRESS-BLACK-M",
        "skuName": "AISCHMIRA She Dress Black M",
        "color": "Black",
        "size": "M",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-front-black-01.jpg"
        ]
      },
      {
        "id": "v_343",
        "sku": "SHE-DRESS-BLACK-L",
        "skuNo": 343,
        "skuCode": "SHE-DRESS-BLACK-L",
        "skuName": "AISCHMIRA She Dress Black L",
        "color": "Black",
        "size": "L",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-front-black-01.jpg"
        ]
      },
      {
        "id": "v_344",
        "sku": "SHE-DRESS-BLACK-XL",
        "skuNo": 344,
        "skuCode": "SHE-DRESS-BLACK-XL",
        "skuName": "AISCHMIRA She Dress Black XL",
        "color": "Black",
        "size": "XL",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-front-black-01.jpg"
        ]
      },
      {
        "id": "v_345",
        "sku": "SHE-DRESS-BLACK-XXL",
        "skuNo": 345,
        "skuCode": "SHE-DRESS-BLACK-XXL",
        "skuName": "AISCHMIRA She Dress Black XXL",
        "color": "Black",
        "size": "XXL",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-front-black-01.jpg"
        ]
      },
      {
        "id": "v_346",
        "sku": "SHE-DRESS-MAROON-XS",
        "skuNo": 346,
        "skuCode": "SHE-DRESS-MAROON-XS",
        "skuName": "AISCHMIRA She Dress Maroon XS",
        "color": "Maroon",
        "size": "XS",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-editorial-crimson-01.jpg"
        ]
      },
      {
        "id": "v_347",
        "sku": "SHE-DRESS-MAROON-S",
        "skuNo": 347,
        "skuCode": "SHE-DRESS-MAROON-S",
        "skuName": "AISCHMIRA She Dress Maroon S",
        "color": "Maroon",
        "size": "S",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-editorial-crimson-01.jpg"
        ]
      },
      {
        "id": "v_348",
        "sku": "SHE-DRESS-MAROON-M",
        "skuNo": 348,
        "skuCode": "SHE-DRESS-MAROON-M",
        "skuName": "AISCHMIRA She Dress Maroon M",
        "color": "Maroon",
        "size": "M",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-editorial-crimson-01.jpg"
        ]
      },
      {
        "id": "v_349",
        "sku": "SHE-DRESS-MAROON-L",
        "skuNo": 349,
        "skuCode": "SHE-DRESS-MAROON-L",
        "skuName": "AISCHMIRA She Dress Maroon L",
        "color": "Maroon",
        "size": "L",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-editorial-crimson-01.jpg"
        ]
      },
      {
        "id": "v_350",
        "sku": "SHE-DRESS-MAROON-XL",
        "skuNo": 350,
        "skuCode": "SHE-DRESS-MAROON-XL",
        "skuName": "AISCHMIRA She Dress Maroon XL",
        "color": "Maroon",
        "size": "XL",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-editorial-crimson-01.jpg"
        ]
      },
      {
        "id": "v_351",
        "sku": "SHE-DRESS-MAROON-XXL",
        "skuNo": 351,
        "skuCode": "SHE-DRESS-MAROON-XXL",
        "skuName": "AISCHMIRA She Dress Maroon XXL",
        "color": "Maroon",
        "size": "XXL",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-editorial-crimson-01.jpg"
        ]
      },
      {
        "id": "v_352",
        "sku": "SHE-DRESS-BABYPINK-XS",
        "skuNo": 352,
        "skuCode": "SHE-DRESS-BABYPINK-XS",
        "skuName": "AISCHMIRA She Dress Baby Pink XS",
        "color": "Baby Pink",
        "size": "XS",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg"
        ]
      },
      {
        "id": "v_353",
        "sku": "SHE-DRESS-BABYPINK-S",
        "skuNo": 353,
        "skuCode": "SHE-DRESS-BABYPINK-S",
        "skuName": "AISCHMIRA She Dress Baby Pink S",
        "color": "Baby Pink",
        "size": "S",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg"
        ]
      },
      {
        "id": "v_354",
        "sku": "SHE-DRESS-BABYPINK-M",
        "skuNo": 354,
        "skuCode": "SHE-DRESS-BABYPINK-M",
        "skuName": "AISCHMIRA She Dress Baby Pink M",
        "color": "Baby Pink",
        "size": "M",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg"
        ]
      },
      {
        "id": "v_355",
        "sku": "SHE-DRESS-BABYPINK-L",
        "skuNo": 355,
        "skuCode": "SHE-DRESS-BABYPINK-L",
        "skuName": "AISCHMIRA She Dress Baby Pink L",
        "color": "Baby Pink",
        "size": "L",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg"
        ]
      },
      {
        "id": "v_356",
        "sku": "SHE-DRESS-BABYPINK-XL",
        "skuNo": 356,
        "skuCode": "SHE-DRESS-BABYPINK-XL",
        "skuName": "AISCHMIRA She Dress Baby Pink XL",
        "color": "Baby Pink",
        "size": "XL",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg"
        ]
      },
      {
        "id": "v_357",
        "sku": "SHE-DRESS-BABYPINK-XXL",
        "skuNo": 357,
        "skuCode": "SHE-DRESS-BABYPINK-XXL",
        "skuName": "AISCHMIRA She Dress Baby Pink XXL",
        "color": "Baby Pink",
        "size": "XXL",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg"
        ]
      },
      {
        "id": "v_358",
        "sku": "SHE-DRESS-BUTTERYELLOW-XS",
        "skuNo": 358,
        "skuCode": "SHE-DRESS-BUTTERYELLOW-XS",
        "skuName": "AISCHMIRA She Dress Butter Yellow XS",
        "color": "Butter Yellow",
        "size": "XS",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-hero-white-01.jpg",
          "/images/products/she-dress/she-dress-front-black-01.jpg",
          "/images/products/she-dress/she-dress-editorial-crimson-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-ivory-01.jpg"
        ]
      },
      {
        "id": "v_359",
        "sku": "SHE-DRESS-BUTTERYELLOW-S",
        "skuNo": 359,
        "skuCode": "SHE-DRESS-BUTTERYELLOW-S",
        "skuName": "AISCHMIRA She Dress Butter Yellow S",
        "color": "Butter Yellow",
        "size": "S",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-hero-white-01.jpg",
          "/images/products/she-dress/she-dress-front-black-01.jpg",
          "/images/products/she-dress/she-dress-editorial-crimson-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-ivory-01.jpg"
        ]
      },
      {
        "id": "v_360",
        "sku": "SHE-DRESS-BUTTERYELLOW-M",
        "skuNo": 360,
        "skuCode": "SHE-DRESS-BUTTERYELLOW-M",
        "skuName": "AISCHMIRA She Dress Butter Yellow M",
        "color": "Butter Yellow",
        "size": "M",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-hero-white-01.jpg",
          "/images/products/she-dress/she-dress-front-black-01.jpg",
          "/images/products/she-dress/she-dress-editorial-crimson-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-ivory-01.jpg"
        ]
      },
      {
        "id": "v_361",
        "sku": "SHE-DRESS-BUTTERYELLOW-L",
        "skuNo": 361,
        "skuCode": "SHE-DRESS-BUTTERYELLOW-L",
        "skuName": "AISCHMIRA She Dress Butter Yellow L",
        "color": "Butter Yellow",
        "size": "L",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-hero-white-01.jpg",
          "/images/products/she-dress/she-dress-front-black-01.jpg",
          "/images/products/she-dress/she-dress-editorial-crimson-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-ivory-01.jpg"
        ]
      },
      {
        "id": "v_362",
        "sku": "SHE-DRESS-BUTTERYELLOW-XL",
        "skuNo": 362,
        "skuCode": "SHE-DRESS-BUTTERYELLOW-XL",
        "skuName": "AISCHMIRA She Dress Butter Yellow XL",
        "color": "Butter Yellow",
        "size": "XL",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-hero-white-01.jpg",
          "/images/products/she-dress/she-dress-front-black-01.jpg",
          "/images/products/she-dress/she-dress-editorial-crimson-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-ivory-01.jpg"
        ]
      },
      {
        "id": "v_363",
        "sku": "SHE-DRESS-BUTTERYELLOW-XXL",
        "skuNo": 363,
        "skuCode": "SHE-DRESS-BUTTERYELLOW-XXL",
        "skuName": "AISCHMIRA She Dress Butter Yellow XXL",
        "color": "Butter Yellow",
        "size": "XXL",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-hero-white-01.jpg",
          "/images/products/she-dress/she-dress-front-black-01.jpg",
          "/images/products/she-dress/she-dress-editorial-crimson-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-ivory-01.jpg"
        ]
      },
      {
        "id": "v_364",
        "sku": "SHE-DRESS-BROKENWHITE-XS",
        "skuNo": 364,
        "skuCode": "SHE-DRESS-BROKENWHITE-XS",
        "skuName": "AISCHMIRA She Dress Broken White XS",
        "color": "Broken White",
        "size": "XS",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-hero-white-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-ivory-01.jpg"
        ]
      },
      {
        "id": "v_365",
        "sku": "SHE-DRESS-BROKENWHITE-S",
        "skuNo": 365,
        "skuCode": "SHE-DRESS-BROKENWHITE-S",
        "skuName": "AISCHMIRA She Dress Broken White S",
        "color": "Broken White",
        "size": "S",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-hero-white-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-ivory-01.jpg"
        ]
      },
      {
        "id": "v_366",
        "sku": "SHE-DRESS-BROKENWHITE-M",
        "skuNo": 366,
        "skuCode": "SHE-DRESS-BROKENWHITE-M",
        "skuName": "AISCHMIRA She Dress Broken White M",
        "color": "Broken White",
        "size": "M",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-hero-white-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-ivory-01.jpg"
        ]
      },
      {
        "id": "v_367",
        "sku": "SHE-DRESS-BROKENWHITE-L",
        "skuNo": 367,
        "skuCode": "SHE-DRESS-BROKENWHITE-L",
        "skuName": "AISCHMIRA She Dress Broken White L",
        "color": "Broken White",
        "size": "L",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-hero-white-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-ivory-01.jpg"
        ]
      },
      {
        "id": "v_368",
        "sku": "SHE-DRESS-BROKENWHITE-XL",
        "skuNo": 368,
        "skuCode": "SHE-DRESS-BROKENWHITE-XL",
        "skuName": "AISCHMIRA She Dress Broken White XL",
        "color": "Broken White",
        "size": "XL",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-hero-white-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-ivory-01.jpg"
        ]
      },
      {
        "id": "v_369",
        "sku": "SHE-DRESS-BROKENWHITE-XXL",
        "skuNo": 369,
        "skuCode": "SHE-DRESS-BROKENWHITE-XXL",
        "skuName": "AISCHMIRA She Dress Broken White XXL",
        "color": "Broken White",
        "size": "XXL",
        "price": 1189000,
        "compareAtPrice": 1209000,
        "offlineBazaarPrice": 789000,
        "stock": 0,
        "images": [
          "/images/products/she-dress/she-dress-hero-white-01.jpg",
          "/images/products/she-dress/she-dress-lifestyle-ivory-01.jpg"
        ]
      }
    ],
    "images": [
      "/images/products/she-dress/she-dress-hero-white-01.jpg",
      "/images/products/she-dress/she-dress-front-black-01.jpg",
      "/images/products/she-dress/she-dress-editorial-crimson-01.jpg",
      "/images/products/she-dress/she-dress-lifestyle-blush-pink-01.jpg",
      "/images/products/she-dress/she-dress-lifestyle-ivory-01.jpg"
    ],
    "isFeatured": true,
    "status": "active",
    "isActive": true
  }
];
