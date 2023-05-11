<template>
<h1>CustomentService</h1>
<div class="parent-container">
    <div class="nav-service">
       <ul v-for="customerService in service" :key="customerService.id">
        <li @click="displayDetails(customerService.id)">{{customerService.name}}</li>
    </ul>
    </div>
    <div class="displayServices">
    <ul v-for="service in DescService" :key="service.id">
        <h3>{{service.title}}</h3>
        <p>{{service.details}}</p>
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
            DescService: [],
            service: [{
                id: 1,
                name: 'Customer Service',
                details: [{
                    id: 1,
                    title: 'Delivery & Pickup',
                    details: `Can I return my old device? 
                                Can I also pick up a product? 
                                What is the delivery time of my order? 
                                Which delivery options can I choose?`
                }, {
                    id: 2,
                    title: 'Pay',
                    details: `Are the prices shown including or excluding VAT? 
                                Does EP:Tummers offer payment afterwards? 
                                I haven't received a refund yet? 
                                How do you pay me back? 
                                My payment failed or declined? 
                                How can I pay? `
                }]
            }, {
                id: 2,
                name: 'exchange & return',
                details: [{
                    id: 1,
                    title: 'Exchange & return',
                    details: 'How do I ship my products to be returned?'
                }, {
                    id: 2,
                    title: 'Repair & warranty',
                    details: `How long does the repair of my product take?
                            Cost of repair at home outside warranty? 
                            Cost of repair outside warranty? 
                            Register a repair out of warranty? 
                            Register repair within warranty? 
                            Do I have a warranty on my product? 
                            What is the Tummers Service Certificate?`
                }]
            }]
            
        }
    },
    methods:{
        displayDetails(id){
           console.log(id);
           console.log(this.service[id-1].details)
           this.DescService = this.service[id-1].details
        }
    }
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

.nav-service ul :hover {
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
.displayServices{
    border: 1px solid gray;
    margin: 20px;
}
</style>
