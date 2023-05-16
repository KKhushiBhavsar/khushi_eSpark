<template>
  <div v-if="!showCall">
    <div class="parent-container">
      <div
        v-for="contacts in allContacts"
        :key="contacts.id"
        class="card-component"
      >
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
  created() {
    this.allContacts = JSON.parse(localStorage.getItem("contactDetails")) || [];
    this.favoriteContacts =
      JSON.parse(localStorage.getItem("FavoriteContacts")) || [];
    // console.log("allContacts", this.allContacts);
  },
  name: "AllContacts",
  components: {},
  data() {
    return {
      isAddContact: false,
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
      console.log("call log", this.callLog);
      this.showCall = false;
    },
    addToFavorite(contactId) {
      console.log(contactId);
      this.allContacts.find(
        (contact) => contact.id === contactId
      ).isFavorite = true;
      localStorage.setItem("contactDetails", JSON.stringify(this.allContacts));
      console.log(this.allContacts);
    },
  },
};
</script>
<style scoped>
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
