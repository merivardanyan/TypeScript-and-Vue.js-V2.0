<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Categories</h1>
    <div v-if="categoriesQuery.isLoading.value" class="text-gray-500">Loading categories...</div>
    <div v-if="categoriesQuery.error.value" class="text-red-500">Error loading categories</div>

    <div v-if="categoriesQuery.data">
      <button v-if="selectedCategory" @click="selectedCategory = null"
        class="mb-4 text-sm underline text-blue-500 hover:text-blue-700">
        Show all products
      </button>
      <CategoryCard v-for="category in categoriesQuery.data.value" :key="category.id" :category="category"
        @selectCategory="onCategorySelect" />
    </div>

    <div>
      <div v-if="productsQuery.isLoading.value" class="text-gray-500">Loading products...</div>
      <div v-if="productsQuery.error.value" class="text-red-500">Error loading products</div>

      <div v-if="productsQuery.data.value">
        <div v-for="product in filteredProducts" :key="product.id" class="mb-4 p-4 border rounded">
          <ProductCard
        v-for="product in productsQuery.data.value ?? []"
        :key="product.id"
        :product="product"
      />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCategories } from '../composables/useCategories.ts';
import { useProducts } from '../composables/useProducts';
import CategoryCard from '../components/CategoryCard.vue';
import ProductCard from '../components/ProductCard.vue';
import type { Category } from '../types/category'; // if you have this type

const categoriesQuery = useCategories();
const productsQuery = useProducts();
const selectedCategory = ref<Category | null>(null);

const filteredProducts = computed(() => {
  const products = productsQuery.data.value || [];
  if (selectedCategory.value) {
    return products.filter(product => selectedCategory.value && product.categoryIds?.includes(selectedCategory.value.id));
  }
  return products;
});


const onCategorySelect = (category: any) => {
  selectedCategory.value = category;
  productsQuery.refetch();
};

</script>

<style scoped></style>
