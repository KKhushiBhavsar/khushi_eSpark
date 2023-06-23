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
      ref="searchValue"
      @change="searchTransaction()"
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
import { mergeProps, defineProps, ref, toRefs, watch } from "vue";
import { transactions } from "@/store/transactions";
import { SearchTransaction } from "@/services/transactions/transactions.services";
import { useRouter } from "vue-router";
// import { transactions } from "@/store/transactions";

export default {
  name: "commonTransaction",
  props: {
    data: String,
    isGroupBy: {
      type: Boolean,
    },
  },
  setup(props) {
    const router = useRouter();
    console.log("props", props);
    // const props = defineProps();
    console.log("propsasfasdfasdfdata", props.data);
    console.log("props:::::::::::;", props.isGroupBy);

    const searchValue = ref(null);
    const searchTitle = ref(null);
    const search = ref(null);
    const transactionType = ref(null);
    const searchType = ref(null);
    let transaction = ref(props.data);
    let IsSortingOrderAsc = ref(null);
    const headers = ref([
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
    ]);
    const SearchTags = ref([
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
    ]);
    const dialog = ref(false);
    const newSearch = ref(null);

    const getViewDetails = (transactionId) => {
      router.push({
        name: "ViewTransaction",
        params: {
          transactionId: transactionId,
        },
      });
    };
    const sortField = (transactionTitle) => {
      let sortedOrderd = [];
      switch (transactionTitle) {
        case "Transaction Date":
          sortedOrderd = sortTransactionDate(
            IsSortingOrderAsc.value,
            transaction.value
          );
          transaction.value = sortedOrderd;
          IsSortingOrderAsc.value = !IsSortingOrderAsc.value;
          break;
        case "Month Year":
          sortedOrderd = sortMonthYear(
            IsSortingOrderAsc.value,
            transaction.value
          );
          transaction.value = sortedOrderd;
          IsSortingOrderAsc.value = !IsSortingOrderAsc.value;
          break;
        case "Transaction Type":
          console.log("this.transaction", transaction);
          sortedOrderd = sortTransactionType(
            IsSortingOrderAsc.value,
            transaction.value
          );
          transaction.value = sortedOrderd;
          IsSortingOrderAsc.value = !IsSortingOrderAsc.value;
          break;
        case "From Account":
          sortedOrderd = sortFromAccount(
            IsSortingOrderAsc.value,
            transaction.value
          );
          transaction.value = sortedOrderd;
          IsSortingOrderAsc.value = !IsSortingOrderAsc.value;
          break;
        case "To Account":
          sortedOrderd = sortToAccount(
            IsSortingOrderAsc.value,
            transaction.value
          );
          transaction.value = sortedOrderd;
          IsSortingOrderAsc.value = !IsSortingOrderAsc.value;
          break;
        case "Amount":
          sortedOrderd = sortAmount(IsSortingOrderAsc.value, transaction.value);
          transaction.value = sortedOrderd;
          IsSortingOrderAsc.value = !IsSortingOrderAsc.value;
          break;
        case "Notes":
          sortedOrderd = sortNotes(IsSortingOrderAsc.value, transaction.value);
          transaction.value = sortedOrderd;
          IsSortingOrderAsc.value = !IsSortingOrderAsc.value;
          break;
      }
    };

    const searchInTransaction = (type, transactionTitle) => {
      console.log(transactionTitle, type);
      transactionType.value = type;
      searchTitle.value = transactionTitle;
    };
    const mergeProps = () => {
      null;
    };

    const searchTransaction = () => {
      console.log("########3", transactionType.value);
      const searchResult = SearchTransaction(
        searchValue.value.value,
        transactionType.value,
        transaction.value
      );
      transaction.value = searchResult;
    };
    return {
      props,
      searchTitle,
      transactionType,
      searchType,
      transaction,
      IsSortingOrderAsc,
      headers,
      SearchTags,
      dialog,
      newSearch,
      getViewDetails,
      sortField,
      searchInTransaction,
      mergeProps,
      searchValue,
      searchTransaction,
    };
  },

  // watch: {
  //   search(newSearch) {
  //     const searchValue = SearchTransaction(
  //       newSearch,
  //       this.transactionType,
  //       this.transaction
  //     );
  //     this.transaction = searchValue;
  //   },
  // },
};
</script>
