export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  quantity: number;
  addedAt: string;
}

export interface WishlistItem {
  productId: string;
  addedAt: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  points: number;
}
