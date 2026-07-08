# Security Guidelines

---

# Purpose

Meskipun prototype belum memiliki login maupun pembayaran, seluruh kode harus ditulis dengan mempertimbangkan keamanan sejak awal.

---

# Security Principles

- Security by Design
- Least Privilege
- Validate Every Input
- Never Trust Client Data

---

# Environment Variables

Semua secret wajib disimpan pada:

.env.local

Jangan pernah commit:

API Key

Database Password

JWT Secret

WooCommerce Secret

BigSeller Secret

---

# Authentication

Prototype

Tidak digunakan.

Production

JWT

OAuth

WooCommerce Authentication

---

# Authorization

Role

Guest

Customer

Admin

Super Admin

---

# API

Jangan pernah expose API Key.

Gunakan Service Layer.

---

# XSS

Jangan menggunakan dangerouslySetInnerHTML kecuali sangat diperlukan.

---

# CSRF

Gunakan mekanisme proteksi ketika menggunakan API POST.

---

# Validation

Gunakan:

Zod

React Hook Form

Seluruh input harus divalidasi.

---

# Upload

Validasi:

Ukuran file

Format file

Mime Type

---

# Logging

Jangan mencetak informasi sensitif ke browser console.

---

# Error Handling

Jangan tampilkan stack trace ke pengguna.

Gunakan pesan error yang ramah.

---

# Password

Password tidak boleh disimpan di frontend.

Seluruh proses autentikasi berada di backend.

---

# Payment

Future

Gunakan payment gateway resmi.

Jangan menyimpan data kartu.

---

# Privacy

Patuhi regulasi perlindungan data pribadi.

Gunakan cookie seperlunya.

Minta persetujuan pengguna jika menggunakan tracking.

---

# AI Rules

AI tidak boleh:

- Menuliskan API Key.
- Menghardcode credential.
- Menyimpan secret di source code.
- Membuat endpoint tanpa validasi.

Jika informasi keamanan belum tersedia,

buat TODO.