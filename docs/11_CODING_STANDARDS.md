# Coding Standards

---

# General Rules

Gunakan:

TypeScript

Functional Component

App Router

TailwindCSS

---

# Naming Convention

Component

PascalCase

ProductCard.tsx

Navbar.tsx

Footer.tsx

---

Function

camelCase

formatCurrency()

getProduct()

---

Variable

camelCase

productList

selectedColor

---

Constant

UPPER_CASE

MAX_PRODUCT

DEFAULT_COLOR

---

Folder

lowercase

components

hooks

services

---

# Component Rules

Satu component

Satu tanggung jawab.

Gunakan Props.

Gunakan Interface.

Jangan membuat component terlalu besar.

Jika component lebih dari ±200 baris,

pecah menjadi component baru.

---

# Styling

Gunakan Tailwind.

Jangan menggunakan inline style.

Gunakan utility class.

Gunakan Design System.

---

# Data

Jangan hardcode.

Gunakan folder data.

Future

Gunakan API.

---

# Import

Gunakan alias

@/

Contoh

import Button from "@/components/ui/Button";

---

# TypeScript

Hindari any.

Gunakan interface.

Gunakan type jika diperlukan.

Seluruh props harus memiliki tipe.

---

# Commit

Gunakan Conventional Commit.

feat:

fix:

style:

refactor:

docs:

test:

chore:

---

# AI Rules

AI harus:

Membaca AGENTS.md

Membaca docs

Membaca struktur project

Baru membuat kode.

Jika informasi belum tersedia,

buat TODO.

Jangan mengarang.

---

# Clean Code

Readable

Reusable

Maintainable

Consistent

Minimal

Production Ready