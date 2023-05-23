<template>
  <h1>Favorites</h1>
  <contactsCard
    v-for="user in showFavorite"
    :key="user.id"
    :user="user"
    :isAddToFavorite="false"
  />
</template>
<script>
// import router from "@/routes";
import contactsCard from "@/components/contactsCard.vue";

export default {
  name: "FavoriteContact",
  components: {
    contactsCard,
  },
  data() {
    return {
      allContacts: (this.allContacts =
        JSON.parse(localStorage.getItem("contactDetails")) || []),
      showFavorite: [],
    };
  },
  created() {
    this.showFavorite = this.allContacts.filter(
      (contacts) => contacts.isFavorite === true
    );
  },
};
</script>
