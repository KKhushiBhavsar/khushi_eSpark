<template>
<h1>CustomentService</h1>
<div class="parent-container">
    <div class="nav-service">
        <ul>
            <li @click="component='CustomerAndService'">Customer Service</li>
            <li @click="component='ExchangeReturn'">Exchange Return</li>
            <li @click="component='RepairWarranty'">Repair & warranty</li>
        </ul>
    </div>
    <div class="child-component">
        <component :is="component"></component>
    </div>
</div>
</template>

<script>
import CustomerAndService from './CustomerAndService.vue'
import ExchangeReturn from './ExchangeReturn.vue'
import RepairWarranty from './RepairWarranty.vue'

export default {
    name: "CustomentService",
    components: {
        CustomerAndService,
        ExchangeReturn,
        RepairWarranty
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
