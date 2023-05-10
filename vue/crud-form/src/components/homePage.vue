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
<style scoped>
button{
    width: 10%;
    height: 40px;
    margin: 10px;
    background-color: rgb(206, 231, 233);
    color: rgb(13, 46, 51);
    border: 2px solid rgb(13, 46, 51);
}
</style>
