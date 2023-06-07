<template>
  <VCard class="pa-10 ma-7" title="Add Transactions">
    <form @submit.prevent="submit">
      <VTextField
        type="date"
        v-model="transaction.transactionDate"
        label="Transaction Date"
      ></VTextField>
      <VSelect
        v-model="transaction.monthYear"
        :items="monthVal"
        label="Select"
      ></VSelect>
      <VSelect
        v-model="transaction.transactionType"
        :items="transactionTypeOption"
        label="Transaction Type"
      ></VSelect>

      <VSelect
        v-model="transaction.fromAccount"
        :items="accountTypeOption"
        label="From Account"
      ></VSelect>

      <VSelect
        v-model="transaction.toAccount"
        :items="accountTypeOption"
        label="To Account"
      ></VSelect>

      <VTextField v-model="transaction.amount" label="Amount"></VTextField>

      <VFileInput
        show-size
        counter
        label="Receipt"
        accept=".jpg .jpeg .png"
      ></VFileInput>
      <VTextarea
        rows="1"
        bg-color="grey-lighten-2"
        color="cyan"
        label="Notes"
        v-model="transaction.notes"
        :rules="rules"
      ></VTextarea>
      <VBtn
        class="me-4"
        type="submit"
        @click="
          loading = !loading;
          addToTransaction();
        "
        color="primary"
        :loading="loading"
      >
        submit
        <template v-slot:loader>
          <v-progress-linear indeterminate></v-progress-linear>
        </template>
      </VBtn>

      <VBtn @click="handleReset"> clear </VBtn>
    </form>
  </VCard>
</template>
<script>
import { addTransaction } from "@/services/transactions/transactions.services";
export default {
  name: "CreateTransaction",
  data() {
    return {
      loading: false,
      transaction: {
        id: Date.now().toString(36),
        transactionDate: null,
        monthYear: null,
        transactionType: null,
        fromAccount: null,
        toAccount: null,
        amount: null,
        receipt: null,
        notes: null,
      },
      rules: [(value) => (value || "").length <= 20 || "Max 20 characters"],
      monthVal: [
        "Jan 2023",
        "Feb 2023",
        "Mar 2023",
        "Apr 2023",
        "May 2023",
        "Jun 2023",
        "Jul 2023",
        "Aug 2023",
        "Sep 2023",
        "Oct 2023",
        "Nov 2023",
        "Dec 2023",
      ],
      transactionTypeOption: ["Home Expence", "Personal Expense", "Income"],
      accountTypeOption: [
        "Personal Account",
        "Real Living",
        "My Dream Home",
        "Full Cirlce",
        "Core Realtors",
        "Big Block",
      ],
    };
  },
  watch: {
    loading(val) {
      if (!val) return;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  methods: {
    addToTransaction() {
      addTransaction(this.transaction);
      this.$router.push({
        name: "AllTransactions",
      });
    },
  },
};
</script>
