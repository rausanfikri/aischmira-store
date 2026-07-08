# API Integration Plan

---

# Objective

Saat ini prototype menggunakan local data.

Namun seluruh struktur harus dipersiapkan agar nantinya dapat menggunakan API tanpa mengubah UI.

---

# Future API Sources

- WooCommerce REST API
- BigSeller API
- CRM API
- Loyalty API
- Email Automation
- WhatsApp Automation

---

# API Architecture

```
Website

↓

Services Layer

↓

REST API

↓

WooCommerce

↓

BigSeller
```

UI tidak boleh melakukan fetch secara langsung.

Semua request berada pada folder:

```
services/
```

---

# Planned Service Structure

```
services/

product.service.ts

collection.service.ts

customer.service.ts

cart.service.ts

order.service.ts
```

---

# Future Endpoint

## Product

GET

```
/products
```

GET

```
/products/:slug
```

---

## Collection

GET

```
/collections
```

---

## Cart

GET

```
/cart
```

POST

```
/cart
```

DELETE

```
/cart/:id
```

---

## Customer

POST

```
/login
```

POST

```
/register
```

GET

```
/profile
```

---

## Wishlist

GET

```
/wishlist
```

POST

```
/wishlist
```

---

## Order

GET

```
/orders
```

POST

```
/checkout
```

---

# API Response Standard

Semua response mengikuti format:

```json
{
  "success": true,
  "message": "",
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "",
  "errors": []
}
```

---

# Authentication

Prototype:

Tidak digunakan.

Future:

JWT atau WooCommerce Authentication.

---

# API Versioning

```
/api/v1/
```

---

# Error Handling

Seluruh error ditangani pada Service Layer.

UI hanya menerima data yang sudah diproses.

---

# AI Rule

Jangan pernah melakukan fetch langsung dari component.

Selalu melalui folder services.