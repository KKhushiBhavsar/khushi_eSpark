<template>
  <button @click="displayForm = true">Application Form</button>
  <button @click="displayForm = false">Display Users</button>

  <jobApplication
    v-if="displayForm"
    @onUserAdd="onUserAdd"
    :editData="editData"
  />
  <jobApplicationList v-else @onUserEdit="onUserEdit" />
</template>

<script>
import jobApplication from "@/components/jobApplication.vue";
import jobApplicationList from "@/components/jobApplicationList.vue";

export default {
  name: "App",
  components: {
    jobApplication,
    jobApplicationList,
  },
  data() {
    return {
      displayForm: true,
      editData: {},
    };
  },
  methods: {
    onUserAdd(isDisplayForm) {
      this.displayForm = isDisplayForm;
      this.editData = [];
    },
    onUserEdit(editData) {
      this.displayForm = true;
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
