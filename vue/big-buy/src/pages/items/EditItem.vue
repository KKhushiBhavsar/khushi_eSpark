<template>
  <h1>EditItems</h1>
  <VContainer class="pa-10">
    <div v-for="item in editItem" :key="item.id">
      <VCard title="Add Item" class="pa-10 ma-10">
        <VForm>
          <VTextField v-model="item.name" label="Item Name"></VTextField>
          <VTextField
            v-model="item.details.seller"
            label="Seller Name"
          ></VTextField>
          <VTextField
            v-model="item.details.description"
            label="Desctiption"
          ></VTextField>
          <VTextField v-model="item.details.price" label="Price"></VTextField>
          <VTextField
            v-model="item.details.minPrice"
            label="Min Price"
          ></VTextField>
          <VTextField
            v-model="item.details.maxPrice"
            label="Max Price"
          ></VTextField>

          <VBtn @click="editData()">Edit Item</VBtn>
        </VForm>
      </VCard>
    </div>
  </VContainer>
</template>
<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getEditItems } from "@/helper/items.helper";
import { patchEditItem } from "@/service/fetchapi.service";
export default {
  name: "EditItem",
  setup() {
    const route = useRoute();
    const editItem = ref(null);
    const items = async () => {
      try {
        editItem.value = await getEditItems(route.params.itemId);
      } catch (error) {
        if (error.status === 500) {
          console.log("Internal Server Error");
        }
      }
    };
    const editData = async () => {
      try {
        const editItemsResponse = await patchEditItem(
          {
            name: "iphone",
            details: {
              description: "iphone asdf new",
              price: 20000,
              abc: "dfsd",
              minPrice: 15000,
              maxPrice: 25000,
            },
          },
          route.params.itemId
        );
        console.log(editItemsResponse);
      } catch (error) {
        if (error.status === 500) {
          console.log("Internal Server error");
        }
      }
    };
    items();
    return { editItem, items, editData };
  },
};
</script>
