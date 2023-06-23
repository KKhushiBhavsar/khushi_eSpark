<template>
  <v-card class="pa-10 ma-10">
    <v-card v-if="!userHistory">
      <VRow class="fill-height ma-0 pa-5" align="center" justify="center">
        <VProgressCircular
          indeterminate
          :size="50"
          color="grey-lighten-8"
        ></VProgressCircular>
      </VRow>
    </v-card>
    <v-card class="pa-10 ma-10" v-else>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">User Name</th>
            <th class="text-left">User Surname</th>
            <th class="text-left">Item</th>
            <th class="text-left">Price</th>
            <th class="text-left">Updated At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in userHistory" :key="data.name">
            <td>{{ data.user.name }}</td>
            <td>{{ data.user.surname }}</td>
            <td>{{ data.item }}</td>
            <td>{{ data.purchasePrice }}</td>
            <td>{{ data.updatedAt }}</td>
            <!-- 
          <td><v-btn @click="editItem(data.user.id)">Edit</v-btn></td>
          <td><v-btn @click="viewItem(data.user.id)">View</v-btn></td> -->
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-card>
</template>
<script>
import { getUserPurchaseHistory } from "@/service/fetchapi.service";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "PurchaseHistory",
  setup() {
    const router = useRouter();
    const userHistory = ref(null);
    const findHistory = async () => {
      try {
        setTimeout(async () => {
          const response = await getUserPurchaseHistory();
          console.log("response", response.data.data);
          userHistory.value = response.data.data;
        }, 1000);
      } catch (error) {
        if (error.status === 500) {
          console.log("Internal server Error");
        }
      }
    };
    findHistory();
    const editItem = (itemId) => {
      console.log(itemId);
      router.push({
        name: "EditItem",
        params: {
          itemId: itemId,
        },
      });
    };
    const viewItem = (itemId) => {
      router.push({
        name: "ViewItem",
        params: {
          itemId: itemId,
        },
      });
    };
    return { userHistory, findHistory, editItem, viewItem };
  },
};
</script>
