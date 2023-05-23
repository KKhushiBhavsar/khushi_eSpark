<template>
  <h1>call logs</h1>
  <contactsCard
    v-for="user in callLog"
    :key="user"
    :user="user"
    :isAddToFavorite="true"
    :callLogs="true"
    @callUser="callUser"
  />
</template>
<script>
import contactsCard from "@/components/contactsCard.vue";
export default {
  name: "callLogs",
  components: {
    contactsCard,
  },
  data() {
    return {
      allContacts: JSON.parse(localStorage.getItem("contactDetails")) || [],
      callLog: [],
    };
  },
  created() {
    this.callLog = this.allContacts.filter(
      (contacts) => contacts.callLogs.length !== 0
    );
    // this.callLog = this.allContacts.filter(
    //   (contacts) => contacts.callLog !== null || contacts.callLog !== []
    // )[0].callLogs;
  },
};
</script>
