<template>
  <VContainer class="pa-10">
    <VCard title="Add Item" class="pa-10 ma-10">
      <VForm ref="form">
        <VTextField
          v-model="item.name"
          label="Item Name"
          :rules="userRules.itemName"
        ></VTextField>
        <VTextField v-model="item.sellerName" label="Seller Name"></VTextField>
        <VTextField
          v-model="item.details.description"
          label="Desctiption"
          :rules="userRules.description"
        ></VTextField>
        <VTextField
          v-model="item.details.price"
          type="number"
          label="Price"
          :rules="userRules.price"
        ></VTextField>
        <VTextField
          type="number"
          v-model="item.details.minPrice"
          label="Min Price"
          :rules="userRules.price"
        ></VTextField>
        <VTextField
          v-model="item.details.maxPrice"
          type="number"
          :rules="userRules.price"
          label="Max Price"
        ></VTextField>
        <VBtn @click="addItem($event)" type="submit">Add Item</VBtn>
      </VForm>
    </VCard>
  </VContainer>
</template>
<script>
import { ref } from "vue";
import { addItemInDB } from "@/service/fetchapi.service";
import { addItemValidation } from "@/helper/items.helper";
import { useRouter } from "vue-router";
export default {
  name: "AddItems",
  setup() {
    const router = useRouter();
    const item = ref({
      name: null,
      sellerName: null,
      details: {
        description: null,
        price: null,
        minPrice: null,
        maxPrice: null,
      },
    });
    const userRules = addItemValidation;
    const addItem = async (event) => {
      event.preventDefault();
      try {
        const response = await addItemInDB({
          name: item.value.name,
          seller: item.value.sellerName,
          details: {
            description: item.value.details.description,
            price: parseInt(item.value.details.price),
            abc: "dfsd",
            minPrice: parseInt(item.value.details.minPrice),
            maxPrice: parseInt(item.value.details.maxPrice),
          },
        });
        console.log("response", response);
        router.push({
          name: "AllItems",
        });
      } catch (error) {
        if (error.status === 500) {
          console.log("internal server error");
        }
      }
    };

    return { item, addItem, userRules };
  },
};
</script>
