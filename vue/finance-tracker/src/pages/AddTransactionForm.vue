<template>
  <VRow justify="center">
    <VDialog v-model="dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <VBtn color="primary" v-bind="props"> Add Transaction </VBtn>
      </template>
      <VCard class="pa-10">
        <form @submit.prevent="submit">
          <VTextField
            type="date"
            v-model="transactionDate.value.value"
            :error-messages="transactionDate.errorMessage.value"
            label="Transaction Date"
          ></VTextField>
          <VSelect
            v-model="monthYear.value.value"
            :items="monthVal"
            :error-messages="monthYear.errorMessage.value"
            label="Select"
          ></VSelect>
          <VSelect
            v-model="transactionType.value.value"
            :items="transactionTypeOption"
            :error-messages="transactionType.errorMessage.value"
            label="Transaction Type"
          ></VSelect>

          <VSelect
            v-model="fromAccount.value.value"
            :items="accountTypeOption"
            :error-messages="fromAccount.errorMessage.value"
            label="From Account"
          ></VSelect>

          <VSelect
            v-model="toAccount.value.value"
            :items="accountTypeOption"
            :error-messages="toAccount.errorMessage.value"
            label="To Account"
          ></VSelect>

          <VTextField
            v-model="amount.value.value"
            :error-messages="amount.errorMessage.value"
            label="Amount"
          ></VTextField>

          <VBtn class="me-4" type="submit"> submit </VBtn>

          <VBtn @click="handleReset"> clear </VBtn>
        </form>
      </VCard>
    </VDialog>
  </VRow>
</template>

<script>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
// import { useField } from "vee-validate";

export default {
  setup() {
    const dialog = true;
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        monthYear(value) {
          if (value) return true;
          return "Select a month.";
        },
        transactionType(value) {
          if (value) return true;
          return "Select Transaction Type.";
        },
        fromAccount(value) {
          if (value) return true;
          return "Select Account Type.";
        },
        toAccount(value) {
          if (value) return true;
          return "Select Account Type.";
        },
      },
    });
    const transactionDate = useField("transactionDate");
    const monthYear = useField("monthYear");
    const transactionType = useField("transactionType");
    const fromAccount = useField("fromAccount");
    const toAccount = useField("toAccount");
    const amount = useField("amount");
    const receipt = useField("receipt");
    const notes = useField("notes");

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
    const submit = handleSubmit((values) => {
      alert(JSON.stringify(values, null, 2));
    });

    return {
      transactionDate,
      monthYear,
      monthVal,
      transactionType,
      fromAccount,
      toAccount,
      amount,
      receipt,
      notes,
      transactionTypeOption,
      accountTypeOption,
      dialog,
      submit,
      handleReset,
    };
  },
};
</script>
