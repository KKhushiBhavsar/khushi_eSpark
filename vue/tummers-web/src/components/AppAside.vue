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
                        sid: 1,
                        name: 'television',
                        img: require("../assets/imageAndSound/television.jpeg"),                 
                    },
                    {
                        sid: 2,
                        name: 'television Accessories',
                        img: require("../assets/imageAndSound/accessories.jpeg"),
                    },
                    {
                        sid: 3,
                        name: 'home Cinema',
                       img: require("../assets/imageAndSound/homeCinema.jpeg"),
                    },
                    {
                        sid: 4,
                        name: 'speakers',
                        img: require("../assets/imageAndSound/speakers.png"),
                    },
                    {
                        sid: 5,
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
                        sid: 6,
                        name: "laptop",
                        img: require("../assets/computers/laptop.jpeg"),

                    },{
                        sid: 7,
                        name: "tablets",
                        img: require("../assets/computers/tablets.jpeg"),

                    },{
                        sid: 8,
                        name: "Ereaders",
                        img: require("../assets/computers/Ereaders.jpeg"),

                    },{
                        sid: 9,
                        name: "desktop",
                        img: require("../assets/computers/desktop.jpeg"),

                    },{
                        sid: 10,
                        name: "printers",
                        img: require("../assets/computers/printers.jpeg"),

                    },{
                        sid: 11,
                        name: "networks & routers",
                        img: require("../assets/computers/routers.jpeg"),

                    },{
                        sid: 12,
                        name: "peripherals",
                        img: require("../assets/computers/peripherals.jpeg"),
                    },{
                        sid: 13,
                        name:"storage & memory",
                        img: require("../assets/computers/storage.jpeg"),
                    }],
                },
                {
                    id: 3,
                    name: "HouseHoldAndLiving",
                    text: "HouseHold & Living",
                    alt: "HouseHold & Living",
                    img: require('../assets/houseHold.png'),
                    subcategory: [{
                        sid: 14,
                        name: "washing machine",
                        img: require("../assets/household/washingmachine.jpeg"),

                    },{
                        sid: 15,
                        name: "clothes dryer",
                        img: require("../assets/household/clothdryer.jpeg"),

                    },{
                        sid: 16,
                        name: "vaccum cleaners",
                        img: require("../assets/household/vaccumcleaner.jpeg"),

                    },{
                        sid: 17,
                        name: "irons",
                        img: require("../assets/household/iron.jpeg"),

                    },{
                        sid:18,
                        name: "smart homes",
                        img: require("../assets/household/smarthome.jpeg"),

                    },{
                        sid: 19,
                        name: "safety",
                        img: require("../assets/household/safety.jpeg"),

                    },{
                        sid: 20,
                        name: "climate control",
                        img: require("../assets/household/klimaatbeheersing.jpg"),
                    }],
                },
                {
                    id: 4,
                    name: "AppKitchen",
                    text: "kitchen",
                    alt: "kitchen",
                    img: require('../assets/kitchen.png'),
                    subcategory: [{
                        sid: 21,
                        name: "refrigerators",
                        img: require("../assets/kitchen/koelkasten.jpg"),
                    },{
                        sid: 22,
                        name: "Freezers",
                        img: require("../assets/kitchen/vriezers.jpg"),
                    },{
                        name: "Dishwashers",
                        img: require("../assets/kitchen/vaatwassers.jpg"),
                    },{
                        sid: 23,
                        name: "Coffee",
                        img: require("../assets/kitchen/JuraZ10.jpg"),
                    },{
                        sid: 24,
                        name: "Microwaves & Ovens",
                        img: require("../assets/kitchen/magnetrons.jpg"),
                    },{
                        sid: 25,
                        name: "Hobs & Cookers",
                        img: require("../assets/kitchen/kookplaten.jpg"),
                    },{
                        sid: 26,
                        name: "Kitchen machines & mixers",
                        img: require("../assets/kitchen/keukenmachine.jpg"),
                    },{
                        sid: 27,
                        name: "Juices & Drinks",
                        img: require("../assets/kitchen/sappen.jpg"),
                    },{
                        sid: 28,
                        name: "Deep frying",
                        img: require("../assets/kitchen/frituren.jpg"),
                    },{
                        sid: 29,
                        name: "Waffle Irons & Gourmets",
                        img: require("../assets/kitchen/funcooking.jpg"),
                    },{
                        sid: 30,
                        name: "Kitchen appliances",
                        img: require("../assets/kitchen/keukenapparaten.jpg"),
                    },{
                        sid: 31,
                        name: "Kitchenware",
                        img: require("../assets/kitchen/keukengerei.jpg"),
                    },{
                        sid: 32,
                        name: "Cooker hoods",
                        img: require("../assets/kitchen/afzuigkappen.jpg"),
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
                        sid: 33,
                        name: "Shave",
                        img: require("../assets/imageSound.png"),

                    },{
                        sid:34,
                        name: "Hair removal",
                        img: require("../assets/imageSound.png"),

                    },{
                        sid: 35,
                        name: "Hair care",
                        img: require("../assets/imageSound.png"),

                    },{
                        sid: 36,
                        name: "Oral care",
                        img: require("../assets/imageSound.png"),

                    },{
                        sid:37,
                        name: "Health",
                        img: require("../assets/imageSound.png"),

                    },{
                        sid: 38,
                        name: "smartwatch",
                        img: require("../assets/imageSound.png"),

                    },{
                        sid: 39,
                        name: "Baby stuff",
                        img: require("../assets/imageSound.png"),
                    }],
                },
                {
                    id: 6,
                    name: "AllCategories",
                    text: "All Categories",
                    alt: "All Categories",
                    img: require('../assets/allCategories.png'),
                    subcategory: [{}],
                },
            ],
            subcategoriesItems : [{
                sid: 1,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '10000',
                    rating: '4.4',
                    description: 'television description'
                },{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '10000',
                    rating: '4.4',
                    description: 'television description'
                }],
            },
            {
                sid: 2,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '20000',
                    rating: '3.5',
                    description: 'description'
                }]
            },
            {
                sid: 3,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '10000',
                    rating: '3.6',
                    description: 'description'
                }]
            },
            {
                sid: 4,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '10000',
                    rating: '4.0',
                    description: 'description'
                }]
            },
            {
                sid: 5,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '1000',
                    rating: '3.4',
                    description: 'description'
                }]},
            {
                sid: 6,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]
                },
            {
                sid: 7,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 8,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 9,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 10,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 11,
               subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 12,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 13,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 14,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 15,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 16,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 17,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 18,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 19,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 20,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 21,
               subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 22,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 23,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 24,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 25,
               subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 26,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 27,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 28,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 29,
               subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 30,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 31,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 32,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 33,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 34,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]},
            {
                sid: 35,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]
            },
            {
                sid: 36,
               subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]
                },
            {
                sid: 37,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]
                },
            {
                sid: 38,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]
                },
            {
                sid: 39,
                subItems: [{
                    sitem: 1,
                    img: require('../assets/subcategories/televisies.png'),
                    price: '19000',
                    rating: '3.6',
                    description: 'description'
                }]
            }
            ],
        }
    },
    methods: {
        displayContainer(name){
            // alert(name)
            const subCategory = this.categories.find(c => c.name === name).subcategory;     
            const subcategoriesItems = {};  
            subCategory.forEach(i => {
                 subcategoriesItems[i.sid] = this.subcategoriesItems[i.sid-1];
                // console.log("id",this.subcategoriesItems[i.sid-1].sid)                
                // console.log("subitem",subItem)
            });     
            // console.log("subcategoriesItems",subcategoriesItems)
            // console.log("subcategories",subCategory)
            this.displayPage = name;
            this.isShow = false;
            // console.log(this.displayPage)
        
            this.$emit("displayData",{
                isShow: this.isShow,
                subCategory: subCategory,
                subcategoriesItems: subcategoriesItems,
                allItems: this.categories,
                
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
