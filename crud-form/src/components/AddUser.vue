<template>
    <h1>Add users</h1>
    <input type="text" placeholder="name" v-model="name">
    <input type="text" placeholder="age" v-model="age">
    <input type="text" placeholder="contact" v-model="contact">
    <button @click="addUser()" :user="user">Add User</button>
    <all-users @user="getUser" />
</template> 
<script>
export default ({
    name: "AddUser",
    props: ['user'],
    data(){
        return{
           
                id:'',
                name: '',
                age: '',
                contact: '',
                users:[],
        }
    },
    created(){            
            let storageValue= JSON.parse(localStorage.getItem("user"));
            if(localStorage.getItem('user')){
                console.log("stored value",storageValue)
                this.users.push(...storageValue)
                console.log("users",this.users)

                // this.users = {
                //     ...this.user,
                //     ...storageValue,
                // }
            }
            // console.log("storageValue",this.users)

        },
    methods:{
        addUser(){
           let  user = {
                id: Date.now().toString(36),
                username: this.name,
                age:this.age,
                contact: this.contact,
            };
            console.log(user);
            this.users.push(user);
            this.$emit("user-list",user)
            // if(!localStorage.getItem('user')){

            //     localStorage.setItem('user', JSON.stringify(this.users));
            // }
            localStorage.setItem('user',JSON.stringify(this.users))
            // console.log(localStorage.getItem('user'))
        },  
        getUser(){
            alert("get user")
        }      
    }
})
</script>
