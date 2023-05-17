<template>
  <div>
    <input
      type="text"
      placeholder="Username"
      v-model="userLoginDetails.name"
    /><br />
    <input
      type="text"
      placeholder="Password"
      v-model="userLoginDetails.password"
    /><br />
    <input type="text" placeholder="Confirm password" /><br />
    <button @click="loginUser">Log In</button>
  </div>
</template>
<script>
export default {
  name: "logIn",
  data() {
    return {
      userLoginDetails: {
        id: Date.now().toString(36),
        name: null,
        password: null,
      },
    };
  },
  methods: {
    loginUser() {
      console.log(this.userLoginDetails);
      localStorage.setItem("logInUser", JSON.stringify(this.userLoginDetails));
    },
  },
};
</script>
<style scoped>
input {
  font-family: "Cambria", "Cochin", "Georgia", "Times", "Times New Roman";
  font-weight: bold;
  font-size: 20px;
  width: 100%;
  margin: 10px;
  padding: 10px;
  border: 2px solid rgb(55, 29, 88);
}
button {
  padding: 5px 15px;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 20px;
  border: none;
  border-radius: 2px;
  color: rgb(103, 75, 139);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
