<template>
  <v-card class="mx-auto" max-width="300">
    <v-img
      class="align-end text-white"
      height="200"
      :src="getImageLink(product.image)"
      :lazy-src="getImageLink(product.image)"
      cover
    >
      <v-card-title></v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4"> {{ product.name }}</v-card-subtitle>

    <v-card-text>
      <div>Price : {{ getRupeeFormat(product.price) }}</div>

      <div>{{ product.description }}</div>
    </v-card-text>

    <!-- <v-card-actions> -->
    <v-btn
      @click="onAddProductToCart(product.id)"
      class="ma-5"
      color="blue-grey-darken-4"
      elevated
    >
      Add To Cart
      <v-icon color="blue-grey-darken-4"> mdi-cart </v-icon></v-btn
    >
    <!-- </v-card-actions> -->
  </v-card>
</template>

<script>
import { addProductToCart } from "@/services";
import { getRupeeFormat, getImageLink } from "@/util";

export default {
  emits: ["showAlert"],
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  setup(props, { emit }) {
    const onAddProductToCart = async (productId) => {
      try {
        const addProduct = await addProductToCart(productId);
        if (addProduct.status === 201) {
          emit("showAlert");
        }
      } catch (error) {
        console.log(error);
      }
    };
    return { getImageLink, getRupeeFormat, onAddProductToCart };
  },
};
</script>
<style scoped>
.v-card {
  border: 1px solid black;
  padding: 10px;
}
</style>
