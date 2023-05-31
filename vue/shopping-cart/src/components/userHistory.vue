<template>
  <div class="parent-container">
    <div class="cart-container">
      <div class="close-btn">
        <button @click="$emit('closeHistoryComponent')">X</button>
      </div>
      <ul v-for="checkoutItems in userOrderHistory" :key="checkoutItems">
        <ul v-for="checkoutProducts in userProducts" :key="checkoutProducts">
          <div class="initial-container">
            <ul v-for="subCheckoutItems in subCheckout" :key="subCheckoutItems">
              <div class="sub-container">
                <li><span>ProductID </span>{{ subCheckoutItems.productId }}</li>
                <li>
                  <img :src="subCheckoutItems.productName" />
                </li>
                <li><span>Price </span>{{ subCheckoutItems.price }}</li>
                <li><span>Quantity </span>{{ subCheckoutItems.quantity }}</li>
              </div>
            </ul>
          </div>
        </ul>
      </ul>
      <div class="total"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userHistory",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("loginUser")) || [],
      userOrderHistory: [],
      userProducts: [],
      subCheckout: [],
    };
  },
  created() {
    if (this.user.length !== 0) {
      const checkoutData = JSON.parse(localStorage.getItem("productCart"));
      if (checkoutData !== null) {
        this.userOrderHistory.push(this.user.orders);
        this.userOrderHistory.forEach((checkOutItems) => {
          checkOutItems.forEach((products) => {
            this.userProducts.push(products);
            products.forEach((subCheckout) => {
              this.subCheckout.push(subCheckout);
              console.log("subCheckOut", subCheckout);
            });
          });
        });
      }
    }
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
  background-color: whitesmoke;
  width: 750px;
  height: 500px;
  position: fixed;
  /* box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px, rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px, rgb(0 0 0 / 9%) 0px -3px 5px; */
  top: 27px;
  left: 230px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
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
  width: 100px;
}

ul {
  list-style: none;
}
.initial-container {
  border: 2px solid black;
  margin: 10px;
  padding: 10px;
  text-align: center;
  background-color: lightgray;
}
.sub-container {
  border: 1px solid black;
  border-radius: 5px;
  background-color: darkgrey;
  opacity: 0.9;
  margin: 10xp;
  padding: 10px;
  margin: 10px;
}
</style>
