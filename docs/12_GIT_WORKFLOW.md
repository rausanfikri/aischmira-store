# Git Workflow

---

# Purpose

Dokumen ini menjelaskan standar penggunaan Git pada project AISCHMIRA.STORE.

Tujuan utama:

- Menjaga riwayat perubahan tetap bersih.
- Memudahkan kolaborasi dengan AI maupun developer.
- Mengurangi konflik saat merge.
- Menjamin setiap perubahan dapat ditelusuri.

---

# Branch Strategy

Project menggunakan Git Flow sederhana.

```
main
```

Production branch.

Selalu dalam kondisi stabil.

Tidak boleh melakukan development langsung pada branch ini.

---

```
develop
```

Development branch.

Seluruh fitur akan digabungkan ke branch ini sebelum masuk ke production.

---

Feature Branch

Gunakan format:

```
feature/nama-fitur
```

Contoh:

```
feature/navbar
feature/homepage
feature/product-card
feature/product-detail
feature/cart
feature/search
feature/filter
```

---

Bug Fix

Gunakan format:

```
fix/nama-bug
```

Contoh:

```
fix/mobile-navbar
fix/product-price
```

---

Hotfix

Untuk production.

```
hotfix/payment
```

---

# Conventional Commit

Seluruh commit menggunakan Conventional Commit.

### feat

Menambah fitur baru.

```
feat: create homepage hero
```

---

### fix

Memperbaiki bug.

```
fix: responsive navbar
```

---

### docs

Perubahan dokumentasi.

```
docs: update architecture
```

---

### style

Perubahan visual.

```
style: improve product card spacing
```

---

### refactor

Perubahan struktur kode.

```
refactor: simplify product hook
```

---

### chore

Perubahan maintenance.

```
chore: update dependencies
```

---

### test

Testing.

---

# Pull Request

Setiap Pull Request harus menjelaskan:

- Tujuan
- File yang diubah
- Screenshot (jika UI)
- Risiko perubahan
- Checklist

---

# Definition of Done

Sebelum merge:

- Tidak ada TypeScript Error
- Tidak ada ESLint Error
- Responsive
- Build berhasil
- Tidak ada hardcoded data
- Mengikuti Design System

---

# Deployment Flow

Developer

↓

Feature Branch

↓

Develop

↓

Testing

↓

Main

↓

Vercel Production