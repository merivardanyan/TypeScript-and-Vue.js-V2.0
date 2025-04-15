<template>
  <div v-if="productQuery.isLoading.value" class="text-gray-500">Loading product...</div>
  <div v-else-if="productQuery.error.value" class="text-red-500">Error loading product</div>
  <div v-else-if="productQuery.data.value" class="p-6 max-w-3xl mx-auto">
    <img
      :src="productQuery.data.value.imageUrl"
      :alt="productQuery.data.value.name"
      class="w-full h-64 object-cover rounded mb-6"
    />
    <h1 class="text-3xl font-bold mb-2">{{ productQuery.data.value.name }}</h1>
    <p class="text-xl text-gray-700 mb-4">${{ productQuery.data.value.price }}</p>
    <p class="text-gray-600 mb-6" v-html="productQuery.data.value.description"></p>

    <button
      @click="addToCart(productQuery.data.value)"
      class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
    >
      Add to Cart
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import type { Product } from '../types/product';
import { useProduct } from '../composables/useProduct';
const route = useRoute();
const productId = parseInt(route.params.id as string, 10);
const productQuery = useProduct(productId);

const addToCart = (product: Product) => {
  console.log(`${product.name} added to cart!`);
  // You can later hook this to actual cart logic
};
</script>
