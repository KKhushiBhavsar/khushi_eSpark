<template>
<h1>CustomentService</h1>
<div class="parent-container">
    <div class="nav-service">
       <ul>
           <li @click="component='CustomerService'">Customer Service</li>
           <li @click="component='ExchangeReturn'">Exchange & Return</li>
           <li @click="component='RepairWarranty'">Repair & warranty</li>
           <li @click="component='DeliveryPickup'">Delivery & Pickup</li>
           <li @click="component='Pay'">Pay</li>
           <li @click="component='SecurityPrivacy'">Security & Privacy</li>
           <li @click="component='ToOrder'">To Order</li>
       </ul>
    </div>
   
</div>
</template>
<script>


export default {
    name: "CustomentService",
    components: {
       
    },
    data() {
        return {
            component: '',
        }
    },
}
</script>

<style scoped>
ul {
    list-style: none;
    display: block;
}

li {
    margin: 10px;
    border: 1px solid gray;
    padding: 10px;
    width: 70%;
    background: gray;
    color: white;
    border-radius: 10px;
}

ul :hover {
    background: gainsboro;
    color: green;
}
.parent-container{
    display: flex;
    /* border: 1px solid black; */
}
.child-component{
    /* border: 1px solid black; */
    width: 90%;
    padding: 10px
}
</style>
