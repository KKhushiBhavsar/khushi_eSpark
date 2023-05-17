<template>
  <h1>call logs</h1>
  <div v-for="callLogs in callLog" :key="callLogs">
    {{ callLogs.callerId }}
    {{ callLogs.callDuration }} seconds
  </div>
</template>
<script>
export default {
  name: "callLogs",
  data() {
    return {
      allContacts: [],
      callLog: [],
    };
  },
  created() {
    this.allContacts = JSON.parse(localStorage.getItem("contactDetails"));
    this.callLog = this.allContacts.filter(
      (contacts) => contacts.callLog !== null || contacts.callLog !== []
    )[0].callLogs;
  },
};
</script>
