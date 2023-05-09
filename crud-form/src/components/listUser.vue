<template>
    <h1>All USERS</h1>
    <ul v-for="user in user" :key="user.id">
        <li>Name: {{ user.username }} </li>
        <li>Age:  {{ user.age }} </li>
        <li>Contact:  {{ user.contact }} </li>
        <button @click="iscurrentComponent='AddUser'">Edit User</button>
        <button @click="deleteUser(user.id)">Delete User</button>

    </ul>
    <component :is="currentComponent"/>
</template>
<script>
import allUsers from "./allUsers.vue"
export default ({
    name: "allUsers",
    component:{
        allUsers,
    },
    data(){
        return{
            currentComponent: '',
            user: [],
        }
    },
    methods:{
        deleteUser(id){
            // alert(id)
            this.user = this.user.filter(user=> user.id !== id);
            localStorage.setItem('user',JSON.stringify(this.user))
        },
        editUser(id){
            console.log(id);
            this.$emit("edit-user",id)
        }
    },
    mounted(){
            if(localStorage.getItem("user")){
                this.user= JSON.parse(localStorage.getItem("user"));
            }
        }
})
</script>
<style scoped>
ul{
    list-style-type: none;
}
</style>