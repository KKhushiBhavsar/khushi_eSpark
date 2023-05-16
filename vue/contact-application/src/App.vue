<template>
  <!-- <button @click="$router.push('AddContact')">AddContact</button> -->
  <!-- <button @click="$router.push('/')">All Contact</button> -->
  <!-- <button @click="$router.push('/FavoriteContact')">Favorites</button> -->
  <router-link to="/">All contacts</router-link>
  <router-link to="/AddContact">AddContact</router-link>
  <router-link to="/FavoriteContact">FavoriteContact</router-link>
  <router-link to="/callLogs">Call Logs</router-link>

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
  margin: 10px;
  background-color: white;
  color: black;
  border: 2px solid green;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover,
a:active {
  background-color: green;
  color: white;
}
</style>
