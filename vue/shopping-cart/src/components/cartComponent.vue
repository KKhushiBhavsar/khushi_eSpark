<template>
  <div class="parent-container">
    <div class="cart-container">
      <div class="close-btn">
        <button @click="$emit('closePopUpBox')">X</button>
      </div>
      <h1>Cart</h1>
      <!-- {{ cartData.cartDetails[0].productId }} -->
      <ul v-for="product in cartData.cartDetails" :key="product">
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
        <span><strong>Total</strong>{{ cartData.total }}</span>
      </div>
      <button class="checkout" @click="checkOutItem()">checkOut</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "cartComponent",
  data() {
    return {
      cartData: JSON.parse(localStorage.getItem("productCart")) || [],
      quantity: 1,
    };
  },
  computed: {
    cartProduct() {
      return this.$store.getters.cart;
    },
  },
  methods: {
    decreaseQty(product) {
      //   console.log(this.cartProduct);
      //   console.log(product);
      const indexProduct = this.cartProduct.cartDetails.findIndex(
        (productItem) => productItem.productId === product.productId
      );
      //   console.log(indexProduct);
      if (this.cartProduct.cartDetails[indexProduct].quantity > 1) {
        this.cartProduct.cartDetails[indexProduct].quantity--;
        this.cartProduct.total -= +product.price;
        localStorage.setItem("productCart", JSON.stringify(this.cartProduct));
      }
    },
    increaseQty(product) {
      console.log(product);
      console.log(this.cartProduct.cartDetails);
      const indexProduct = this.cartProduct.cartDetails.findIndex(
        (productItem) => productItem.productId === product.productId
      );
      //   if (this.cartProduct[indexProduct].quantity < 5) {
      this.cartProduct.cartDetails[indexProduct].quantity++;
      this.cartProduct.total += +product.price;

      localStorage.setItem("productCart", JSON.stringify(this.cartProduct));
      //   }
    },
    removeItemFromCart(product) {
      //   console.log(product);
      const productIndex = this.cartProduct.cartDetails.findIndex(
        (productItem) => productItem.productId === product.productId
      );
      // this.cartProduct.total -= product.price * quantity;

      this.cartProduct.cartDetails.splice(productIndex, 1);

      localStorage.setItem("productCart", JSON.stringify(this.cartProduct));
    },
    checkOutItem() {
      const loggedInUser = JSON.parse(localStorage.getItem("loginUser"));
      if (!loggedInUser) {
        // alert("You need to logIN first for checkOut");
      } else {
        console.log("loggedInUser", loggedInUser.orders);
        loggedInUser.orders.push(this.cartProduct.cartDetails);

        const checkOutCartData =
          JSON.parse(localStorage.getItem("checkOutDetails")) ?? [];
        console.log(checkOutCartData);
        checkOutCartData.push({
          userId: null,
          checkedOutItems: this.cartProduct,
          checkOutTime: new Date(),
        });
        localStorage.setItem(
          "checkOutDetails",
          JSON.stringify(checkOutCartData)
        );
        this.cartData.total = 0;
        this.cartData.cartDetails = [];
        localStorage.setItem("loginUser", JSON.stringify(loggedInUser));
        localStorage.setItem("productCart", JSON.stringify(this.cartData));
      }
    },
  },
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
