<template>
    <div class="p-4 border rounded shadow hover:shadow-md transition">
      <img
        :src="product.imageUrl"
        :alt="product.name"
        class="w-full h-48 object-cover rounded mb-2"
      />
      <h3 class="text-lg font-semibold">{{ product.name }}</h3>
      <p class="text-gray-600 mb-2">{{ product.price }} $</p>
      <button
        class="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded">
        Add to Cart
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { Product } from '../types/product';
  
  defineProps<{
    product: Product;
  }>();
  
  </script>
  
  <style scoped>
  
  </style>
  