<template>
  <VCard class="ma-10"> </VCard>
  <VCard class="pa-10">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">Search </v-btn>

        <v-chip label v-if="searchTitle" color="primary">{{
          searchTitle
        }}</v-chip>
      </template>
      <ChildComponent :data="item" :getData="getData" />
      <!-- it will send item to childcomponent-->

      <v-list>
        <v-list-item
          v-for="(item, index) in SearchTags"
          :key="index"
          @click="searchInTransaction(item.key, item.title)"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <VTextField
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></VTextField>
  </VCard>
  <VCard class="pa-10">
    <VTable>
      <thead>
        <tr>
          <th v-for="heading in headers" :key="heading">
            <!-- <v-icon icon="mdi-calendar-range-outline"></v-icon> -->
            <v-chip :prepend-icon="heading.headerIcon" variant="text"
              >{{ heading.title
              }}<v-icon
                icon="mdi-swap-vertical-bold"
                @click="sortField(heading.title)"
              ></v-icon
            ></v-chip>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="transaction in transaction" :key="transaction.id">
          <td>
            <v-chip label color="red"
              >{{ transaction.transactionDate }}
            </v-chip>
          </td>
          <td>
            <v-chip label color="blue">{{ transaction.monthYear }} </v-chip>
          </td>
          <td>
            <v-chip label color="green"
              >{{ transaction.transactionType }}
            </v-chip>
          </td>
          <td>
            <v-chip label color="pink">{{ transaction.fromAccount }} </v-chip>
          </td>
          <td>
            <v-chip label color="purple">{{ transaction.toAccount }} </v-chip>
          </td>
          <td>
            <v-chip label color="red">{{ transaction.amount }} </v-chip>
          </td>
          <td>
            <v-img
              :width="100"
              aspect-ratio="16/9"
              cover
              :src="transaction.receipt"
            ></v-img>
          </td>
          <td>{{ transaction.notes }}</td>
          <td>
            <v-btn @click="getViewDetails(transaction.id)" color="primary"
              >View</v-btn
            >
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>
<script>
import {
  getAllTransactionList,
  sortByFiledName,
  sortMonthYear,
  sortTransactionDate,
  sortTransactionType,
  sortFromAccount,
  sortToAccount,
  sortAmount,
  sortNotes,
} from "@/services/transactions/transactions.services";
import { mergeProps } from "vue";
import { transactions } from "@/store/transactions";
import { SearchTransaction } from "@/services/transactions/transactions.services";
// import { transactions } from "@/store/transactions";

export default {
  name: "AllTransactions",
  props: {
    data: {
      type: Object,
    },
    isGroupBy: {
      type: Boolean,
    },
  },
  data() {
    return {
      searchTitle: null,
      transactionType: null,
      searchType: null,
      transaction: this.data,
      IsSortingOrderAsc: true,
      search: null,
      headers: [
        {
          title: "Transaction Date",
          align: "end",
          key: "transactionDate",
          headerIcon: "mdi-calendar-range-outline",
        },
        { title: "Month Year", align: "end", key: "monthYear", headerIcon: "" },
        {
          title: "Transaction Type",
          align: "end",
          key: "transactionType",
          headerIcon: "mdi-play-circle-outline",
        },
        {
          title: "From Account",
          align: "end",
          key: "fromAccount",
          headerIcon: "mdi-play-circle-outline",
        },
        {
          title: "To Account",
          align: "end",
          key: "toAccount",
          headerIcon: "mdi-play-circle-outline",
        },
        {
          title: "Amount",
          align: "end",
          key: "amount",
          headerIcon: "mdi-pound",
        },
        {
          title: "Receipt",
          align: "end",
          key: "receipt",
          headerIcon: "mdi-attachment",
        },
        {
          title: "Notes",
          align: "end",
          key: "notes",
          headerIcon: "mdi-format-letter-case",
        },
        {
          title: "Action",
          align: "end",
          key: "Action",
          headerIcon: "mdi-format-list-bulleted-square",
        },
      ],
      SearchTags: [
        { title: "Month Year", align: "end", key: "monthYear", headerIcon: "" },
        {
          title: "Transaction Type",
          align: "end",
          key: "transactionType",
          headerIcon: "mdi-play-circle-outline",
        },
        {
          title: "From Account",
          align: "end",
          key: "fromAccount",
          headerIcon: "mdi-play-circle-outline",
        },
        {
          title: "To Account",
          align: "end",
          key: "toAccount",
          headerIcon: "mdi-play-circle-outline",
        },
      ],
      // transaction: getAllTransactionList(),
      dialog: false,
    };
  },
  watch: {
    search(newSearch) {
      const searchValue = SearchTransaction(newSearch, this.transactionType);
      this.transaction = searchValue;
    },
  },
  methods: {
    getViewDetails(transactionId) {
      //   alert("view");

      this.$router.push({
        name: "ViewTransaction",
        params: {
          transactionId: transactionId,
        },
      });
    },
    seachValue(value) {
      console.log(value);
    },
    sortField(transactionTitle) {
      let sortedOrderd = [];
      switch (transactionTitle) {
        case "Transaction Date":
          sortedOrderd = sortTransactionDate(
            this.IsSortingOrderAsc,
            this.transaction
          );
          this.transaction = sortedOrderd;
          this.IsSortingOrderAsc = !this.IsSortingOrderAsc;
          break;
        case "Month Year":
          sortedOrderd = sortMonthYear(
            this.IsSortingOrderAsc,
            this.transaction
          );
          this.transaction = sortedOrderd;
          this.IsSortingOrderAsc = !this.IsSortingOrderAsc;
          break;
        case "Transaction Type":
          console.log("this.transaction", this.transaction);
          sortedOrderd = sortTransactionType(
            this.IsSortingOrderAsc,
            this.transaction
          );
          this.transaction = sortedOrderd;
          this.IsSortingOrderAsc = !this.IsSortingOrderAsc;
          break;
        case "From Account":
          sortedOrderd = sortFromAccount(
            this.IsSortingOrderAsc,
            this.transaction
          );
          this.transaction = sortedOrderd;
          this.IsSortingOrderAsc = !this.IsSortingOrderAsc;
          break;
        case "To Account":
          sortedOrderd = sortToAccount(
            this.IsSortingOrderAsc,
            this.transaction
          );
          this.transaction = sortedOrderd;
          this.IsSortingOrderAsc = !this.IsSortingOrderAsc;
          break;
        case "Amount":
          sortedOrderd = sortAmount(this.IsSortingOrderAsc, this.transaction);
          this.transaction = sortedOrderd;
          this.IsSortingOrderAsc = !this.IsSortingOrderAsc;
          break;
        case "Notes":
          sortedOrderd = sortNotes(this.IsSortingOrderAsc, this.transaction);
          this.transaction = sortedOrderd;
          this.IsSortingOrderAsc = !this.IsSortingOrderAsc;
          break;
      }
    },
    searchInTransaction(transactionType, transactionTitle) {
      console.log(transactionTitle, transactionType);
      this.transactionType = transactionType;
      this.searchTitle = transactionTitle;
    },
    mergeProps,
  },
};
</script>
