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
import router from "@/routes";
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
        profileName: null,
        callLogs: [],
      },
      addContactDetails:
        JSON.parse(localStorage.getItem("contactDetails")) || [],
    };
  },
  methods: {
    addContact() {
      this.contactDetails.profileName = this.contactDetails.name.charAt(0);
      this.addContactDetails.push(this.contactDetails);
      localStorage.setItem(
        "contactDetails",
        JSON.stringify(this.addContactDetails)
      );
      router.push({
        name: "AllContacts",
      });
    },
  },
};
</script>

<style scoped>
.parent-container {
  margin: 30px auto;
  width: 900px;
  padding: 30px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
input {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 40%;
  height: 20px;
  margin: 10px;
  padding: 10px;
}

button {
  padding: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 10px;
  border: none;
  border-radius: 2px;
  color: green;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

button:hover {
  background-color: green;
  color: white;
}
</style>
