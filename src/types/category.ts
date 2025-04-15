export interface Category {
  id: number;
  name: string;
  thumbnailUrl?: string;
  imageUrl?: string;
  parentId?: number;
  description?: string;
  productCount?: number;
}
