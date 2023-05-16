<template>
  <div class="parent-container">
    <table v-for="user in userData" :key="user.id" class="user-table">
      <tr>
        <td>First Name:</td>
        <td>{{ user.basicDetails.fname }}</td>
      </tr>

      <tr>
        <td>Last Name:</td>
        <td>{{ user.basicDetails.lname }}</td>
      </tr>
      <tr>
        <td>Designation</td>
        <td>{{ user.basicDetails.designation }}</td>
      </tr>
      <tr>
        <td>Address1</td>
        <td>{{ user.basicDetails.addressOne }}</td>
      </tr>
      <tr>
        <td>email</td>
        <td>{{ user.basicDetails.email }}</td>
      </tr>
      <tr>
        <td>Phone no:</td>
        <td>{{ user.basicDetails.phoneno }}</td>
      </tr>
      <tr>
        <td>City</td>
        <td>{{ user.basicDetails.selectedCity }}</td>
      </tr>
      <tr>
        <td>state</td>
        <td>{{ user.basicDetails.selectedStates }}</td>
      </tr>
      <tr>
        <td>Relationship Status</td>
        <td>{{ user.basicDetails.relationStatus }}</td>
      </tr>
      <tr>
        <td>Zip code</td>
        <td>{{ user.basicDetails.zipcode }}</td>
      </tr>
      <tr>
        <td>Date of Birth</td>
        <td>{{ user.basicDetails.dob }}</td>
      </tr>

      <button class="edit-btn" @click="editUser(user.id)">Edit</button>
      <button class="delete-btn" @click="deleteUser(user.id)">Delete</button>
    </table>
  </div>
</template>

<script>
export default {
  name: "jobApplicationList",
  data() {
    return {
      userData: [],
      editUserData: null,
    };
  },
  mounted() {
    if (localStorage.getItem("user")) {
      this.userData = JSON.parse(localStorage.getItem("user"));
    }
  },
  methods: {
    editUser(uid) {
      this.editUserData = this.userData.filter((user) => user.id === uid);
      this.$emit("onUserEdit", this.editUserData);
    },
    deleteUser(uid) {
      this.userData = this.userData.filter((user) => user.id !== uid);
      localStorage.setItem("user", JSON.stringify(this.userData));
    },
  },
};
</script>

<style scoped>
.parent-container {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
}

.user-table {
  margin: 20px;
  border: 1px solid black;
  padding: 10px;
}

td {
  border: 1px solid slateblue;
  padding: 10px;
}

button {
  padding: 10px;
  margin: 10px;
}

.edit-btn {
  background-color: cornflowerblue;
  border: 1px solid white;
  border-radius: 10px;
}

button:hover {
  /* background-color: darkgray; */
  border: 2px solid black;
}

.delete-btn {
  background-color: red;
  border: 1px solid white;
  border-radius: 10px;
}
</style>
