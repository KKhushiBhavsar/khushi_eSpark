<template>
  <div>
    <VCard class="pa-20 ma-20">
      <v-sheet class="pa-12" color="grey-lighten-3">
        <div></div>
        <VCard
          class="pa-5 ma-5"
          width="400"
          title="Transaction Date"
          :text="viewTransactionData.transactionDate"
        ></VCard>
        <VCard
          class="pa-5 ma-5"
          width="400"
          title="Month Year"
          :text="viewTransactionData.monthYear"
        ></VCard>
        <VCard
          class="pa-5 ma-5"
          width="400"
          title="Transaction Type"
          :text="viewTransactionData.transactionType"
        ></VCard>
        <VCard
          class="pa-5 ma-5"
          width="400"
          title="From Account"
          :text="viewTransactionData.fromAccount"
        ></VCard>
        <VCard
          class="pa-5 ma-5"
          width="400"
          title="To Account"
          :text="viewTransactionData.toAccount"
        ></VCard>
        <VCard class="pa-5 mx-5" width="400" title="Receipt">
          <VImg height="200" :src="viewTransactionData.receipt"></VImg>
        </VCard>
        <VCard
          class="pa-5 ma-5"
          width="400"
          title="Notes"
          :text="viewTransactionData.notes"
        ></VCard>
        <VCard
          class="pa-5 ma-5"
          width="400"
          title="Amount"
          :text="currency(viewTransactionData.amount)"
        ></VCard>
      </v-sheet>
    </VCard>
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
