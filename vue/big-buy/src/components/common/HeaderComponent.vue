<template>
  <VCard>
    <VToolbar color="#E0E0E0">
      <!-- <VToolbarTitle> BIG BUY</VToolbarTitle> -->
      <!-- <VSpacer></VSpacer> -->
      <template v-slot:extension>
        <v-card
          v-model="tab"
          align-tabs="title"
          class="pa-10 ma-10"
          color="#E0E0E0"
        >
          <v-btn
            v-for="item in items"
            :key="item"
            :value="item"
            @click="gotoPage(item)"
          >
            {{ item.title }}
          </v-btn>
          <v-switch
            inset
            color="info"
            v-model="darkMode"
            @change="toggleTheme()"
            :label="`It's ${darkMode ? 'Dark' : 'Light'}!`"
          ></v-switch>
        </v-card>
      </template>
    </VToolbar>
  </VCard>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useTheme } from "vuetify";

export default {
  name: "HeaderComponent",
  setup() {
    const theme = useTheme();
    const router = useRouter();
    const tab = ref(null);
    const items = ref([
      {
        title: "Add Item",
        key: "AddItems",
      },
      {
        title: "All Items",
        key: "AllItems",
      },
      {
        title: "Purchase History",
        key: "PurchaseHistory",
      },
      {
        title: "Login",
        key: "LogInPage",
      },
    ]);
    const text = null;
    const gotoPage = (page) => {
      router.push({
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
    return { tab, items, gotoPage, text, toggleTheme };
  },
};
</script>
