<template>
  <div class="parent-container">
    <div class="cart-container">
      <div class="close-btn">
        <button @click="$emit('closePopUpBox')">X</button>
      </div>
      <h1>Cart</h1>
      <ul v-for="product in cartProduct.cartDetails" :key="product.productId">
        <li>
          <div class="img-product">
            <img :src="product.productName" alt="" />
          </div>
          <span><strong>ProductID</strong>{{ product.productId }}</span>
          <div class="product-test">
            <button @click="decreaseQty(product)">-</button
            >{{ product.quantity }}
            <button @click="increaseQty(product)">+</button>
            <span>Price {{ product.price }} </span>
            <button class="rmv" @click="removeItemFromCart(product)">
              Remove
            </button>
          </div>
        </li>
      </ul>
      <div class="total">
        <span><strong>Total </strong>{{ cartProduct.total }}</span>
      </div>
      <button class="checkout" @click="checkOutItem()">checkOut</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "cartComponent",
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    ...mapGetters({ cart: "cart" }),
    cartProduct() {
      return this.cart;
    },
  },
  methods: {
    decreaseQty(product) {
      this.$store.dispatch("decreaseQuantity", product);
    },
    increaseQty(product) {
      this.$store.dispatch("increaseQuantity", product);
    },
    removeItemFromCart(product) {
      this.$store.dispatch("removeProduct", product);
    },
    checkOutItem() {
      // alert("checkout");
      const loggedInUser = JSON.parse(localStorage.getItem("loginUser"));
      if (!loggedInUser) {
        // alert("You need to logIN first for checkOut");
      } else {
        loggedInUser.orders.push(this.cartProduct.cartDetails);
        const checkOutCartData =
          JSON.parse(localStorage.getItem("checkOutDetails")) ?? [];

        checkOutCartData.push({
          userId: null,
          checkedOutItems: [this.cartProduct],
          checkOutTime: new Date(),
        });
        localStorage.setItem(
          "checkOutDetails",
          JSON.stringify(checkOutCartData)
        );
        this.cartProduct.total = 0;
        this.cartProduct.cartDetails = [];
        localStorage.setItem("loginUser", JSON.stringify(loggedInUser));
        localStorage.setItem("productCart", JSON.stringify(this.cartProduct));
      }
    },
  },
  // created() {
  //   if (this.cartProduct.length === 0) {
  //     alert("empty cart");
  //   }
  // },
};
</script>

<style scoped>
.parent-container {
  border: 1px solid black;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
}

.cart-container {
  overflow: auto;
  border-radius: 10px;
  padding: 20px 30px;
  background-color: lightslategray;
  width: 400px;
  height: 500px;
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  top: 34px;
  left: 772px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  z-index: 100;
  color: black;
  font-weight: bolder;
}

button {
  padding: 13px;
  width: 44px;
  margin: 10px;
  color: black;
  font-weight: bolder;
  background-color: lightgrey;
  border: 1px solid black;
  border-radius: 11px;
}

.rmv {
  border: 1px solid black;
  width: 90px;
  padding: 10px;
  margin: 10px;
  background: indianred;
}

.checkout {
  width: 105px;
  padding: 10px;
  margin: 10px;
  background-color: darkseagreen;
}

.close-btn {
  text-align: right;
}

.close-btn button {
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
  font-weight: 600;
}

img {
  width: 80px;
}

ul {
  list-style: none;
}
</style>
