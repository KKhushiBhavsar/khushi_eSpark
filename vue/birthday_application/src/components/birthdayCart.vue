<template>
  <div class="container">
    <label>{{ user.name }} {{ user.surname }}</label>

    <transition>
      <div class="box" v-if="isShowMoreDetail">
        <p>Birthdate :{{ user.dob }}</p>
        <p>City : {{ user.city }}</p>
        <p>Wish : {{ user.wish }}</p>
      </div>
    </transition>
    <div>
      <button class="visit" @click="showMoreUserDetail">
        {{ hideOrShow }} Details
      </button>
    </div>
    <div v-if="isShowWish" class="wish">
      <button @click="birthdayWish(user.id)">Wish</button>
    </div>
    <div v-if="isShowAdvanceWish" class="wish">
      <button @click="birthdayWish(user.id)">Advance Wish</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "birthdayCart",
  props: {
    user: Object,
  },
  data() {
    return {
      isShowMoreDetail: false,
    };
  },
  methods: {
    birthdayWish(userId) {
      this.$router.push({
        name: "birthdayWish",
        params: { userId: userId },
      });
    },
    showMoreUserDetail() {
      this.isShowMoreDetail = !this.isShowMoreDetail;
    },
  },
  computed: {
    isShowWish() {
      const date = new Date();
      let currentDate = `${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )}-${String(date.getDate()).padStart(2, "0")}`;

      return this.user.dob.slice(5) === currentDate;
    },
    isShowAdvanceWish() {
      const date = new Date();
      let tomorrowDate = `${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )}-${String(date.getDate() + 1).padStart(2, "0")}`;

      return this.user.dob.slice(5) === tomorrowDate;
    },
    hideOrShow() {
      return this.isShowMoreDetail ? "Hide" : "Show";
    },
  },
};
</script>

<style scoped>
label {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 20px 0;
  color: rgb(55, 29, 88);
  text-transform: capitalize;
}
.container {
  margin: 30px auto;
  width: 900px;
  padding: 30px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.box {
  border-radius: 5px;
  width: 400px;
  text-align: center;
  margin: 20px 0;
}

.box p {
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: rgb(55, 29, 88);
  font-size: x-large;
  font-weight: 700;
  width: 300px;
  padding: 10px 0;
  margin: 20px auto;
}

.visit {
  border: none;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  color: white;
  background-color: rgb(55, 29, 88);
}

button:hover {
  background-color: rgb(103, 75, 139);
}
.wish {
  width: 100%;
  text-align: right;
}

.wish button {
  padding: 5px 15px;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 20px;
  border: none;
  border-radius: 2px;
  color: rgb(103, 75, 139);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.wish button:hover {
  color: rgb(161, 143, 185);
  box-shadow: none;
}

.v-enter-from {
  opacity: 0;
  /* transform: scale(0.5); */
  transform: translateY(-30px);
}
.v-enter-active {
  transition: all 0.3s ease-in;
}
.v-enter-to {
  opacity: 1;
  /* transform: scale(1); */
  transform: translateY(0);
}
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-active {
  transition: all 0.3s ease-out;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
