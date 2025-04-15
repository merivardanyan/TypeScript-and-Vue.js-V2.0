import { createRouter, createWebHistory } from 'vue-router';
import ProductsPage from '.././pages/ProductsPage.vue';
import ProductDetailsPage from '.././pages/ProductDetailsPage.vue';
import CartPage from '.././pages/CartPage.vue';
import CategoryPage from '.././pages/CategoryPage.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductsPage,
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductDetailsPage,
    props: true,
  },
  {
    path: '/categories/:id',
    name: 'category',
    component: CategoryPage,
    props: true,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
