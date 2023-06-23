<template>
  <RegisterPage></RegisterPage>
  <HeaderComponent />
  <router-view />
</template>
<script>
import HeaderComponent from "@/components/common/HeaderComponent.vue";
import { ref } from "vue";

export default {
  name: "HomePage",
  components: {
    HeaderComponent,
  },
  setup() {
    const tab = ref(null);
    const items = ref([
      {
        tab: "LogIn",
        content: "LoginPage",
      },
      {
        tab: "Add Item",
        content: "AddItems",
      },
      {
        tab: "Display Item",
        content: "DisplayItem",
      },
    ]);

    return { tab, items };
  },
};
</script>
