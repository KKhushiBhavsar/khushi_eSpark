<template>
  <VApp>
    <SideBar @color="isChangeColor" />
    <VMain>
      <GalleryComponent :isWithColor="isWithColor" />
    </VMain>
  </VApp>
</template>

<script>
import GalleryComponent from "@/components/GalleryComponent.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    GalleryComponent,
    SideBar,
  },
  data() {
    return {
      isWithColor: null,
    };
  },
  methods: {
    isChangeColor(isColor) {
      this.isWithColor = isColor;
    },
  },
};
</script>
