<template>
    <header class="header">
      <div class="logo">
        <router-link to="/">
          <!-- <img src="@/assets/logo.png" alt="Logo" /> -->
        </router-link>
      </div>
      <nav class="navigation">
        <router-link to="/categories" class="nav-link">Categories</router-link>
        <router-link to="/products" class="nav-link">Products</router-link>
      </nav>
      <div class="cart">
        <router-link to="/cart">
          <!-- <img src="@/assets/cart-icon.png" alt="Cart" /> -->
          <span class="cart-count">{{ cartItemCount }}</span>
        </router-link>
      </div>
    </header>
  </template>
  
  <script lang="ts">
//   import { ref, computed } from 'vue'
//   import { useCart } from '@/composables/useCart'
  
//   export default {
//     name: 'Header',
//     setup() {
//       const { cartItems } = useCart()
  
//       const cartItemCount = computed(() => cartItems.value.length)
  
//       return {
//         cartItemCount
//       }
//     }
//   }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .logo img {
    height: 40px;
  }
  
  .navigation {
    display: flex;
    gap: 2rem;
  }
  
  .nav-link {
    text-decoration: none;
    color: #333;
    font-size: 1.1rem;
  }
  
  .nav-link:hover {
    color: #007bff;
  }
  
  .cart {
    position: relative;
  }
  
  .cart img {
    height: 30px;
  }
  
  .cart-count {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: red;
    color: #fff;
    font-size: 0.8rem;
    padding: 0.2rem 0.4rem;
    border-radius: 50%;
  }
  </style>
  