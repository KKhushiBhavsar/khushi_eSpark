<template>
  <homePage />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import homePage from "./components/common/homePage.vue";

@Options({
  components: {
    homePage,
  },
})
export default class App extends Vue {}
</script>
