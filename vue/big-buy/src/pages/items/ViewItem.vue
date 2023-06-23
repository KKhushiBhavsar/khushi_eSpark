<template>
  <h1>ViewItem</h1>
  <v-card class="pa-10 ma-10">
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Seller</th>
          <th class="text-left">description</th>
          <th class="text-left">Price</th>
          <th class="text-left">Min Price</th>
          <th class="text-left">Max Price</th>
          <th class="text-left">-</th>
          <th class="text-left">-</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in viewData" :key="data.name">
          <td>{{ data.name }}</td>
          <td>{{ data.details.seller }}</td>
          <td>{{ data.details.description }}</td>
          <td>
            <v-chip>{{ data.details.price }}</v-chip>
          </td>
          <td>{{ data.details.minPrice }}</td>
          <td>{{ data.details.maxPrice }}</td>
          <td><v-btn @click="editItem(data.id)">Edit</v-btn></td>
          <td><v-btn @click="viewItem(data.id)">View</v-btn></td>
          <td><v-btn @click="purchase(data)">Purchase</v-btn></td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
<script>
import { getEditItems } from "@/helper/items.helper";
import { useRoute } from "vue-router";
import { ref } from "vue";
export default {
  name: "ViewItem",
  setup() {
    const route = useRoute();
    const viewData = ref(null);
    const viewDataItem = async () => {
      try {
        viewData.value = await getEditItems(route.params.itemId);
      } catch (error) {
        if (error.status === 500) {
          console.log("Internal Server Error");
        }
      }
    };
    viewDataItem();
    return { viewData, viewDataItem };
  },
};
</script>
