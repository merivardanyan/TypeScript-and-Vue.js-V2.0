<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Categories</h1>

    <div v-if="categoriesQuery.isLoading" class="text-gray-500">Loading categories...</div>
    <div v-if="categoriesQuery.isError" class="text-red-500">Error loading categories</div>

    <!-- Ensure that categoriesQuery.data is defined before rendering -->
    <div v-if="categoriesQuery.data && categoriesQuery.data.length > 0">
      <div 
        v-for="category in categoriesQuery.data" 
        :key="category.id" 
        @click="selectCategory(category.id)"
        class="cursor-pointer mb-4 p-2 bg-gray-200 rounded"
      >
        <h2 class="text-xl">{{ category.name }}</h2>
        <img :src="category.imageUrl" alt="category.name" class="w-32 h-32 object-cover mt-2" />
      </div>
    </div>

    <div v-if="selectedCategory.value">
      <h2 class="text-2xl font-bold mb-4">Products in "{{ selectedCategoryName }}"</h2>

      <div v-if="productsQuery.isLoading" class="text-gray-500">Loading products...</div>
      <div v-if="productsQuery.error" class="text-red-500">Error loading products</div>

      <div v-if="productsQuery.data && productsQuery.data.length > 0">
        <div v-for="product in productsQuery.data" :key="product.id" class="mb-4 p-4 border rounded">
          <img :src="product.imageUrl" alt="product.name" class="w-32 h-32 object-cover" />
          <h3 class="text-xl">{{ product.name }}</h3>
          <p class="text-gray-600">{{ product.price }} $</p>
          <button @click="addToCart(product)" class="bg-blue-500 text-white p-2 mt-2 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'; // Import ref and computed
import { useCategories } from '../composables/useCategories';
import { useProducts } from '../composables/useProducts';
import { useCart } from '../composables/useCart';

const { addToCart } = useCart();

// Create a reactive reference for selected category
const selectedCategory = ref(null);

const categoriesQuery = useCategories();
console.lof(categoriesQuery)
// Watch for changes in selected category and refetch products
const productsQuery = computed(() => {
  // If there's no selected category, return an empty query object
  if (!selectedCategory.value) return { data: [], isLoading: false, error: false };
  return useProducts(selectedCategory.value); // Pass the selected category ID dynamically
});
console.log(productsQuery)

const selectCategory = (categoryId) => {
  selectedCategory.value = categoryId; // Set selected category to reactive reference
};

const selectedCategoryName = computed(() => {
  const category = categoriesQuery.data?.find(cat => cat.id === selectedCategory.value);
  return category ? category.name : '';
});
</script>

<style scoped>
/* You can use TailwindCSS or your custom styles here */
</style>
