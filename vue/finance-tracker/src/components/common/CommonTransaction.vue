<template>
  <VCard class="ma-10 pa-10" v-if="!data">
    No transactions found at this moment
  </VCard>
  <VCard v-else>
    <VCard class="pa-10">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">Search List</v-btn>
          <v-chip label v-if="searchTitle" color="primary">{{
            searchTitle
          }}</v-chip>
        </template>
        <ChildComponent :data="item" :getData="getData" />
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
                  @click="sortField(heading.key)"
                ></v-icon
              ></v-chip>
            </th>
          </tr>
        </thead>

        <tbody v-if="transactionData">
          <tr v-for="transaction in transactionData" :key="transaction.id">
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
              <v-chip label color="red">{{
                currency(transaction.amount)
              }}</v-chip>
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
              <v-btn @click="editDetails(transaction.id)" color="primary"
                >Edit</v-btn
              >
            </td>
          </tr>
        </tbody>
      </VTable>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">{{ pageTitle }}</v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="item in pageNo"
            :key="item"
            @click="onPagination(item)"
            :value="item"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-pagination
        v-model="page"
        :length="noOfPages"
        rounded="circle"
      ></v-pagination>
    </VCard>
  </VCard>
</template>
<script>
import {
  sortAllTransaction,
  getAllTransactionList,
  sortByFiledName,
} from "@/services/transactions/transactions.services";
import { mergeProps } from "vue";
import { transactions } from "@/store/transactions";
import { SearchTransaction } from "@/services/transactions/transactions.services";

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
      page: 1,
      pageTitle: 5,
      noOfPages: null,
      searchTitle: null,
      pageNo: [1, 2, 3, 5, 10, 15],
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
    };
  },
  created() {
    if (this.data) {
      this.noOfPages = Math.ceil(this.data.length / this.pageTitle);
    }
  },
  methods: {
    onPagination(no) {
      this.pageTitle = no;

      this.noOfPages = Math.ceil(this.data.length / no);

      console.log(no, "page");
    },
    getViewDetails(transactionId) {
      this.$router.push({
        name: "ViewTransaction",
        params: {
          transactionId: transactionId,
        },
      });
    },
    editDetails(transactionId) {
      this.$router.push({
        name: "EditTransaction",
        params: {
          transactionId: transactionId,
        },
      });
    },

    sortField(transactionTitle) {
      let sortedOrderd = [];
      const sortedData = sortAllTransaction(
        this.IsSortingOrderAsc,
        this.transaction,
        transactionTitle
      );
      this.transaction = sortedData;
      this.IsSortingOrderAsc = !this.IsSortingOrderAsc;
      // console.log(sortedData);
    },
    searchInTransaction(transactionType, transactionTitle) {
      // console.log(transactionTitle, transactionType, "{DERFTGYUFRDEQ frtgy");
      this.transactionType = transactionType;
      this.searchTitle = transactionTitle;
    },

    currency(amount) {
      // const amount = this.$refs.currency.value;
      return Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(amount);
    },
    mergeProps,
  },
  watch: {
    search(newSearch) {
      const searchValue = SearchTransaction(
        newSearch,
        this.transactionType,
        this.data
      );
      this.transaction = searchValue;
      console.log("search return data", searchValue);
    },
  },
  computed: {
    transactionData() {
      return this.transaction?.filter((_, index) => {
        return (
          index < this.pageTitle + this.page - 1 &&
          index >= (this.page - 1) * this.pageTitle
        );
      });
    },
  },
};
</script>
