<template>
 <div class="col">
  <div class="cart-page wrapper">
    <div v-if="cartProducts.length === 0">Your cart is empty!</div>

   <div  v-else class="row flex-nowrap">
    <div class="col">
      <div v-for="product in cartProducts" :key="product.id" class="card-item flex justify-between">
      <div class="flex">
        <picture>
        <img :src="product.imageUrl" :alt="product.name"/>
      </picture>
      <div class="flex flex-col justify-between">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} $</p>
        <p>Quantity: {{ product.quantity }}</p>
      </div>
      </div>
      <div>
        <button @click="removeFromCart(product.id)" class="bg-red-600 text-white p-2 rounded">Remove</button>
      </div>
    </div>
    </div>

    <div class="col">
      <p>Total Items: {{ totalItems }}</p>
      <p>Total Price: ${{ totalPrice.toFixed(2) }}</p>
      <button @click="clearCart">Clear Cart</button>
      <button v-if="totalItems > 0" @click="placeOrder">Place Order</button>
    </div>

   </div>
    
  </div>
  <div v-if="showOverlay" class="overlay">
  <div class="message-box">
    <h2>🎉 Congratulations!</h2>
    <p>Your order has been placed successfully.</p>
  </div>
</div>
 </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCart } from '../composables/useCart';
const showOverlay = ref(false);
const router = useRouter();

const {
  cartProducts,
  totalItems,
  totalPrice,
  removeFromCart,
  clearCart
} = useCart();
function placeOrder() {
  showOverlay.value = true;
  clearCart();

  setTimeout(() => {
    showOverlay.value = false;
    router.push('/');
  }, 3000);
}

</script>

<style scoped>
.cart-page {
  padding: 20px;
}
picture{
  height: 100px;
  min-width: 100px;
  max-width: 100px;
  object-fit: contain;
}
img{
  object-fit: contain;
  max-height: 100%;
}
.card-item{
  padding: 10px;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.message-box {
  background: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
}

</style>
