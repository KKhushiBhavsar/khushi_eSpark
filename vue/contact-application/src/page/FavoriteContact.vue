<template>
  <h1>Favorites</h1>
  <div class="parent-div">
    <div v-for="favorites in showFav" :key="favorites" class="card-component">
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
      console.log(favId);
      this.allContacts.find(
        (contact) => contact.id === favId
      ).isFavorite = false;
      localStorage.setItem("contactDetails", JSON.stringify(this.allContacts));
      console.log(this.allContacts);
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
    console.log("showFav", this.showFav);
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
</style>
