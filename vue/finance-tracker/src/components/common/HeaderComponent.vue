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
            {{ item.title }}
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
  name: "HeaderComponent",
  data() {
    return {
      tab: null,
      items: [
        { title: "Add Transaction", key: "CreateTransaction" },
        {
          title: "All Transaction",
          key: "AllTransactions",
        },
        {
          title: "login",
          key: "LoginPage",
        },
      ],
      text: "",
    };
  },
  methods: {
    gotoPage(page) {
      console.log(page);
      this.$router.push({
        name: page.key,
      });
      this.text = page;
    },
  },
};
</script>
