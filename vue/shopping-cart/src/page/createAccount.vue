<template>
  <div>
    <div>
      <h1>Create New Account</h1>
      <hr />
      <div class="form">
        <div class="form-container">
          <label>E-mail Address*</label><br />
          <input
            type="text"
            placeholder="Enter your Email Address Here"
            v-model="customerInformation.EmailId"
          /><br />
          <label>Password *</label><br />
          <input
            type="text"
            placeholder="Enter your Password Here"
            v-model="customerInformation.Password"
          /><br />
          <label>Password Verification*</label><br />
          <input type="text" placeholder="Repeat Your Password" /><br />
        </div>
        <div class="form-container">
          <label>First Name*</label><br />
          <input
            type="text"
            placeholder="May We Know Your First Name ?"
            v-model="customerInformation.firstName"
          /><br />
          <label>Last Name*</label><br />
          <input
            type="text"
            placeholder="What is your Surname? "
            v-model="customerInformation.lastName"
          /><br />
          <label>Country*</label><br />
          <input type="text" v-model="customerInformation.country" /><br />
          <label>Postal Code* </label><br />
          <input
            type="text"
            placeholder="What is Your ZipCode ? "
            v-model="customerInformation.zipCode"
          /><br />
          <label>Address* </label><br />
          <input
            type="text"
            placeholder="What is Your Address ?"
            v-model="customerInformation.Address"
          /><br />
          <label>Phone Number*</label><br />
          <input
            type="text"
            placeholder="Where Can We Reach You?"
            v-model="customerInformation.contactNo"
          /><br />
          <button @click="createUserAccount">Create My Account</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/routes";
export default {
  name: "createAccount",
  data() {
    return {
      customerInformation: {
        id: Date.now().toString(36),
        firstName: null,
        lastName: null,
        EmailId: null,
        Password: null,
        Address: null,
        country: null,
        zipCode: null,
        contactNo: null,
        purchaseHistory: [
          {
            productid: null,
            productName: null,
            date: null,
            totalPayment: null,
          },
        ],
      },
      customerData:
        JSON.parse(localStorage.getItem("customerInformation")) || [],
    };
  },
  methods: {
    createUserAccount() {
      this.customerData.push(this.customerInformation);
      localStorage.setItem(
        "customerInformation",
        JSON.stringify(this.customerData)
      );
      router.push({ name: "logInPage" });
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  margin: 100px;
  width: 100%;
}

input {
  width: 50%;
  /* margin: 10px; */
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

.form-container {
  margin: 10px;
  /* border: 1px solid green; */
  width: 100%;
}
</style>
