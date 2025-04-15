export interface Product {
  id: number;
  name: string;
  price: number;
  sku?: string;
  description?: string;
  imageUrl?: string;
  thumbnailUrl?: string;
  options?: ProductOption[];
  categoryIds?: number[];
  defaultCategoryId?: number;
  quantity?: number;
}

export interface ProductOption {
  name: string;
  type: string;
  choices?: {
    text: string;
    priceModifier?: number;
  }[];
}
