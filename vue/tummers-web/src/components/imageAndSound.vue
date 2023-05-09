<template>
<h1>Image & sound</h1>
<div class="parent-container">
    <ul v-for="category in subCategory" :key="category.id">
        <li class="img-item">
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
</template>

<script>
export default {
    name: "imageAndSound",
    props: ['subCategory'],
    data() {
        return {

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
}
.card-container{
    width: 30%;
    margin: 10px;
}
</style>
