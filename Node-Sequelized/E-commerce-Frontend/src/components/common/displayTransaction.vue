<template>
  {{ wishlistItems }}
  <h1>displayTransaction</h1>
</template>
<script>
export default {
  name: "displayTransaction",
  props: {
    wishlistItems: {
      type: Object,
    },
  },
};
</script>
