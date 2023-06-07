<template>
  <div>
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
        <td>{{ viewTransactionData.receipt }}</td>
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
  border: 1px solid black;
}
td {
  border: 1px solid black;
  padding: 10px;
}
</style>
