<template>
  <VCard class="mx-5 my-2 pa-3">
    <VRow>
      <VCol v-for="n in 150" :key="n" cols="1" sm="3" md="2" lg="1">
        <VCard
          @click="
            copyUrl(
              `https://picsum.photos/500/300?image=${n * 5 + 10}${
                isWithColor ? '' : '&grayscale'
              }`
            )
          "
        >
          <VImg
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}${
              isWithColor ? '' : '&grayscale'
            }`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}${
              isWithColor ? '' : '&grayscale'
            }`"
            aspect-ratio="1"
            cover
          >
            <template v-slot:placeholder>
              <VRow class="fill-height ma-0" align="center" justify="center">
                <VProgressCircular
                  indeterminate
                  color="grey-lighten-5"
                ></VProgressCircular>
              </VRow>
            </template>
          </VImg>
        </VCard>
      </VCol>
    </VRow>
  </VCard>
</template>
<script>
export default {
  props: {
    isWithColor: Boolean,
  },
  methods: {
    async copyUrl(url) {
      await navigator.clipboard.writeText(url);
    },
  },
};
</script>
