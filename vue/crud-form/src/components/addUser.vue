<template>
  <div class="parent-component">
    <input type="text" placeholder="fname" v-model="userData.fname" /><br />
    <input type="text" placeholder="lname" v-model="userData.lname" /><br />
    <input type="text" placeholder="age" v-model="userData.age" /><br />
    <input type="text" placeholder="dob" v-model="userData.dob" /><br />
    <input type="radio" name="gender" v-model="userData.gender" />Male
    <input type="radio" name="gender" v-model="userData.gender" />Female
    <input type="radio" name="gender" v-model="userData.gender" />Other<br />
    <button @click="addUser()">Add User</button>
  </div>
</template>
<script>
export default {
  name: "addUser",
  data() {
    return {
      userData: {
        id: Date.now().toString(36),
        fname: null,
        lname: null,
        age: null,
        dob: null,
        gender: null,
      },
      user: [],
    };
  },
  methods: {
    addUser() {
      this.user.push(this.userData);
      localStorage.setItem("user", JSON.stringify(this.user));
      //   console.log(this.user);
      this.$emit("IsForm", false);
    },
  },
};
</script>
