<template>
    <button @click="currentComponent='allUsers'">View Users</button>
    <button @click="currentComponent='AddUser'">Add User</button>
    <component :is="currentComponent"></component>
</template>
<script>
import allUsers from "./allUsers.vue"
import AddUser from "./AddUser.vue"
export default ({
    name: "homePage ",
    components:{
        allUsers,
        AddUser,
    },
    data(){
        return{
            currentComponent: 'allUsers',
        }
    },
})
</script>
