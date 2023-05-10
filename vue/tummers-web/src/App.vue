<template>
  <app-header/>
   <app-aside v-if="isShowing" @displayData="renderingPage" />
    <component :is="displayComponent" :subCategory="subCategory" :subcategoriesItems="subcategoriesItems" :allCategories="allItems"> </component>
    <app-footer />
</template>

<script>

import AppAside from './components/AppAside.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AllCategories from './components/AllCategories.vue'
import AppContent from './components/AppContent.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppAside,
    AppFooter,
    AppContent,
    

    AllCategories,
  },
  data(){
    return{
      isShowing: true,
      displayComponent: 'AppContent',
      subCategory: null,
      subcategoriesItems: null,
      allItems: null,
    }
  },
  methods:{
    renderingPage({displayPage,isShow,subCategory,subcategoriesItems,allItems}){
      console.log(displayPage,isShow)
      this.isShowing = isShow;
      // this.displayComponent = displayPage;
      this.subCategory = subCategory;
      this.subcategoriesItems = subcategoriesItems;
      this.allItems = allItems
      console.log(subcategoriesItems)
    }
  }
}
</script>

<style scoped>

</style>
