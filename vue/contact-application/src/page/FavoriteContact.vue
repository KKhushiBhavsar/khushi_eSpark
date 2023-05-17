<template>
  <h1>Favorites</h1>
  <div class="parent-div">
    <div v-for="favorites in showFav" :key="favorites" class="card-component">
      <p class="profile">{{ favorites.profileName }}</p>
      {{ favorites.name }}
      <button @click="removeFav(favorites.id)">Remove Favorite</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "FavoriteContact",
  data() {
    return {
      allContacts: [],
      showFav: [],
    };
  },
  methods: {
    removeFav(favId) {
      this.allContacts.find(
        (contact) => contact.id === favId
      ).isFavorite = false;
      localStorage.setItem("contactDetails", JSON.stringify(this.allContacts));
      this.showFav = this.allContacts.filter(
        (contacts) => contacts.isFavorite === true
      );
    },
  },
  created() {
    this.allContacts = JSON.parse(localStorage.getItem("contactDetails")) || [];
    this.showFav = this.allContacts.filter(
      (contacts) => contacts.isFavorite === true
    );
  },
};
</script>
<style scoped>
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
  border: 2px solid red;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

button:hover {
  background-color: red;
  color: white;
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
