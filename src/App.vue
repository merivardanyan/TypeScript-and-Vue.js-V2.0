<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- <Header /> -->
    <main class="container mx-auto p-4">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
// import Header from './components/Header.vue'
</script>

<style scoped></style>
