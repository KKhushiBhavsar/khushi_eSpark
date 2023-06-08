<template>
  <HeaderComponent />
  <router-view />
</template>
<script>
import HeaderComponent from "@/components/common/HeaderComponent";

export default {
  name: "HomePage",
  components: {
    HeaderComponent,
  },
};
</script>
