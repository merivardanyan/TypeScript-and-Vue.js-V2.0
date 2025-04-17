<template>
    <div class="wrapper">
      <router-link :to="`/product/${product.id}`">
  
        <picture>
          <img :src="product.imageUrl" :alt="product.name" />
        </picture>
        <div class="title">{{ product.name }}</div>
  
      </router-link>
  
      <div>€ {{ product.price }}</div>
      <div><AddToCardButton :product="product" /></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { Product } from '../types/product';
  import AddToCardButton from '../components/AddToCardButton.vue';
  
  
  defineProps<{
    product: Product;
  }>();
  
  </script>
  
  <style scoped>
  .wrapper {
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(97, 97, 97, 0.3);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  
  .wrapper div{
    padding: 5px;
  }
  .wrapper .title{
    padding-top: 10px;
    font-size: 16px;
  }
  .wrapper img {
    transition: transform 0.3s ease-in-out;
    transform: scale(1);
  }
  
  picture:hover img {
    transform: scale(1.2);
  }
  
  </style>