<template>
  <div v-if="productQuery.isLoading.value">Loading product...</div>
  <div v-else-if="productQuery.error.value">Error loading product</div>
  <div v-else-if="productQuery.data.value">
    <div class="row single_product">
      <div class="col w-40 col-1">
        <picture>
          <img :src="productQuery.data.value.imageUrl" :alt="productQuery.data.value.name" />
        </picture>
      </div>
      <div class="col w-60 info col-1">
        <div class="title">{{ productQuery.data.value.name }}</div>
        <div class="price">€ {{ productQuery.data.value.price }}</div>
        <div class="desc" v-html="productQuery.data.value.description"></div>
        <AddToCardButton :product="productQuery.data.value" />
      </div>
    </div>
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

<style scoped>
.price {
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid #ccc;
}

.single_product .info>div {
  padding: 10px 0;
}

.single_product .desc>* {
  padding: 5px 0;
}

.single_product button {
  position: sticky;
  bottom: 20px;
  width: 100%;
}
</style>
