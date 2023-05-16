<template>
  <div class="parent-container">
    <input
      type="text"
      placeholder="Enter Name"
      v-model="contactDetails.name"
    /><br />
    <input
      type="text"
      placeholder="Contact Number"
      v-model="contactDetails.contactNo"
    /><br />
    <input
      type="text"
      placeholder="Email Id"
      v-model="contactDetails.emailId"
    /><br />
    <button @click="addContact()">+SAVE</button>
  </div>
</template>
<script>
export default {
  name: "AddContact",
  data() {
    return {
      contactDetails: {
        id: Date.now().toString(36),
        name: null,
        contactNo: null,
        emailId: null,
        isFavorite: false,
        favoriteContacts: [],
      },
      addContactDetails: [],
    };
  },
  created() {
    this.addContactDetails =
      JSON.parse(localStorage.getItem("contactDetails")) || [];
  },
  methods: {
    addContact() {
      this.addContactDetails.push(this.contactDetails);
      console.log(this.addContactDetails);
      localStorage.setItem(
        "contactDetails",
        JSON.stringify(this.addContactDetails)
      );
    },
  },
};
</script>
<style scoped>
input {
  width: 40%;
  height: 20px;
  margin: 10px;
  padding: 10px;
}
button {
  margin: 10px;
  background-color: white;
  color: black;
  border: 2px solid green;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

button:hover {
  background-color: green;
  color: white;
}
</style>
