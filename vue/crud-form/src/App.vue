<template>
  <button @click="AdduserForm = true">Add User</button>
  <button @click="AdduserForm = false">Display User</button>
  <addUser v-if="AdduserForm" @IsForm="IsForm" />
  <displayUser v-else />
</template>

<script>
import addUser from "./components/addUser.vue";
import displayUser from "./components/displayUser.vue";

export default {
  name: "App",
  components: {
    addUser,
    displayUser,
  },
  data() {
    return {
      AdduserForm: true,
    };
  },
  methods: {
    IsForm(AdduserForm) {
      this.AdduserForm = AdduserForm;
    },
  },
};
</script>
