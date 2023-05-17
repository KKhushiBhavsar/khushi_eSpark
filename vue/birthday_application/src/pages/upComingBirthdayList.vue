<template>
  <div>
    <h1>UpComing Birthday List</h1>
    <birthdayCart
      v-for="user in upComingBirthdayUserDataList"
      :key="user.id"
      :user="user"
    />
  </div>
</template>

<script>
import birthdayCart from "@/components/birthdayCart";
export default {
  name: "upComingBirthdayList",
  components: {
    birthdayCart,
  },
  data() {
    return {
      upComingBirthdayUserDataList: null,
    };
  },
  created() {
    const userData = JSON.parse(localStorage.getItem("userDataList")) || [];
    const date = new Date();
    const currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    this.upComingBirthdayUserDataList = userData.filter(
      (user) => user.dob.substr(5, 2) === currentMonth
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
