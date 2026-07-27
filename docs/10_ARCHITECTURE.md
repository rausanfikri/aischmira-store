# Software Architecture

---

# Architecture Overview

AISCHMIRA.STORE menggunakan arsitektur Modular Frontend.

Setiap fitur dipisahkan menjadi module agar mudah dikembangkan.

Diagram sederhana

Presentation Layer

↓

Section Components

↓

Reusable Components

↓

Business Logic

↓

Data Layer

↓

API Layer (Future)

↓

WooCommerce

↓

BigSeller

---

# Layer Architecture

## Presentation Layer

Berisi halaman.

Contoh

app/

page.tsx

collection/

product/

about/

contact/

---

## Section Layer

Hero

Featured Collection

Brand Story

Newsletter

Footer

Navbar

Section tidak boleh berisi business logic.

---

## UI Layer

Berisi reusable component.

Button

Card

Badge

Container

Heading

Divider

Input

Modal

Toast

---

## Product Layer

Product Card

Gallery

Price

Variant

Recommendation

---

## Data Layer

Saat ini menggunakan local TypeScript.

Future

REST API

WooCommerce

---

## Service Layer

Seluruh komunikasi API akan berada pada folder services.

UI tidak boleh melakukan fetch secara langsung.

---

## Utility Layer

Folder

lib/

Berisi helper.

formatter

currency

cn()

slug

validator

---

# Data Flow

User

↓

Page

↓

Section

↓

Component

↓

Data

↓

Render

Future

↓

API

↓

WooCommerce

↓

BigSeller

---

# Design Principle

Single Responsibility

Reusable Component

Scalable

Maintainable

Responsive

Accessibility

---

# Future Architecture

Marketplace

↓

BigSeller

↓

WooCommerce

↓

Website

↓

CRM

↓

Loyalty

↓

Marketing Automation

↓

AI Assistant

---

# Engineering Principle

Jangan membuat duplicate component.

Jangan hardcode.

Pisahkan UI dan Logic.

Gunakan TypeScript.

Gunakan reusable component.

Seluruh perubahan harus mengikuti dokumentasi.