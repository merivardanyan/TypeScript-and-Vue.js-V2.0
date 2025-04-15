// composables/useCart.ts
import { ref, computed, watch } from 'vue';
import { getProductById } from '../api/ecwidApi';
import type { Product } from '../types/product';

const cart = ref<{ id: number; quantity: number }[]>(
  JSON.parse(localStorage.getItem('cart') || '[]')
);
const cartProducts = ref<Product[]>([]);

const fetchCartProducts = async () => {
  const products: Product[] = [];
  for (const item of cart.value) {
    const product = await getProductById(item.id);
    if (product) {
      (product as any).quantity = item.quantity;
      products.push(product);
    }
  }
  cartProducts.value = products;
};

// Fetch on init and whenever cart changes
watch(cart, async () => {
  localStorage.setItem('cart', JSON.stringify(cart.value));
  await fetchCartProducts();
}, { deep: true, immediate: true });

const totalItems = computed(() =>
  cart.value.reduce((sum, item) => sum + item.quantity, 0)
);

const totalPrice = computed(() =>
  cartProducts.value.reduce((sum, product: any) => sum + product.price * (product.quantity || 1), 0)
);

const addToCart = (product: Product) => {
  const existing = cart.value.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.value.push({ id: product.id, quantity: 1 });
  }
};

const removeFromCart = (id: number) => {
  cart.value = cart.value.filter(item => item.id !== id);
};

const clearCart = () => {
  cart.value = [];
};

export function useCart() {
  return {
    cart,
    cartProducts,
    addToCart,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice
  };
}
