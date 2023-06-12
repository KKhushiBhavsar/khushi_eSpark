<template>
  <div>
    <form @submit.prevent="submit">
      <VTextField
        type="date"
        v-model="editTransactionData.transactionDate"
        label="Transaction Date"
      ></VTextField>
      <VSelect
        v-model="editTransactionData.monthYear"
        :items="monthVal"
        label="Select"
        :selectRule="selectRule"
      ></VSelect>
      <VSelect
        v-model="editTransactionData.transactionType"
        :items="transactionTypeOption"
        label="Transaction Type"
        :selectRule="selectRule"
      ></VSelect>

      <VSelect
        v-model="editTransactionData.fromAccount"
        :items="accountTypeOption"
        label="From Account"
        :selectRule="selectRule"
      ></VSelect>

      <VSelect
        v-model="editTransactionData.toAccount"
        :items="accountTypeOption"
        label="To Account"
        :selectRule="selectRule"
      ></VSelect>

      <VTextField
        type="number"
        v-model="editTransactionData.amount"
        label="Amount"
        :selectRule="selectRule"
        ref="currency"
      >
      </VTextField>

      <VFileInput
        show-size
        v-model="imgDemo"
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
        v-model="editTransactionData.notes"
        :rules="rules"
      ></VTextarea>
      <VBtn
        class="me-4"
        type="submit"
        @click="editData()"
        color="primary"
        :loading="loading"
      >
        Edit
        <template v-slot:loader>
          <v-progress-linear indeterminate></v-progress-linear>
        </template>
      </VBtn>

      <VBtn @click="handleReset"> clear </VBtn>
    </form>
  </div>
</template>
<script>
import {
  getViewTransactionDetails,
  editTransactionInDatabase,
} from "@/services/transactions/transactions.services";
export default {
  name: "ViewTransaction",
  data() {
    return {
      dialog: false,
      transactionId: this.$route.params.transactionId,
      editTransactionData: null,
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
      imgDemo: null,
    };
  },
  created() {
    const editData = getViewTransactionDetails(this.transactionId);
    this.editTransactionData = editData;

    const dataUrl = editData.receipt;
    fetch(dataUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], "sample.png", { type: blob.type });
        this.imgDemo = [file];
        console.log(file); //File object
      });
  },
  methods: {
    getImage() {
      const img = this.$refs.file;
      console.log(img);
      const files = img.files[0];
      var reader = new FileReader();

      reader.readAsDataURL(files);
      reader.onload = (base64) => {
        // console.log("transaction receipt", this.transaction.receipt);
        // localStorage["receipt"] = base64.currentTarget.result;
        // console.log(base64.currentTarget.result);
        console.log(this);
        this.editTransactionData.receipt = base64.currentTarget.result;
      };
    },
    editData() {
      const response = editTransactionInDatabase(this.editTransactionData);
      if (response) {
        this.$router.push({
          name: "AllTransactions",
        });
      }
    },
  },
};
</script>
