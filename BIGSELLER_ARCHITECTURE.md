# AISCHMIRA.STORE — Enterprise BigSeller Integration Architecture

**Version:** 1.0.0 (Sprint I1.1 — BigSeller Domain Integration Ports & Adapters)  
**Status:** Approved & Implemented  

---

## 1. Overview

The **AISCHMIRA BigSeller ERP Integration** (`core/integration/bigseller/`) establishes Hexagonal Architecture (Ports & Adapters) for inventory, pricing, order fulfillment, and multi-warehouse allocations.

- **Ports & Adapters Guarantee**: All BigSeller concerns sit behind clean provider interfaces (`IInventoryProvider`, `IPriceProvider`, `IOrderProvider`, `IShipmentProvider`, `IWarehouseProvider`, `IPromotionProvider`).
- **Zero Live Network Calls**: No direct `fetch` or `axios` HTTP calls are executed. The architecture defines DTOs, Mappers, Zod Schemas, and Domain Services ready for Phase 5.1 live HTTP integration.

---

## 2. Target Ports & Adapters Architecture

```text
                                Presentation UI
                                       │
                                       ▼
                              Domain Application
                             (services/*.service.ts)
                                       │
                                       ▼
                               Provider Contracts
                    (IInventoryProvider, IOrderProvider, etc.)
                                       │
                                       ▼
                               BigSellerAdapter
                     (core/integration/adapters/bigseller.adapter.ts)
                                       │
            ┌──────────────────────────┼──────────────────────────┐
            ▼                          ▼                          ▼
BigSellerProductMapper     BigSellerInventoryMapper     BigSellerOrderMapper
            │                          │                          │
            ▼                          ▼                          ▼
     ProductDTO List            InventoryDTO List           OrderDTO Detail
```

---

## 3. SKU & Inventory Model Architecture

### SKU Taxonomy:
1. **Internal SKU**: Master brand identifier (`BIANCA-SILK-DRESS`).
2. **Parent SPU**: Master product model (`SPU-2026-BIANCA`).
3. **Variant SKU**: Color & size combination (`BIANCA-SILK-DRESS-BLK-M`).
4. **Marketplace SKU**: Channel-specific SKU mapping (`BS-TOKOPEDIA-BIANCA-M`).
5. **Warehouse SKU**: Bin/location tracking SKU (`WH-JKT-BIN-448`).
6. **Bundle SKU**: Curated outfit assembly SKU (`LOOK-MIDNIGHT-SOIREE-01`).

### Inventory Allocations:
- **Available Stock**: Physical stock ready for customer reservation.
- **Reserved Stock**: Locked stock tied to unfulfilled WhatsApp orders.
- **Incoming Stock**: Atelier production in transit to fulfillment hub.
- **Safety Stock**: Buffer stock reserved for VIP Atelier members.

---

## 4. Pricing & Promotion Architecture

- **Retail Price**: Flagship store base price (`IDR 4,800,000`).
- **Marketplace Price**: Channel-specific price point.
- **Discount & Flash Sale Price**: Promotional campaign adjustments.
- **Membership Price**: Privé member tier discount price (`IDR 4,560,000`).

---

## 5. DTO & Validation Schema Mapping

All payload transitions are validated using Zod (`core/integration/bigseller/validation/schemas.ts`):
- `ProductDTO` $\rightarrow$ `BigSellerProductMapper.toDomain()` $\rightarrow$ `Product` Entity
- `InventoryDTO` $\rightarrow$ `BigSellerInventoryMapper.toStockLevel()` $\rightarrow$ `StockLevel` Domain Entity
- `OrderDTO` $\rightarrow$ `BigSellerOrderMapper.toDomain()` $\rightarrow$ `OrderEntity` Domain Entity
