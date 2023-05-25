<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  // data() {
  //   return {
  //     productCart: [
  //       {
  //         userId: null,
  //         productId: null,
  //         productName: null,
  //         price: null,
  //         quantity: null,
  //       },
  //     ],
  //   };
  // },
  // created() {
  //   localStorage.setItem("productCart", JSON.stringify(this.productCart));

  // },
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
