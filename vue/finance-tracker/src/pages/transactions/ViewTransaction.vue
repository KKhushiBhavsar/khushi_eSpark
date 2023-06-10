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
          <td>{{ currency(viewTransactionData.amount) }}</td>
        </tr>
      </table>
    </v-sheet>
  </div>
</template>
<script>
import { getViewTransactionDetails } from "@/services/transactions/transactions.services";
export default {
  name: "ViewTransaction",
  data() {
    return {
      dialog: false,
      transactionId: this.$route.params.transactionId,
      viewTransactionData: null,
    };
  },
  methods: {
    currency(amount) {
      // const amount = this.$refs.currency.value;
      console.log(amount);
      return Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(amount);
    },
  },
  created() {
    const viewData = getViewTransactionDetails(this.transactionId);
    this.viewTransactionData = viewData;
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
