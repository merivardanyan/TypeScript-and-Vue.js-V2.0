<template>
    <div class="p-4 border rounded shadow hover:shadow-md transition">
      <img
        :src="category.imageUrl"
        :alt="category.name"
        class="w-full h-48 object-cover rounded mb-2"
      />
      <h3 class="text-lg font-semibold">{{ category.name }}</h3>
      <button
        class="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded">
        Add to Cart
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { Category } from '../types/category';
  
  defineProps<{
    category: Category;
  }>();
  
  </script>
  
  <style scoped>
  
  </style>
  