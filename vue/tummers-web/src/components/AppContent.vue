<template>
<div v-if="IsSubCategory">
    <div class="parent-container" v-if="IsCategory">
        <ul v-for="category in subCategory" :key="category.sid">
            <li class="img-item" @click="setSubCategory(category.sid)">
                <div class="card-container">
                    <div class="img-container">
                        <img :src="category.img" class="img">
                    </div>
                    <div class="text-item">
                        {{category.name}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="parent-container" v-else>
        <button @click="IsCategory=!IsCategory">Back</button>
        <ul v-for="subCategory in subCat" :key="subCategory.sitem">
            <li class="img-item" @click="showDetails(subCategory)">
                <div class="card-container-subcategory">
                    <div class="img-container">
                        <img :src="subCategory.img" class="img">
                    </div>
                    <div class="text-item-subcategory">
                        <p>Price {{subCategory.price}}</p>
                        <p>ratings {{subCategory.rating}}</p>
                        <p>description {{subCategory.description}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
<div v-if="!IsSubCategory">
    <button @click="IsSubCategory=!IsSubCategory">Back</button>
    <div class="parent-details-container">
        <div class="card-container-details">
            <div class="img-container-details">
                <img :src="this.detailItem.img" class="img">
            </div>
            <div class="text-item-subcategory">
                <p>Price {{this.detailItem.price}}</p>
                <p>ratings {{this.detailItem.rating}}</p>
                <p>description {{this.detailItem.description}}</p>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "imageAndSound",
    props: {
        subCategory: Object,
        subcategoriesItems: Object,
    },
    data() {
        return {
            IsCategory: true,
            subCat: null,
            IsSubCategory: true,
            detailItem: [],
        }
    },
    methods: {
        setSubCategory(id) {
            console.log("id", id)
            this.IsCategory = false;
            Object.entries(this.subcategoriesItems).forEach(item => {
                console.log(" item[1]sid]", item[1]["sid"])
                if (item[1]["sid"] === id) {
                    this.subCat = (item[1]["subItems"])
                }
            });

            console.log("subCat", this.subCat)
        },
        showDetails(item) {
            this.IsSubCategory = false;
            this.detailItem = item;
            console.log("item", this.detailItem)
        }
    }
}
</script>

<style scoped>
.img {
    width: 180px;
}

.img-container {
    width: 40%;
}

ul {
    list-style: none;
}

.parent-container {
    display: flex;
    flex-wrap: wrap;
}

.card-container {
    /* width: 30%; */
    margin: 10px;
}

.card-container-subcategory {
    margin: 10px;
    width: 80%;
    /* border: 1px solid green; */
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
.parent-details-container{
    font-size: 16px;
    width: 46%;
    margin: 47px;
    text-align: center;
    padding: 25px;
    color: forestgreen;
    box-shadow: rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px;
}
button{
    width: 100px;
    height: 50px;
    background-color: darkseagreen;
    margin-top: 10px;
}
</style>
