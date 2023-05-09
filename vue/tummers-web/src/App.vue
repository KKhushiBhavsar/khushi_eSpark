<template>
  <app-header/>
   <app-aside v-if="isShowing" @displayData="renderingPage" />
    <component :is="displayComponent" :subCategory="subCategory"> </component>
    <app-footer />
</template>

<script>

import AppAside from './components/AppAside.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import imageAndSound from './components/imageAndSound.vue'
import ComputersAndTablets from './components/ComputersAndTablets.vue'
import HouseHoldAndLiving from './components/HouseHoldAndLiving'
import AppKitchen from './components/AppKitchen.vue'
import SportAndcare from './components/SportAndcare.vue'
import AllCategories from './components/AllCategories.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppAside,
    AppFooter,
    imageAndSound,
    ComputersAndTablets,
    HouseHoldAndLiving,
    AppKitchen,
    SportAndcare,
    AllCategories,
  },
  data(){
    return{
      isShowing: true,
      displayComponent: 'HelloWorld',
      subCategory: null,
    }
  },
  methods:{
    renderingPage({displayPage,isShow,subCategory}){
      console.log(displayPage,isShow)
      this.isShowing = isShow;
      this.displayComponent = displayPage;
      this.subCategory = subCategory;
    }
  }
}
</script>

<style scoped>

</style>
