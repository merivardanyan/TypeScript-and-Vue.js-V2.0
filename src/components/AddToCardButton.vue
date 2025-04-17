<template>
  <button @click="() => handleAdd()">
    Buy
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