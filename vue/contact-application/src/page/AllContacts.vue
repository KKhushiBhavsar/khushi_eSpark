<template>
  <div v-if="!showCall">
    <contactsCard
      v-for="user in allContacts"
      :key="user.id"
      :user="user"
      :isAddToFavorite="true"
      @callUser="callUser"
    />
  </div>
  <div v-else>
    <div class="outer">
      <div class="main">
        <p>On the call with:</p>
        <p class="profile">{{ callUserDetails.profileName }}</p>
        <label>UserName {{ callUserDetails.name }}</label
        ><br />
        {{ callLog.callDuration }}<br />
        <button @click="endCall()">End Call</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/routes";
import contactsCard from "@/components/contactsCard.vue";

export default {
  name: "AllContacts",
  components: {
    contactsCard,
  },
  data() {
    return {
      allContacts: JSON.parse(localStorage.getItem("contactDetails")) || [],
      showMoreDetails: false,
      timerSecond: 0,
      intervalID: null,
      showCall: false,
      callUserDetails: [],
      callLog: {
        callerId: null,
        callDuration: null,
      },
    };
  },
  methods: {
    callUser({ callerId, showCall }) {
      this.callLog.callerId = callerId;
      this.showCall = showCall;
      this.makeCall(callerId);
    },
    makeCall(callerId) {
      this.showCall = true;
      this.timerSecond = 0;
      this.intervalID = setInterval(() => {
        this.timerSecond += 1;
        this.callLog.callDuration = this.timerSecond;
      }, 1000);
      this.callUserDetails = this.allContacts.find(
        (contact) => contact.id === this.callLog.callerId
      );

      this.callLog.callerId = callerId;
      console.log(this.callLog);
      this.callLog.callDuration = this.timerSecond;
    },
    endCall() {
      this.timerSecond = 0;
      clearInterval(this.intervalID);
      this.allContacts
        .find((contact) => contact.id === this.callLog.callerId)
        .callLogs.push(this.callLog);
      localStorage.setItem("contactDetails", JSON.stringify(this.allContacts));
      this.showCall = false;
    },
    addToFavorite(contactId) {
      this.allContacts.find(
        (contact) => contact.id === contactId
      ).isFavorite = true;
      localStorage.setItem("contactDetails", JSON.stringify(this.allContacts));
      router.push({ name: "FavoriteContact" });
    },
  },
};
</script>
<style scoped>
.outer {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
}
.main {
  font-size: 20px;
  padding: 20px 30px;
  background-color: rgb(194, 212, 240);
  width: 400px;
  height: 500px;
  position: fixed;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
  top: 100px;
  left: 500px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  z-index: 100;
}
button {
  padding: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 50px;
  border: none;
  border-radius: 2px;
  color: green;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.profile {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #512da8;
  font-size: 35px;
  color: #fff;
  text-align: center;
  line-height: 150px;
  margin: 20px 0;
}
</style>
