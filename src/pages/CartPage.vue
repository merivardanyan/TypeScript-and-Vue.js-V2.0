<template>
  <div class="col">
    <div class="cart-page wrapper">
      <div v-if="orderSuccess">
        <h2 class="cart_status"><span class="pi pi-check-circle" style="color: green;"></span> Order Successful!</h2>
        <button class="sucess_home"> <router-link to="/">
            Go to Homepage
          </router-link>
        </button>
      </div>

      <div class="cart_status" v-else-if="cartProducts.length === 0">Your cart is empty!</div>

      <div v-else class="row">
        <div class="col col-1 cart_items w-40">
            <CartItem v-for="product in cartProducts" :key="product.id" :product="product"
              @changeQuantity="changeQuantity" @removeFromCart="removeFromCart" />
        </div>

        <div class="col col-1 total w-60">
          <div class="wrapper ">
            <div class="summary">Order Summary</div>
            <div> <span class="gray_text">Total Items: </span><span class="bold_600">{{ totalItems }}</span></div>
            <div> <span class="gray_text"> Total Price: </span><span class="bold_600">€ {{ totalPrice.toFixed(2) }}</span></div>
          <div class="flex"><button @click="clearCart">Clear Cart</button>
            <button v-if="totalItems > 0" @click="placeOrder">Place Order</button></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCart } from '../composables/useCart';
import CartItem from '../components/CartItem.vue';
const {
  cartProducts,
  totalItems,
  totalPrice,
  removeFromCart,
  clearCart,
  changeQuantity
} = useCart();
const orderSuccess = ref(false);

function placeOrder() {
  orderSuccess.value = true;
  clearCart();
}

</script>

<style>
.cart_item img{
  width: 100px;
  height: 100px;
  object-fit: contain;
  object-position: left top;
}

.cart_item{
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 1px 3px 3px #cccccc5e;
}

.quantity span{
  display: inline-block;
    min-width: 20px;
    padding: 7px 10px;
    font-size: 10px;
    margin-inline: 5px;
    border-radius: 5px;
    color: #545454;
    cursor: pointer;
    background: #f1f1f1;
}

.remove{
  font-size: 22px;
  color: rgba(255, 0, 0, 0.656);
  padding-left: 10px;
  cursor: pointer;
}
.cart_items .title{
  font-size: 14px;
}
.total .wrapper{
  
  background: white;
    border: 1px solid #cccccc5e;
    padding: 20px;
    position: sticky;
    top: 90px;
}
.gray_text{
  color: gray;
}
.bold_600{
  font-weight: 600;
}

.total .wrapper>div{
  padding-bottom: 10px;
}
.total .summary{
  font-weight: 600;
  font-size: 18px;
  padding-bottom: 20px;
}
.cart_status{
  padding: 20px;
  text-align: center;
}
.sucess_home{
  width: auto;
  margin: 0 auto;
}
</style>
