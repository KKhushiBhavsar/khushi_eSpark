<template>
<div class="footer">
    <div class="ftr-img">
        <img src="../assets/footer-img.png" alt="" class="img">
    </div>
    <div class="ftr-pt">
        <div class="ftr-pt-i">
            <h3>Be the first to know</h3>
            <p>Get all the latest information about our promotions, products and demonstrations. Sign up now for our newsletter.</p>
        </div>
        <div class="ftr-search">
            <input type="search" name="ftr-search" id="ftrSearch" placeholder="E-mail address">
            <button class="ftr-register">To Register</button>           
            
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'AppFooter',

}
</script>

<style scoped>
.ftr-img {
    background: green;
}

.img {
    margin-left: 35%;
}

.ftr-pt {
    display: flex;
    background: lightgray;
    padding: 20px;
    margin: 10px;
}

.ftr-pt-i {
    width: 30%;
}

#ftrSearch {
    margin-top: 70px;
    margin-left: 70px;
    padding: 7px;
    width: 15pc;
    border-radius: 29px;
}

.ftr-register {
    background: green;
    border-radius: 10px;
    color: aliceblue;
}


</style>
