<template>
<div class="parent-container">
    <div class="img-container">
        <slot name="displayImage"></slot>
    </div>
    <div class="details-container">
        <slot name="displayDetails"></slot>
    </div>
</div>
</template>

<script>
export default {
    name: "CategoryComponent",
    props: {
        category: {
            type: Object,
        }
    }
}
</script>

<style scoped>
.img {
    width: 180px;
}

.img-container {
    width: 60%;
}

ul {
    list-style: none;
}

.parent-container {
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    width: 30%;
    margin: 30px;
    text-align: center;
    padding: 20px;
    color: forestgreen;
    box-shadow: rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px;
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

button {
    width: 100px;
    height: 50px;
    background-color: darkseagreen;
    margin-top: 10px;
}
</style>
