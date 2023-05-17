<template>
  <div>
    <h1>All Birthday List</h1>
    <birthdayCart v-for="user in userDataList" :key="user.id" :user="user" />
  </div>
</template>

<script>
import birthdayCart from "@/components/birthdayCart";
export default {
  name: "allBirthdayList",
  components: {
    birthdayCart,
  },

  data() {
    return {
      userDataList: null,
    };
  },
  created() {
    this.userDataList = JSON.parse(localStorage.getItem("userDataList")) || [];
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
