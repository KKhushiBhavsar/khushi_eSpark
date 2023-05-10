<template>
    <h1>AllCategories</h1>
    <div class="parent-container">
    <ul v-for="category in allCategories" :key="category.sid">
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
    {{allCategories}}
    
</template>
<script>
export default{
    name : "AllCategories",
     props: {
        subCategory:{
            type: Object,
        },
        subcategoriesItems: {
            type: Object,
        },
        allCategories:{
            type: Object,
        },
    },
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
