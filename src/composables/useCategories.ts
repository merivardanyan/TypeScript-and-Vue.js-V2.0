import { useQuery } from '@tanstack/vue-query';
import { getCategories } from '../api/ecwidApi';
import type { Category } from '../types/category';

export function useCategories() {
  return useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  });
}
