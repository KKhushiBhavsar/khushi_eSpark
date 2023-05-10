<template>
    <div class="header-parent">
        <div class="header-child">
            <div class="nav-bar">
                <div class="img-logo">
                    <img src="../assets/logo.svg" alt="logo">
                </div>
                <div class="search-bar">
                    <input type="search" name="search" id="search" placeholder="To Search">
                </div>               
                <div class="img-icon img1">
                    <img src="../assets/nav-icon1.svg" alt="icon1">
                </div>
                <div class="img-icon img2">
                    <img src="../assets/nav-icon2.svg" alt="icon2">
                </div>               
            </div>
            <div class="nav-bar-links">
                <div class="menu-range">
                   <!-- <span @click="renderClass('AppAside')"> View Our Range</span> -->
                </div>
                <div class="nav-contact-us">
                    <span class="nav-contact"><img src="../assets/contact-nav.png" alt=""> 124123423</span> 
                    <span class="nav-contact"><img src="../assets/wp-nav.png" alt=""> WhatsApp</span>
                    <span class="nav-contact"><span @click="renderClass('CustomentService')">Customer Service</span></span>
                    <span class="nav-contact">Repair</span>
                   <span class="nav-contact">Commercial</span>
                    <span class="nav-contact">Our Stores</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default ({
    name: 'AppHeader',
    methods:{
        renderClass(page){
            // alert(page)
             this.$emit("displayComponent",{
                isShow: false,
                container: page,
                
            })
        }
    }
})
</script>
<style scoped>
.nav-bar{
    background: rgb(97, 95, 95);
    margin: 0 auto;
    display: flex;
    border: 1px solid green;
    padding: 10px;
}
.img-icon{
    float: left;
    width: 35px;
    border-radius: 20px;
}
.img-logo,.search-bar{
    margin: 10px;
}
.img1{
   margin-left: auto;
   margin-right: 10px
}
#search{
    margin-left: 100px;
   padding: 10px;
    width: 20pc;
    border-radius: 29px;
}
.nav-bar-links{
    padding: 10px;
    background: green;
    color: aliceblue;
    display: flex;
}
.nav-contact-us{
    float: left;
    margin: auto;
}
.nav-contact{
    margin: 0 20px;
}
</style>