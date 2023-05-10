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
    border: 1px solid green;
    padding: 20px;

}
.parent-details-container{
    width: 30%;
    margin: 100px;
    padding: 20px;
    border: 1px solid darkolivegreen;
}
</style>
