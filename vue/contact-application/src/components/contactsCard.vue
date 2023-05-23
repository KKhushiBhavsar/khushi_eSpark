<template>
  <div class="parent-container" v-if="!showCall">
    <p class="profile">{{ user.profileName }}</p>
    <label>UserName {{ user.name }}</label>
    <div v-if="callLogs">
      <div v-for="userLog in user.callLogs" :key="userLog" class="caller-log">
        <p>Caller Id: {{ userLog.callerId }}</p>
        <p>Call Duration: {{ userLog.callDuration }}</p>
      </div>
    </div>
    <img src="@/assets/callIcon.png" alt="call" @click="makeCall(user.id)" />
    <button @click="addToFavorite(user.id)" v-if="isAddToFavorite && !callLogs">
      Add To Favorite
    </button>
    <button
      @click="removeFav(user.id)"
      v-else-if="!isAddToFavorite && !callLogs"
    >
      Remove Favorite
    </button>
    <div class="box" v-if="isShowMoreDetails">
      <p>Contact No :{{ user.contactNo }}</p>
      <p>Email : {{ user.emailId }}</p>
    </div>
    <div>
      <button class="visit" @click="showMoreUserDetail">
        {{ hideOrShow }} Details
      </button>
    </div>
  </div>
</template>

<script>
import router from "@/routes";
export default {
  name: "contactsCard",
  props: {
    user: Object,
    isAddToFavorite: Boolean,
    callLogs: Boolean,
  },
  data() {
    return {
      allContacts: [],
      showFav: [],
      isShowMoreDetails: false,
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
    this.showFav = this.allContacts.filter(
      (contacts) => contacts.isFavorite === true
    );
  },
  methods: {
    showMoreUserDetail() {
      this.isShowMoreDetails = !this.isShowMoreDetails;
    },
    makeCall(callerId) {
      this.$emit("callUser", {
        callerId: callerId,
        showCall: true,
      });
    },
    addToFavorite(contactId) {
      this.allContacts.find(
        (contact) => contact.id === contactId
      ).isFavorite = true;
      localStorage.setItem("contactDetails", JSON.stringify(this.allContacts));
      router.push({
        name: "FavoriteContact",
      });
    },
    removeFav(favId) {
      this.allContacts.find(
        (contact) => contact.id === favId
      ).isFavorite = false;
      localStorage.setItem("contactDetails", JSON.stringify(this.allContacts));
      this.showFav = this.allContacts.filter(
        (contacts) => contacts.isFavorite === true
      );
      router.push({ name: "AllContacts" });
    },
  },
  computed: {
    hideOrShow() {
      return this.isShowMoreDetails ? "Hide" : "Show";
    },
  },
};
</script>
<style scoped>
.parent-container:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.parent-container {
  padding: 2px 16px;
}
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
img {
  width: 30px;
  margin: 10px;
  padding: 10px;
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
label {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 20px 0;
  color: rgb(55, 29, 88);
  text-transform: capitalize;
}
button {
  padding: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 10px;
  border: none;
  border-radius: 2px;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.caller-log {
  padding: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 10px;
  border: none;
  border-radius: 2px;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
