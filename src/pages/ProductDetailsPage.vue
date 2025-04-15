<template>
  <div v-if="productQuery.isLoading.value">Loading product...</div>
  <div v-else-if="productQuery.error.value">Error loading product</div>
  <div v-else-if="productQuery.data.value">
    <img
      :src="productQuery.data.value.imageUrl"
      :alt="productQuery.data.value.name"
    />
    <h1>{{ productQuery.data.value.name }}</h1>
    <p>${{ productQuery.data.value.price }}</p>
    <p v-html="productQuery.data.value.description"></p>

    <AddToCardButton :product="productQuery.data.value"/>

  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import AddToCardButton from '../components/AddToCardButton.vue';
import { useProduct } from '../composables/useProduct';
const route = useRoute();
const productId = parseInt(route.params.id as string, 10);
const productQuery = useProduct(productId);

</script>
