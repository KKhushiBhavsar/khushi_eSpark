<template>
  <div class="dialog-box">
    <v-fade-transition hide-on-leave>
      <v-card
        append-icon="$close"
        class="mx-auto"
        elevation="16"
        max-width="999"
        :title="dialogTitle"
      >
        <template v-slot:append>
          <v-btn
            icon="$close"
            color="blue-grey-darken-3"
            variant="text"
            @click="$emit('closeDialogBox')"
          ></v-btn>
        </template>

        <v-divider></v-divider>

        <div class="pa-5 text-center overflow-y-auto" style="height: 400px">
          <slot name="main"></slot>
        </div>

        <v-divider></v-divider>

        <div class="pa-4 text-end">
          <v-btn
            class="text-none"
            color="blue-grey-lighten-4"
            min-width="92"
            rounded
            variant="outlined"
            @click="$emit('closeDialogBox')"
          >
            Close
          </v-btn>
        </div>
      </v-card>
    </v-fade-transition>
  </div>
</template>

<script>
export default {
  emits: ["closeDialogBox"],
  props: {
    dialogTitle: {
      type: String,
      default: "dialog box",
    },
  },
};
</script>

<style scoped>
.dialog-box {
  position: absolute;
  top: 5%;
  right: 5%;
  min-width: 600px;
  z-index: 1;
}
</style>
