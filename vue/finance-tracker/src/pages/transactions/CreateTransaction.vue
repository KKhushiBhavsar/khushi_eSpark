<template>
  <VCard class="pa-10 ma-7" title="Add Transactions">
    <VForm ref="form">
      <VTextField
        type="date"
        v-model="transaction.transactionDate"
        label="Transaction Date"
        :rules="rules.date"
      ></VTextField>
      <VSelect
        v-model="transaction.monthYear"
        :items="monthVal"
        label="Select"
        :rules="rules.select"
      ></VSelect>
      <VSelect
        v-model="transaction.transactionType"
        :items="transactionTypeOption"
        label="Transaction Type"
        :rules="rules.select"
      ></VSelect>

      <VSelect
        v-model="transaction.fromAccount"
        :items="accountTypeOption"
        label="From Account"
        :rules="accountTypeRule.account"
        :customRules="rules.transactionType"
      ></VSelect>

      <VSelect
        v-model="transaction.toAccount"
        :items="accountTypeOption"
        label="To Account"
        :rules="accountTypeRule.account"
        :customRules="rules.transactionType"
      ></VSelect>

      <VTextField
        type="number"
        v-model="transaction.amount"
        label="Amount"
        ref="currency"
        :rules="rules.currency"
      >
      </VTextField>

      <VFileInput
        show-size
        counter
        label="Receipt"
        accept="['.png','.jpg','.jpeg']"
        @change="getImage()"
        :rules="rules.files"
        ref="file"
      ></VFileInput>
      <!-- <input
        type="file"
        accept="image/*;capture=camera"
        ref="file"
        @change="getImage()"
      /> -->

      <VTextarea
        rows="1"
        bg-color="grey-lighten-2"
        color="cyan"
        label="Notes"
        v-model="transaction.notes"
        :rules="rules.notes"
      ></VTextarea>
      <VBtn class="me-4" @click="addToTransaction()" color="primary">
        submit
        <template v-slot:loader>
          <v-progress-linear indeterminate></v-progress-linear>
        </template>
      </VBtn>

      <VBtn @click="handleReset"> clear </VBtn>
    </VForm>
  </VCard>
</template>
<script>
import { addTransaction } from "@/services/transactions/transactions.services";

import { transactionValidation } from "@/helper/transactionValidation";
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
      rules: transactionValidation,
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
  computed: {
    accountTypeRule() {
      const valid = this.transaction.fromAccount === this.transaction.toAccount;
      return {
        account: [() => !valid || "Account can not be same"],
      };
    },
  },
  methods: {
    async addToTransaction() {
      const validate = await this.$refs.form.validate();
      if (validate.valid) {
        addTransaction(this.transaction);
        this.$router.push({
          name: "AllTransactions",
        });
      }
    },
    getImage() {
      const img = this.$refs.file;
      const files = img.files[0];
      var reader = new FileReader();

      reader.readAsDataURL(files);
      reader.onload = (base64) => {
        // localStorage["receipt"] = base64.currentTarget.result;
        // console.log(base64.currentTarget.result);

        this.transaction.receipt = base64.currentTarget.result;
      };
    },
  },
};
</script>
