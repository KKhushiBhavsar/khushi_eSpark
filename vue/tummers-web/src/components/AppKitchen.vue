<template>
    <h1>kitchen</h1>
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

    <ul  v-for="subCategory in subCat" :key="subCategory.sitem">

        <li class="img-item" @click="setSubCategory(subCategory.sitem)">
                <div class="card-container-subcategory">
                    <div class="img-container">
                        <img :src="subCategory.img" class="img">
                    </div>
                    <div class="text-item-subcategory">
                        <p>Price  {{subCategory.price}}</p>  
                        <p>ratings  {{subCategory.rating}}</p>  
                        <p>description  {{subCategory.description}}</p>  
                    </div>
                </div>
            </li>
    </ul>
</div>
</template>
<script>
export default{
    name: "AppKitchen",
    props: {
        subCategory: Object,
        subcategoriesItems: Object,
    },
    data() {
        return {
            IsCategory: true,
            subCat:null,
        }
    },
    methods:{
        setSubCategory(id){
           console.log("id",id)
            this.IsCategory = false;
         Object.entries(this.subcategoriesItems).forEach(item => {
             console.log(" item[1]sid]", item[1]["sid"])
                if(item[1]["sid"] === id)
                {
                    this.subCat=(item[1]["subItems"])
                }
            });

            console.log("subCat",this.subCat)
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
.card-container{
    /* width: 30%; */
    margin: 10px;
}
   
.card-container-subcategory{
 margin: 10px;
    border: 1px solid green;
    padding: 20px;

}
</style>
