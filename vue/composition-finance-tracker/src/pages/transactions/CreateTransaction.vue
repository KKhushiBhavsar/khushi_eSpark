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
        :selectRule="selectRule"
      ></VSelect>
      <VSelect
        v-model="transaction.transactionType"
        :items="transactionTypeOption"
        label="Transaction Type"
        :selectRule="selectRule"
      ></VSelect>

      <VSelect
        v-model="transaction.fromAccount"
        :items="accountTypeOption"
        label="From Account"
        :selectRule="selectRule"
      ></VSelect>

      <VSelect
        v-model="transaction.toAccount"
        :items="accountTypeOption"
        label="To Account"
        :selectRule="selectRule"
      ></VSelect>

      <VTextField
        type="number"
        v-model="transaction.amount"
        label="Amount"
        :selectRule="selectRule"
        @change="convertCurrenct()"
        ref="currency"
      >
      </VTextField>

      <VFileInput
        show-size
        counter
        label="Receipt"
        accept=".png"
        @change="getImage()"
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
import { required } from "@vuelidate/validators";
import { useRouter } from "vue-router";
import { transactions } from "@/store/transactions";
import { compile, ref, watch } from "vue";
export default {
  name: "CreateTransaction",
  setup() {
    const route = useRouter();
    const loading = ref(false);
    const currency = ref(null);
    const file = ref(null);
    const transaction = ref({
      id: Date.now().toString(36),
      transactionDate: null,
      monthYear: null,
      transactionType: null,
      fromAccount: null,
      toAccount: null,
      amount: null,
      receipt: null,
      notes: null,
    });
    const rules = ref([
      (value) => (value || "").length <= 250 || "Max 250 characters",
    ]);
    const selectRule = required;
    const monthVal = ref([
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
    ]);
    const transactionTypeOption = ref([
      "Home Expence",
      "Personal Expense",
      "Income",
    ]);
    const accountTypeOption = ref([
      "Personal Account",
      "Real Living",
      "My Dream Home",
      "Full Cirlce",
      "Core Realtors",
      "Big Block",
    ]);

    const addToTransaction = () => {
      addTransaction(transaction.value);
      route.push({
        name: "AllTransactions",
      });
    };
    const getImage = () => {
      const img = file.value;
      const files = img.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onload = (base64) => {
        transaction.value.receipt = base64.currentTarget.result;
      };
    };

    const convertCurrenct = () => {
      const amount = currency.value.value;
      console.log(":::::::::::::::::::::", amount);
      console.log(amount);
      console.log("currency", typeof currency.value);
      transaction.value.amount = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(amount);
      console.log(transaction.value.amount);
    };
    return {
      loading,
      route,
      transaction,
      rules,
      selectRule,
      monthVal,
      transactionTypeOption,
      accountTypeOption,
      addToTransaction,
      getImage,
      currency,
      convertCurrenct,
      file,
    };
  },
};
</script>
