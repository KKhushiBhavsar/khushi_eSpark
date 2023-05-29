<template>
  <div class="parent-container">
    <div>
      <h1>Login</h1>
      <label>* Email ID</label><br />
      <input type="text" v-model="logInUser.emailId" /><br />
      <label>* Password </label><br />
      <input type="text" v-model="logInUser.password" /><br />
    </div>

    <button @click="logIn">Login</button>
    <router-link :to="{ name: 'createAccount' }">Create Account</router-link>
  </div>
</template>

<script>
import router from "@/routes";
export default {
  name: "logInPage",
  data() {
    return {
      logInUser: {
        Id: Date.now().toString(36),
        emailId: null,
        password: null,
        orders: [],
      },
    };
  },
  methods: {
    logIn() {
      localStorage.setItem("loginUser", JSON.stringify(this.logInUser));
      router.push({ name: "homePage" });
    },
  },
};
</script>

<style scoped>
input {
  width: 50%;
  margin: 10px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

button {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.parent-container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin: 100px auto;
  width: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  /* padding: 10px; */
}
a:link,
a:visited {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;
}

a:hover,
a:active {
  background-color: green;
  color: white;
}
</style>
