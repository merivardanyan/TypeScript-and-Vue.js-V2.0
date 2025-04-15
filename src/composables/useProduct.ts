// src/composables/useProducts.ts
import { useQuery } from '@tanstack/vue-query';
import { getProductById } from '../api/ecwidApi';
import type { Product } from '../types/product';

export function useProduct(productId: number) {
  return useQuery<Product | null>({
    queryKey: ['product', productId],
    queryFn: () => getProductById(productId),
    enabled: !!productId,
  });
}