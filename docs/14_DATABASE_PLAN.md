# Database Planning

---

# Current State

Prototype tidak menggunakan database.

Semua data menggunakan:

TypeScript Static Data

Folder:

```
data/
```

---

# Future Database

WooCommerce

↓

MySQL

↓

Website

CRM

↓

Loyalty

---

# Entity Relationship

Collection

↓

Product

↓

Variant

↓

Inventory

↓

Order

↓

Customer

↓

Loyalty

---

# Product

Field

- id
- slug
- name
- description
- category
- collection
- thumbnail
- gallery
- status

---

# Variant

- id
- product_id
- color
- size
- sku
- stock
- price

---

# Collection

- id
- name
- slug
- description
- cover

---

# Customer

- id
- fullname
- email
- phone
- birthdate
- membership

---

# Cart

- id
- customer_id
- product_variant
- qty
- subtotal

---

# Order

- id
- order_number
- customer_id
- payment_status
- shipping_status
- total

---

# Loyalty

- id
- customer_id
- point
- level
- reward

---

# Inventory

Data stok berasal dari BigSeller.

Website hanya membaca data.

Website bukan sumber stok utama.

---

# Single Source of Truth

Inventory

↓

BigSeller

Product

↓

WooCommerce

Customer

↓

CRM

Website hanya sebagai Presentation Layer.

---

# Future Synchronization

BigSeller

↓

WooCommerce

↓

Website

↓

CRM

↓

Marketing Automation

↓

Analytics

---

# Development Rules

Prototype:

Static Data

Production:

REST API

Database tidak boleh diakses langsung oleh UI.

Semua akses melalui Service Layer.