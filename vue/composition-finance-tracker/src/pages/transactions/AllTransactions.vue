<template>
  <VCard class="pa-10">
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
import { ref, computed } from "vue";
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
  setup() {
    const transaction = ref(getAllTransactionList());
    const groupByTitle = ref(null);
    const groupByObject = ref(null);
    const groupByType = ref(null);
    const groupByTags = ref([
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
    const groupByTransaction = (transactionType, transactionTitle) => {
      // groupByType.value = transactionTitle;

      groupByType.value = transactionType;
      const groupByObjects = groupByValues(transactionType);

      groupByObject.value = groupByObjects;
    };
    return {
      transaction,
      groupByTitle,
      groupByObject,
      groupByType,
      groupByTags,
      groupByTransaction,
    };
  },
};
</script>
