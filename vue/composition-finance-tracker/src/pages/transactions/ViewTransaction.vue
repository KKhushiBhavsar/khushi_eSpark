<template>
  <div>
    <v-sheet class="pa-12" color="grey-lighten-3">
      <div></div>
      <table>
        <tr>
          <td>Transaction Date</td>
          <td>{{ viewTransactionData.transactionDate }}</td>
        </tr>
        <tr>
          <td>Month Year</td>
          <td>{{ viewTransactionData.monthYear }}</td>
        </tr>
        <tr>
          <td>Transaction Type</td>
          <td>{{ viewTransactionData.transactionType }}</td>
        </tr>
        <tr>
          <td>From Account</td>
          <td>{{ viewTransactionData.fromAccount }}</td>
        </tr>
        <tr>
          <td>To Account</td>
          <td>{{ viewTransactionData.toAccount }}</td>
        </tr>
        <tr>
          <td>Receipt</td>

          <td><img :src="viewTransactionData.receipt" alt="img" /></td>
        </tr>
        <tr>
          <td>Notes</td>
          <td>{{ viewTransactionData.notes }}</td>
        </tr>
        <tr>
          <td>Amount</td>
          <td>{{ viewTransactionData.amount }}</td>
        </tr>
      </table>
    </v-sheet>
  </div>
</template>
<script>
import { getViewTransactionDetails } from "@/services/transactions/transactions.services";
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "ViewTransaction",
  setup() {
    const route = useRoute();
    const dialog = ref(false);
    const transactionId = route.params.transactionId;

    const viewTransactionData = getViewTransactionDetails(transactionId);
    console.log(viewTransactionData);
    return { route, dialog, transactionId, viewTransactionData };
  },
};
</script>
<style scoped>
table {
  margin: 10px;
  padding: 10px;
  /* border: 1px solid black; */
}
td {
  /* border: 1px solid black; */
  padding: 10px;
}
img {
  width: 400px;
  height: 400px;
}
</style>
