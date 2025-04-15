import { useQuery } from '@tanstack/vue-query';
import { getCategoryById } from '../api/ecwidApi';
import type { Category } from '../types/category';

export function useCategory(categoryId: number) {
  return useQuery<Category | null>({
    queryKey: ['category', categoryId],
    queryFn: () => getCategoryById(categoryId),
  });
}
