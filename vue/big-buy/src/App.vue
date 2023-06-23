<template>
  <!-- <LoginPage /> -->
  <!-- <RegisterPage /> -->
  <HomePage />
</template>

<script>
import RegisterPageVue from "./pages/users/RegisterPage.vue";
// import { defineComponent } from 'vue';
// import LoginPage from "@/routes/users/LoginPage";
// import RegisterPage from "@/routes/users/RegisterPage.vue";
import HomePage from "@/components/common/HomePage.vue";
export default {
  name: "App",
  components: {
    // LoginPage,
    // RegisterPage,
    HomePage,
  },
};
</script>
