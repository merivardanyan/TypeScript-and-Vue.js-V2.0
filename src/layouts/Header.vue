<template>
  <header>
    <nav class="nav flex">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/cart" class="nav-link cart-link">
        <div class="relative">
        <span><i class="pi pi-shopping-cart"></i> </span>
        <span class="cart-count" v-if="cartItemCount > 0">{{ cartItemCount }}</span>
      </div>
      </router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useCart } from '../composables/useCart'
import 'primeicons/primeicons.css';

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
    font-size: 10px;
    border-radius: 50%;
    position: absolute;
    top: -50%;
    left: 70%;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
}
header{
  position: fixed;
  width: 100%;
  z-index: 777;
  background-color: rgba(255, 255, 255, 0.531);
  backdrop-filter: blur(7px);
  box-shadow: 0 2px 4px rgba(97, 97, 97, 0.3);
}
.relative{
  position: relative;
}
</style>
