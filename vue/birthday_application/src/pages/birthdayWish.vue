<template>
  <div class="main-box">
    <h1>Birthday Wishing Page</h1>
    <div class="main-field">
      <input type="text" placeholder="write wishes ....." v-model="wish" />
      <button @click="sendWish">Send Wish</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "birthdayWish",
  props: {
    userId: String,
  },
  data() {
    return {
      wish: null,
    };
  },
  methods: {
    sendWish() {
      console.log(this.wish);
      const userDataList =
        JSON.parse(localStorage.getItem("userDataList")) || [];
      userDataList.forEach((user) => {
        if (user.id === +this.userId) {
          user["wish"] = this.wish;
        }
        this.$router.back();
      });
      localStorage.setItem("userDataList", JSON.stringify(userDataList));
    },
  },
};
</script>

<style scoped>
.main-field {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  border-radius: 5px;
  font-size: 1.3rem;
  padding: 5px;
  margin: 20px;
}

button {
  font-size: 1.3rem;
  font-weight: 600;
  background-color: rgb(103, 75, 139);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  width: fit-content;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
