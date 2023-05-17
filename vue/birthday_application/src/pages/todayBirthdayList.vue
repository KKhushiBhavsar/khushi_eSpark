<template>
  <div>
    <h1>Today Birthday List</h1>
    <birthdayCart
      v-for="user in todayBirthdayUserDataList"
      :key="user.id"
      :user="user"
    />
  </div>
</template>

<script>
import birthdayCart from "@/components/birthdayCart";
export default {
  name: "todayBirthdayList",
  components: {
    birthdayCart,
  },
  data() {
    return {
      todayBirthdayUserDataList: null,
    };
  },
  created() {
    const userData = JSON.parse(localStorage.getItem("userDataList")) || [];
    const date = new Date();
    let currentDate = `${String(date.getMonth() + 1).padStart(2, "0")}-${String(
      date.getDate()
    ).padStart(2, "0")}`;
    this.todayBirthdayUserDataList = userData.filter(
      (user) => user.dob.slice(5) === currentDate
    );
  },
};
</script>

<style scoped>
h1 {
  padding: 10px;
  text-align: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
</style>
