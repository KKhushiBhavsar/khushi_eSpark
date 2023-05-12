<template>
  <button @click="displayForm = true">Application Form</button>
  <button @click="displayForm = false">Display Users</button>

  <jobApplication
    v-if="displayForm"
    @userData="userData"
    :editData="editData"
  />
  <displayData v-else @editUser="editUser" />
</template>

<script>
import displayData from "./components/displayData.vue";
import jobApplication from "./components/jobApplication.vue";

export default {
  name: "App",
  components: {
    jobApplication,
    displayData,
  },
  data() {
    return {
      displayForm: true,
      editData: [],
    };
  },
  methods: {
    userData(displayUser) {
      this.displayForm = displayUser;
      this.editData = [];
    },
    editUser({ displayUser, editData }) {
      this.displayForm = displayUser;
      this.editData = editData;
    },
  },
};
</script>

<style scoped>
button {
  width: 30%;
  margin: 10px;
  padding: 10px;
  background-color: rgb(157, 206, 207);
  border: 2px solid white;
  color: white;
  font-weight: bold;
}
button:hover {
  opacity: 0.5;
}
</style>
