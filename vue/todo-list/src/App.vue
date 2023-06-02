<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import addTaskToList from "./components/common/addTaskToList.vue";
@Options({
  components: {
    addTaskToList,
  },
})
export default class App extends Vue {}
</script>
