<template>
  <VNavigationDrawer expand-on-hover rail>
    <VList>
      <VListItem
        prepend-avatar="https://randomuser.me/api/portraits/women/7.jpg"
        title="Avatar"
        subtitle="abc@123.com"
      ></VListItem>
    </VList>
    <VDivider></VDivider>
    <VList density="compact" nav>
      <VListItem
        prepend-icon="mdi-image"
        title="Color Gallery"
        value="Color"
        @click="isColor(true)"
      ></VListItem>
      <VListItem
        prepend-icon="mdi-image"
        title="GrayScale Gallery"
        value="Color"
        @click="isColor(false)"
      ></VListItem>
    </VList>
  </VNavigationDrawer>
</template>
<script>
export default {
  methods: {
    isColor(color) {
      this.$emit("color", color);
    },
  },
};
</script>
