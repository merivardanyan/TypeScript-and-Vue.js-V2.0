<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <Header />
    <main class="container mx-auto p-4">
      <RouterView />
    </main>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import './styles/base.css';  // or wherever you saved your Tailwind CSS file

import Header from './layouts/Header.vue'
import Footer from './layouts/Footer.vue'
</script>

<style scoped></style>
