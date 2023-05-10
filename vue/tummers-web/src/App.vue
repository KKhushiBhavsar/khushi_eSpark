<template>
<app-header @displayComponent="renderComponent" />
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
import CustomentService from './components/CustomentService.vue'

export default {
    name: 'App',
    components: {
        AppHeader,
        AppAside,
        AppFooter,
        AppContent,
        AllCategories,
        CustomentService,
    },
    data() {
        return {
            isShowing: true,
            displayComponent: 'AppContent',
            subCategory: null,
            subcategoriesItems: null,
            allItems: null,
        }
    },
    methods: {
        renderingPage({
            isShow,
            subCategory,
            subcategoriesItems,
            allItems
        }) {
            this.isShowing = isShow;
            // this.displayComponent = displayPage;
            this.subCategory = subCategory;
            this.subcategoriesItems = subcategoriesItems;
            this.allItems = allItems

            console.log(subcategoriesItems)
        },
        renderComponent({
            isShow,
            container
        }) {
            this.isShowing = isShow
            this.displayComponent = container
        }
    }
}
</script>

<style scoped>

</style>
