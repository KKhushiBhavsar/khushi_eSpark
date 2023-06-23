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
          <v-switch
            inset
            color="info"
            v-model="darkMode"
            @change="toggleTheme()"
            :label="`It's ${darkMode ? 'Dark' : 'Light'}!`"
          ></v-switch>
        </VTabs>
      </template>
    </VToolbar>
  </VCard>
</template>
<script>
import { ref } from "vue";
import { useTheme } from "vuetify";

import { useRouter } from "vue-router";
export default {
  name: "HeaderComponent",
  setup() {
    const theme = useTheme();

    const route = useRouter();
    const tab = ref(null);
    const text = null;
    const items = ref([
      { title: "Add Transaction", key: "CreateTransaction" },
      {
        title: "All Transaction",
        key: "AllTransactions",
      },
      {
        title: "login",
        key: "LoginPage",
      },
    ]);
    const gotoPage = (page) => {
      route.push({
        name: page.key,
      });
      if (text) {
        text.value = page;
      }
    };
    const toggleTheme = () => {
      // console.log(theme.global.name.value);
      theme.global.name.value =
        theme.global.name.value == "light" ? "dark" : "light";
      console.log(`Current theme is dark? ${theme.global.current.value.dark}`);
    };
    return { tab, items, text, route, gotoPage, toggleTheme };
  },
};
</script>
