<template>
  <h1>display user</h1>
  <div class="parent-container">
    <div v-for="(users, index) in user" :key="users">
      {{ users[index] }}
      {{ users.id }}
    </div>
  </div>
</template>
<script>
export default {
  name: "displayUser",
  data() {
    return {
      user: [],
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
  },
};
</script>
