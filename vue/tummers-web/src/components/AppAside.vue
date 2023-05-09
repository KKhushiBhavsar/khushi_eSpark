<template>

<ul v-for="category in categories" :key="category.id">
    <li class="img-item" @click="displayContainer(category.name)">
        <div>
            <img :src="category.img" :alt="category.alt">
        </div>
        <div class="text-item">
            {{category.text}}
        </div>
    </li>
</ul>
</template>

<script>
export default ({
    name: 'AppAside',
    data() {
        return {
            displayPage: null,
            isShow: true,
            categories: [{
                    id: 1,
                    name: "imageAndSound",
                    text: "Image & Sound",
                    alt: "Image & Sound",
                    img: require("../assets/imageSound.png"),
                    subcategory: [{
                        name: 'television',
                        img: require("../assets/imageAndSound/television.jpeg"),                 
                    },
                    {
                         name: 'television Accessories',
                        img: require("../assets/imageAndSound/accessories.jpeg"),
                    },
                    {
                         name: 'home Cinema',
                       img: require("../assets/imageAndSound/homeCinema.jpeg"),
                    },
                    {
                         name: 'speakers',
                        img: require("../assets/imageAndSound/speakers.png"),
                    },
                    {
                        name: 'hifi & personal audio',
                        img: require("../assets/imageAndSound/speakers.png"),
                    }],
                },
                {
                    id: 2,
                    name: "ComputersAndTablets",
                    text: "Computers & Tablets",
                    alt: "Computers & Tablets",
                    img: require('../assets/computer.png'),
                    subcategory:[{
                        name: "laptop",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "tablets",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "Ereaders",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "desktop",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "printers",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "networks & routers",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "peripherals",
                        img: require("../assets/imageSound.png"),
                    },{
                        name:"storage & memory",
                        img: require("../assets/imageSound.png"),
                    }],
                },
                {
                    id: 3,
                    name: "HouseHoldAndLiving",
                    text: "HouseHold & Living",
                    alt: "HouseHold & Living",
                    img: require('../assets/houseHold.png'),
                    subcategory: [{
                        name: "washing machine",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "clothes dryer",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "vaccum cleaners",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "irons",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "smart homes",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "safety",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "climate control",
                        img: require("../assets/imageSound.png"),
                    }],
                },
                {
                    id: 4,
                    name: "AppKitchen",
                    text: "kitchen",
                    alt: "kitchen",
                    img: require('../assets/kitchen.png'),
                    subcategory: [{
                        name: "refrigerators",
                        img: require("../assets/imageSound.png"),
                    },{
                        name: "Freezers",
                        img: require("../assets/imageSound.png"),
                    },{
                        name: "Dishwashers",
                        img: require("../assets/imageSound.png"),
                    },{
                        name: "Coffee",
                        img: require("../assets/imageSound.png"),
                    },{
                        name: "Microwaves & Ovens",
                        img: require("../assets/imageSound.png"),
                    },{
                        name: "Hobs & Cookers",
                        img: require("../assets/imageSound.png"),
                    },{
                        name: "Kitchen machines & mixers",
                        img: require("../assets/imageSound.png"),
                    },{
                        name: "Juices & Drinks",
                        img: require("../assets/imageSound.png"),
                    },{
                        name: "Deep frying",
                        img: require("../assets/imageSound.png"),
                    },{
                        name: "Waffle Irons & Gourmets",
                        img: require("../assets/imageSound.png"),
                    },{
                        name: "Kitchen appliances",
                        img: require("../assets/imageSound.png"),
                    },{
                        name: "Kitchenware",
                        img: require("../assets/imageSound.png"),
                    },{
                        name: "Cooker hoods",
                        img: require("../assets/imageSound.png"),
                    }
                    ]
                },
                {
                    id: 5,
                    name: "SportAndcare",
                    text: "Sport & care",
                    alt: "Sport & care",
                    img: require('../assets/sportsAndCare.png'),
                    subcategory: [{
                        name: "Shave",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "Hair removal",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "Hair care",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "Oral care",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "Health",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "smartwatch",
                        img: require("../assets/imageSound.png"),

                    },{
                        name: "Baby stuff",
                        img: require("../assets/imageSound.png"),
                    }],
                },
                {
                    id: 6,
                    name: "AllCategories",
                    text: "All Categories",
                    alt: "All Categories",
                    img: require('../assets/allCategories.png')
                },
            ],
        }
    },
    methods: {
        displayContainer(name){
            // alert(name)
            const subCategory = this.categories.find(c => c.name === name).subcategory;
            console.log("subcategories",subCategory.subcategory)
            this.displayPage = name;
            this.isShow = false;
            console.log(this.displayPage)
            this.$emit("displayData",{
                displayPage: this.displayPage,
                isShow: this.isShow,
                subCategory: subCategory,
            })
        }
    }
})
</script>

<style scoped>
ul {
    list-style: none;
}

li {
    margin: 10px;
    padding: 12px;
    /* border: 1px solid rgb(168, 168, 168); */
    width: 20%;
    background: rgb(237 236 236);
    color: rgb(59, 59, 59);
    border-radius: 10px;
}

li :hover {
    color: green;
    cursor: pointer;
}

.img-item {
    display: flex;
}

.text-item {
    margin: 22px;
}
</style>
