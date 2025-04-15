<template>
  <header>
    <nav class="nav flex">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/cart" class="nav-link cart-link">
        <span>Cart </span>
        <span class="cart-count" v-if="cartItemCount > 0">{{ cartItemCount }}</span>
      </router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useCart } from '../composables/useCart'

const { totalItems: cartItemCount } = useCart()
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-link {
  text-decoration: none;
  color: #444;
  margin-right: 1rem;
}

.nav-link:hover {
  color: #000;
}

.cart-link {
  position: relative;
}

.cart-count {
  background-color: rgba(255, 0, 0, 0.57);
  color: white;
  font-size: 12px;
  border-radius: 50%;
  padding: 2px 6px;
}
header{
  position: fixed;
  width: 100%;
  z-index: 777;
  background-color: white;
  backdrop-filter: blur(7px);
}
</style>
