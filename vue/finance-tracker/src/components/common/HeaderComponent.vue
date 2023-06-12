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
      this.$router.push({
        name: page.key,
      });
      this.text = page;
    },
  },
};
</script>
<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const darkMode = ref(false);

const toggleTheme = () => {
  theme.global.name.value = darkMode.value ? "dark" : "light";
  // Optional: Get value of current theme
  // console.log(`Current theme is dark? ${theme.global.current.value.dark}`);
};
</script>
