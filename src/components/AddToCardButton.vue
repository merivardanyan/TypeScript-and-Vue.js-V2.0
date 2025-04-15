<template>
    <button
      @click="handleAdd"
      class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition"
    >
      Add to Cart
    </button>
  </template>
  
  <script setup lang="ts">
  import { useCart } from '../composables/useCart';
  import type { Product } from '../types/product';
  
  const props = defineProps<{ product: Product }>();
  const { addToCart } = useCart();
  
  const handleAdd = () => {
    addToCart(props.product);
  };
  </script>
  