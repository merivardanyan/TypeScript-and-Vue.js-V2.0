<!-- CartItem.vue -->
<template>
  <div class="cart_item">
    
    <div class="flex">
      <picture>
        <img :src="product.imageUrl" :alt="product.name" />
      </picture>
      <div class="flex flex-col justify-between ml-2 w-100">
        <div class="title">{{ product.name }}</div>
        <div class="flex justify-between">
          <div>{{ product.price }} €</div>

            <div class="flex align-center">
              <div class="quantity flex">
                <span @click="$emit('changeQuantity', product, -1)" class="pi pi-minus"></span>
                <div>{{ product.quantity }}</div>
                <span @click="$emit('changeQuantity', product, 1)" class="pi pi-plus"></span>
              </div>
              <span @click="$emit('removeFromCart', product.id)" class="pi pi-trash remove"></span>

            </div>
          </div>

        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '../types/product'; // adjust the path accordingly

defineProps<{
  product: Product
}>();
defineEmits(['changeQuantity', 'removeFromCart']);
</script>
