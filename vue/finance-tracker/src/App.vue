<template>
  <HomePage></HomePage>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomePage from "@/components/common/HomePage.vue";
export default defineComponent({
  name: "App",
  components: {
    HomePage,
  },
});
</script>
