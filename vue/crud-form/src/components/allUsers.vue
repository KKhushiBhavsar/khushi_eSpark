<template>
<h1>All USERS</h1>
<div v-if="IsUser">
    <ul v-for="user in user" :key="user.id">
        <div class="user-container">
            <li>Name: {{ user.username }} </li>
            <li>Age: {{ user.age }} </li>
            <li>Contact: {{ user.contact }} </li>
            <button @click="IsUser=false">Edit User</button>
            <button @click="deleteUser(user.id)">Delete User</button>

        </div>
    </ul>
</div>
<div v-else>
<component :is="AddUser" />
</div>

</template>

<script>
import AddUser from "./AddUser.vue";
import allUsers from "./allUsers.vue"

export default ({
    name: "allUsers",
    component: {
        allUsers,
        AddUser
    },
    data() {
        return {
            currentComponent: 'AddUser',
            user: [],
            IsUser: true,
        }
    },
    methods: {
        deleteUser(id) {
            // alert(id)
            this.user = this.user.filter(user => user.id !== id);
            localStorage.setItem('user', JSON.stringify(this.user))
        },
        editUser(id) {
            console.log(id);
            this.$emit("edit-user", id)
        }
    },
    mounted() {
        if (localStorage.getItem("user")) {
            this.user = JSON.parse(localStorage.getItem("user"));
        }
    }
})
</script>

<style scoped>
ul {
    list-style-type: none;
}

.user-container {
    width: 40%;
    border: 2px solid rgb(4, 18, 19);
    background-color: rgb(206, 231, 233);
    padding: 10px;
    text-align: center;
    color: rgb(13, 46, 51);
    border-radius: 10px;

}
</style>
