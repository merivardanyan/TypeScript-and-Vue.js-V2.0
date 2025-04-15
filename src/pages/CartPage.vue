<template>
 <div class="col">
  <div class="cart-page wrapper">
    <h1 class="text-2xl font-bold mb-4">Your Cart</h1>

    <div v-if="cartProducts.length === 0" class="text-gray-500">Your cart is empty!</div>

    <div v-for="product in cartProducts" :key="product.id" class="mb-4 p-4 border rounded">
      <img :src="product.imageUrl" :alt="product.name" class="w-32 h-32 object-cover" />
      <h3 class="text-xl">{{ product.name }}</h3>
      <p class="text-gray-600">{{ product.price }} $</p>
      <p class="text-sm text-gray-500">Quantity: {{ product.quantity }}</p>
      <div>
        <button @click="removeFromCart(product.id)" class="bg-red-600 text-white p-2 rounded">Remove</button>
      </div>
    </div>

    <div class="mt-6">
      <p class="font-semibold">Total Items: {{ totalItems }}</p>
      <p class="font-semibold">Total Price: ${{ totalPrice.toFixed(2) }}</p>
    </div>

    <div class="mt-4">
      <button @click="clearCart" class="bg-gray-600 text-white p-2 rounded">Clear Cart</button>
    </div>
  </div>
 </div>
</template>

<script setup lang="ts">
import { useCart } from '../composables/useCart';

const {
  cartProducts,
  totalItems,
  totalPrice,
  removeFromCart,
  clearCart
} = useCart();
</script>

<style scoped>
.cart-page {
  padding: 20px;
}
</style>
