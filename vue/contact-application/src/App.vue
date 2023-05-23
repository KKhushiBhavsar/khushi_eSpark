<template>
  <div class="nav-bar">
    <router-link to="/">All contacts</router-link>
    <router-link :to="{ name: 'AddContact' }">AddContact</router-link>
    <router-link :to="{ name: 'FavoriteContact' }">FavoriteContact</router-link>
    <router-link :to="{ name: 'callLogs' }">Call Logs</router-link>
  </div>

  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style scoped>
a:link,
a:visited {
  padding: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 50px;
  border: none;
  border-radius: 2px;
  color: green;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

a:hover,
a:active {
  background-color: green;
  color: white;
}
.nav-bar {
  /* background-color: green; */
}
</style>
