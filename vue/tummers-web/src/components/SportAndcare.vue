<template>
    <h1>SportAndcare</h1>
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
export default{
    name:"SportAndcare",
    props: ['subCategory'],
}
</script>
