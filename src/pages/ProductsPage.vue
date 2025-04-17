<template>
    <div class="row">
        <div class="col">
          <div class="title ">Categories</div>
        </div>
    </div>
    <div v-if="categoriesQuery.isLoading.value"><i class="pi pi-spin pi-spinner"></i></div>
    <div v-if="categoriesQuery.data" class="row pt-0">
      <CategoryCard v-for="category in categoriesQuery.data.value" :key="category.id" :category="category"
        class="col pt-0" />
    </div>
    <div>
      <div v-if="productsQuery.isLoading.value"><i class="pi pi-spin pi-spinner"></i></div>
      <div v-if="productsQuery.error.value">No products</div>
      <div v-if="productsQuery.data.value" class="products row pt-0">
        <div v-for="product in productsQuery.data.value" :key="product.id" class="col col-1 col-sm-2 col-md-3 col-lg-5">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useCategories } from '../composables/useCategories.ts';
import { useProducts } from '../composables/useProducts';
import CategoryCard from '../components/CategoryCard.vue';
import ProductCard from '../components/ProductCard.vue';
const categoriesQuery = useCategories();

const productsQuery = useProducts();
</script>

<style scoped></style>
