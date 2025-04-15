// src/composables/useProducts.ts
import { useQuery } from '@tanstack/vue-query';
import { getProducts } from '../api/ecwidApi';
import type { Product } from '../types/product';

export function useProducts(categoryId: number | null = null) {
  return useQuery<Product[]>({
    queryKey: ['products', categoryId],
    queryFn: () => getProducts(categoryId),
  });
}
