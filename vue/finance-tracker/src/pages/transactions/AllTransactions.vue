<template>
  <!-- <VDataTable
      :headers="headers"
      :items="transaction"
      class="elevation-1"
    ></VDataTable> -->
  <VCard class="ma-10"> </VCard>
  <VCard class="pa-10">
    <VMenu>
      <template v-slot:activator="{ props: menu }">
        <VTooltip location="top">
          <template v-slot:activator="{ props: tooltip }">
            <VBtn color="primary" v-bind="mergeProps(menu, tooltip)">
              Group By
            </VBtn>
          </template>
          <span>Get All Transactions in specific Group</span>
        </VTooltip>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in groupByTags" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </VMenu>
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
            <v-chip label>{{ transaction.transactionDate }} </v-chip>
          </td>
          <td>
            <v-chip label>{{ transaction.monthYear }} </v-chip>
          </td>
          <td>
            <v-chip label>{{ transaction.transactionType }} </v-chip>
          </td>
          <td>
            <v-chip label>{{ transaction.fromAccount }} </v-chip>
          </td>
          <td>
            <v-chip label>{{ transaction.toAccount }} </v-chip>
          </td>
          <td>
            <v-chip label>{{ transaction.amount }} </v-chip>
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
            <v-btn @click="getViewDetails(transaction.id)"></v-btn>
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
} from "@/services/transactions/transactions.services";
import { mergeProps } from "vue";
export default {
  name: "AllTransactions",
  data() {
    return {
      IsSortingOrderAsc: true,
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
      groupByTags: [
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
      transaction: getAllTransactionList(),
      dialog: false,
    };
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
    sortField(transactionTitle) {
      if (this.IsSortingOrderAsc) {
        sortByFiledName(transactionTitle, "asc");
        this.IsSortingOrderAsc = false;
      }
      //   console.log(transactionId);
      //   if (this.IsSortingOrderAsc) {
      //     console.log(
      //       this.transaction.sort((x, y) =>
      //         x[transactionId] > y[transactionId] ? -1 : 1
      //       )
      //     );
      //     this.IsSortingOrderAsc = false;
      //   } else {
      //     this.transaction.sort((x, y) =>
      //       x[transactionId] < y[transactionId] ? -1 : 1
      //     );
      //     this.IsSortingOrderAsc = true;
      //   }
    },
    mergeProps,
  },
};
</script>
