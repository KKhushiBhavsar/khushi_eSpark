<template>
  <VCard>
    <VToolbar color="#E0E0E0">
      <VToolbarTitle> Finance Tracker</VToolbarTitle>
      <VSpacer></VSpacer>
      <template v-slot:extension>
        <VTabs v-model="tab" align-tabs="title">
          <VTab
            v-for="item in items"
            :key="item"
            :value="item"
            @click="gotoPage(item)"
          >
            {{ item }}
          </VTab>
        </VTabs>
      </template>
    </VToolbar>
    <!-- <VWindow v-model="tab">
      <VWindowItem v-for="item in items" :key="item" :value="item">
        <VCard flat>
          <VCardText>{{ text }}</VCardText>
        </VCard>
      </VWindowItem>
    </VWindow> -->
  </VCard>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      tab: null,
      items: [
        "Add TransactionForm",
        "All Transaction",
        "View Transaction",
        "LogIn",
      ],
      text: "",
    };
  },
  methods: {
    gotoPage(page) {
      console.log(page);
      this.$router.push({
        name: "AddTransactionForm",
      });
      this.text = page;
    },
  },
};
</script>
