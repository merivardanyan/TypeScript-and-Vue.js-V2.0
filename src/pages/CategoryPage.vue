<template>
  <div>
    <div v-if="categoryQuery.isLoading.value">Loading category...</div>
    <div v-if="categoryQuery.error.value">Error loading category</div>

    <div class="row pb-0">
      <div class="col">
        <div class="title"><router-link :to="`/`">Go Back</router-link></div>

      </div>
      <div v-if="categoryQuery.data.value" class="col">
        <div class="title">{{ categoryQuery.data.value.name }}</div>
        <div v-if="categoryQuery.data.value.description" class="desc">{{ categoryQuery.data.value.description }}</div>
      </div>
    </div>

    <div v-if="productsQuery.isLoading.value">Loading products...</div>
    <div v-if="productsQuery.error.value">Error loading products</div>

    <div v-if="productsQuery.data.value" class="products row pt-0">
      <div v-for="product in productsQuery.data.value" :key="product.id" class="col col-1 col-sm-2 col-md-3 col-lg-5">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useProducts } from '../composables/useProducts';
import { useCategory } from '../composables/useCategory';
import ProductCard from '../components/ProductCard.vue';

const route = useRoute();
const categoryId = Number(route.params.id);

const categoryQuery = useCategory(categoryId);
const productsQuery = useProducts(categoryId);
</script>