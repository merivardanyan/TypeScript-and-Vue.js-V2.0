<template>
    <div class="p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
      <img
        :src="category.imageUrl"
        :alt="category.name"
        class="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div class="text-center">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ category.name }}</h3>
        <p class="text-gray-500 text-sm mb-4">{{ category.description || 'Explore our collection of products.' }}</p>
        <button
          @click="selectCategory(category)"
          class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
        >
          View Products
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import type { Category } from '../types/category';
  
  defineProps<{
    category: Category;
  }>();
  
  const emit = defineEmits<{
    (event: 'selectCategory', category: Category): void;
  }>();
  
  const selectCategory = (category: Category) => {
    emit('selectCategory', category);
  };
  </script>
  
  <style scoped>
  </style>
  