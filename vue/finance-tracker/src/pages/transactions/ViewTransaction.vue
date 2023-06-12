<template>
  <div>
    <VCard class="pa-20 ma-20">
      <v-sheet class="pa-12" color="grey-lighten-3">
        <VCard
          class="pa-5 ma-5"
          width="700"
          color="grey-lighten-3"
          title="Transaction Date"
          :text="viewTransactionData.transactionDate"
        ></VCard>
        <VCard
          class="pa-5 ma-5"
          width="700"
          color="grey-lighten-3"
          title="Month Year"
          :text="viewTransactionData.monthYear"
        ></VCard>
        <VCard
          class="pa-5 ma-5"
          width="700"
          color="grey-lighten-3"
          title="Transaction Type"
          :text="viewTransactionData.transactionType"
        ></VCard>
        <VCard
          class="pa-5 ma-5"
          width="700"
          color="grey-lighten-3"
          title="From Account"
          :text="viewTransactionData.fromAccount"
        ></VCard>
        <VCard
          class="pa-5 ma-5"
          width="700"
          color="grey-lighten-3"
          title="To Account"
          :text="viewTransactionData.toAccount"
        ></VCard>
        <VCard
          class="pa-5 mx-5"
          width="700"
          color="grey-lighten-3"
          title="Receipt"
        >
          <VImg height="200" :src="viewTransactionData.receipt"></VImg>
        </VCard>
        <VCard
          class="pa-5 ma-5"
          width="700"
          color="grey-lighten-3"
          title="Notes"
          :text="viewTransactionData.notes"
        ></VCard>
        <VCard
          class="pa-5 ma-5"
          width="700"
          color="grey-lighten-3"
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
      transactionId: this.$route.params.transactionId,
      viewTransactionData: null,
    };
  },
  methods: {
    currency(amount) {
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
