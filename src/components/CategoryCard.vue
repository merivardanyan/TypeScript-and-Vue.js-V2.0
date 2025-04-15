<template>
  <div class="p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
    <img v-if="category.imageUrl" :src="category.imageUrl" :alt="category.name" class="w-full h-48 object-cover rounded-lg mb-4" />

    <div class="text-center">
      <router-link :to="`/categories/${category.id}`">
        <button>{{ category.name }}</button>
      </router-link>

        <p>{{ category.description || 'Explore our collection of products.' }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { Category } from '../types/category';

defineProps<{
  category: Category;
}>();


</script>

<style scoped>
p{
  padding-top: 15px;
}</style>