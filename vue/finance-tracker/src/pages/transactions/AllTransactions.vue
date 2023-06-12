<template>
  <VCard>
    <VCard class="pa-10" v-if="transaction">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props"> Group By </v-btn>

          <v-chip label v-if="groupByType" color="primary">{{
            groupByType
          }}</v-chip>
        </template>
        <ChildComponent :data="item" :getData="getData" />

        <v-list>
          <v-list-item
            v-for="(item, index) in groupByTags"
            :key="index"
            :value="index"
          >
            <v-list-item-title
              @click="groupByTransaction(item.key, item.title)"
              >{{ item.title }}</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </VCard>
  </VCard>
  <div v-if="groupByObject">
    <CommonTransaction
      :data="groups"
      :isGroupBy="true"
      v-for="(groups, key) in groupByObject"
      :key="key"
    >
      <v-chip> {{ groups }} </v-chip>
    </CommonTransaction>
  </div>
  <CommonTransaction v-else :data="transaction" :isGroupBy="false" />
</template>
<script>
import CommonTransaction from "@/components/common/CommonTransaction.vue";
import { mergeProps } from "vue";
import {
  groupByValues,
  getAllTransactionList,
} from "@/services/transactions/transactions.services";
export default {
  name: "AllTransactions",
  components: {
    CommonTransaction,
  },
  data() {
    return {
      transaction: getAllTransactionList(),
      groupByObject: null,
      groupByType: null,
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
    };
  },
  methods: {
    mergeProps,
    groupByTransaction(transactionType, transactionTitle) {
      this.groupByType = transactionTitle;
      const groupByObject = groupByValues(transactionType);
      // console.log("GroupByObject", groupByObject);
      this.groupByObject = groupByObject;
    },
  },
};
</script>
