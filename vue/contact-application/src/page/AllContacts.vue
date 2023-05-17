<template>
  <div v-if="!showCall">
    <div class="parent-container">
      <div
        v-for="contacts in allContacts"
        :key="contacts.id"
        class="card-component"
      >
        <p class="profile">{{ contacts.profileName }}</p>
        <p>Name: {{ contacts.name }}</p>
        <p>contact no: {{ contacts.contactNo }}</p>
        <img
          src="@/assets/callIcon.png"
          alt="call"
          @click="makeCall(contacts.id)"
        />
        <p v-if="showMoreDetails">emailId: {{ contacts.emailId }}</p>
        <button @click="showMoreDetails = !showMoreDetails">
          {{ showMoreDetails ? "Hide Details" : "Show Details" }}
        </button>
        <button @click="addToFavorite(contacts.id)">Add To Favorite</button>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="call-component">
      <p>On the call with:</p>

      {{ callLog.callerId }}
      {{ callLog.callDuration }}
      <button @click="endCall()">End Call</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllContacts",
  components: {},
  data() {
    return {
      allContacts: [],
      showMoreDetails: false,
      timerSecond: 0,
      showCall: false,
      callLog: {
        callerId: null,
        callDuration: null,
      },
    };
  },
  created() {
    this.allContacts = JSON.parse(localStorage.getItem("contactDetails")) || [];
  },
  methods: {
    makeCall(callerId) {
      this.showCall = true;
      this.timerSecond = 0;
      setInterval(() => {
        this.timerSecond += 1;
        this.callLog.callDuration = this.timerSecond;
      }, 1000);
      alert(callerId);
      this.callLog.callerId = callerId;
    },
    endCall() {
      this.timerSecond = 0;
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
    },
  },
};
</script>
<style scoped>
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
img {
  width: 30px;
  margin: 10px;
  padding: 10px;
}
.card-component {
  width: 30%;
  text-align: center;
  border: 1px solid black;
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
.call-component {
  width: 30%;
  border: 1px solid black;
}
</style>
