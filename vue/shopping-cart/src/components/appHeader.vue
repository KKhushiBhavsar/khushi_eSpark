<template>
  <div class="header-parent">
    <div class="header-child">
      <div class="nav-bar">
        <div class="img-logo">
          <img src="../assets/logo.svg" alt="logo" @click="renderHomepage" />
        </div>
        <div class="search-bar">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="To Search"
          />
        </div>
        <div class="img-icon img1">
          <router-link :to="{ name: 'logInPage' }"
            ><img src="../assets/nav-icon1.svg" alt="icon1"
          /></router-link>
        </div>
        <div class="img-icon img2">
          <img src="../assets/nav-icon2.svg" alt="icon2" @click="showCart" />
        </div>
      </div>
      <div class="nav-bar-links">
        <div class="menu-range"></div>
        <div class="nav-contact-us">
          <span class="nav-contact"
            ><img src="../assets/contact-nav.png" alt="" /> 124123423</span
          >
          <span class="nav-contact"
            ><img src="../assets/wp-nav.png" alt="" /> WhatsApp</span
          >
          <span class="nav-contact"><span>Customer Service</span></span>
          <span class="nav-contact">Repair</span>
          <span class="nav-contact">Commercial</span>
          <span class="nav-contact">Our Stores</span>
          <button class="nav-contact logout" @click="userPurchaseHistory">
            Purchase History
          </button>
          <button class="nav-contact logout" @click="logOutUser">LogOut</button>
        </div>
      </div>
    </div>
  </div>
  <cartComponent v-if="isShowCart" @closePopUpBox="closePopUpBox" />
  <userHistory
    v-if="isShowHistory"
    @closeHistoryComponent="closeHistoryComponent"
  />
</template>

<script>
import cartComponent from "./cartComponent.vue";
import userHistory from "./userHistory.vue";

export default {
  name: "AppHeader",
  components: {
    cartComponent,
    userHistory,
  },
  data() {
    return {
      isShowCart: false,
      logInUser: JSON.parse(localStorage.getItem("loginUser")) || [],
      isShowHistory: false,
    };
  },
  methods: {
    renderHomepage() {
      this.$router.push({
        name: "homePage",
      });
    },
    logOutUser() {
      const isUserLoggedIn = this.logInUser;
      if ((isUserLoggedIn, length === 0)) {
        // alert("not logged in");
      } else {
        localStorage.removeItem("loginUser");
        // alert("Logout");
      }
    },
    userPurchaseHistory() {
      this.isShowHistory = true;
    },
    showCart() {
      this.isShowCart = !this.isShowCart;
    },
    closePopUpBox() {
      this.isShowCart = false;
    },
    closeHistoryComponent() {
      this.isShowHistory = false;
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background: rgb(160, 159, 159);
  margin: 0 auto;
  display: flex;
  /* border: 2px solid black; */
  padding: 10px;
}

.img-icon {
  float: left;
  width: 35px;
  border-radius: 20px;
}

.img-logo,
.search-bar {
  margin: 10px;
}

.img1 {
  margin-left: auto;
  margin-right: 10px;
}

#search {
  margin-left: 100px;
  padding: 10px;
  width: 20pc;
  border-radius: 29px;
}

.nav-bar-links {
  padding: 10px;
  background: green;
  color: aliceblue;
  display: flex;
  font-size: 20px;
}

.nav-contact-us {
  float: left;
  margin: auto;
}

.nav-contact {
  margin: 0 20px;
  cursor: pointer;
}

button {
  color: black;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
