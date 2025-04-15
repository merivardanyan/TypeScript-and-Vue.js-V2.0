<script setup lang="ts">
import ProductCard from '../components/ProductCard.vue';
import CategoryCard from '../components/CategoryCard.vue';
import { useProducts } from '../composables/useProducts';
import { useCategories } from '../composables/useCategories.ts';

const productsQuery = useProducts();
const categoriesQuery = useCategories();
</script>

<template>
  <div>
    <div class="categories">
      <h1 class="text-2xl font-bold mb-4">Categories</h1>
      <div v-if="categoriesQuery.isLoading.value">Loading...</div>
      <div v-else-if="categoriesQuery.error.value">
        Error loading categories
      </div>
      <div v-else class="flex flex-wrap">
        <CategoryCard
          v-for="category in categoriesQuery.data.value ?? []"
          :key="category.id"
          :category="category"
        />
      </div>
    </div>

    <h1 class="text-2xl font-bold mb-4">All Products</h1>

    <div v-if="productsQuery.isLoading.value">Loading...</div>
    <div v-else-if="productsQuery.error.value">Error loading products</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ProductCard
        v-for="product in productsQuery.data.value ?? []"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
