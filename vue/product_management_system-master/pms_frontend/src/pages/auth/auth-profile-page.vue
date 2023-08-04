<template>
  <showSliderItemComponent>
    <template v-slot:title> </template>
    <template v-slot:content>
      <v-container v-if="user" class="w-75 my-5">
        <!-- <v-row class="pa-10"> -->
        <v-col cols="12" class="text-center">
          <h1>User Profile</h1>
          <v-form ref="formRef" @submit.prevent="onSaveProfile">
            <v-text-field
              v-model="user.firstName"
              bg-color="blue-grey-lighten-3"
              :rules="validationSchema.name"
              label="FirstName"
            ></v-text-field>
            <v-text-field
              v-model="user.lastName"
              bg-color="blue-grey-lighten-3"
              :rules="validationSchema.name"
              label="LastName"
            ></v-text-field>

            <v-text-field
              v-model="user.contact"
              bg-color="blue-grey-lighten-3"
              :rules="validationSchema.contact"
              label="Contact"
            ></v-text-field>

            <v-select
              v-model="user.gender"
              bg-color="blue-grey-lighten-3"
              :items="['male', 'female', 'other']"
              :rules="validationSchema.isRequired"
              label="Select Gender"
            ></v-select>

            <v-text-field
              v-model="user.email"
              bg-color="blue-grey-lighten-3"
              :rules="validationSchema.email"
              label="E-mail"
            ></v-text-field>

            <v-text-field
              v-model="user.birthDate"
              bg-color="blue-grey-lighten-3"
              type="date"
              label="Birth Date"
              :rules="validationSchema.isRequired"
            ></v-text-field>

            <v-text-field
              v-model="user.city"
              bg-color="blue-grey-lighten-3"
              :rules="validationSchema.name"
              label="City"
            ></v-text-field>

            <v-text-field
              v-model="user.address"
              bg-color="blue-grey-lighten-3"
              :rules="validationSchema.address"
              label="Address"
            ></v-text-field>

            <v-text-field
              v-model="user.password"
              bg-color="blue-grey-lighten-3"
              :counter="8"
              type="password"
              label="Password"
            ></v-text-field>

            <v-btn
              type="submit"
              color="blue-grey-darken-4"
              class="flex-grow-1 ma-3"
              >Save
            </v-btn>
          </v-form>
        </v-col>
        <!-- </v-row> -->
      </v-container>
      <loaderComponent v-else />
    </template>
  </showSliderItemComponent>
</template>

<script>
import showSliderItemComponent from "@/components/ui/show-slider-item-component";
import loaderComponent from "@/components/ui/loader-component";
import { computed, reactive, ref } from "vue";
import { validationSchema } from "@/util";
import { useStore } from "vuex";
import { updateUserInfo } from "@/services";
import { useRouter } from "vue-router";

export default {
  components: {
    showSliderItemComponent,
    loaderComponent,
  },
  setup() {
    const store = useStore();
    const isEditMode = ref(true);
    const formRef = ref(null);
    const router = useRouter();
    const user = computed(() => {
      const userFromStore = store.getters["auth/getUserData"];
      if (userFromStore)
        userFromStore.birthDate = userFromStore.birthDate.slice(0, 10);
      return userFromStore;
    });

    const onToggleEditMode = () => {
      isEditMode.value = false;
    };
    const onGotoHome = () => {
      router.push({ name: "home" });
    };

    const onSaveProfile = async () => {
      try {
        if (formRef.value.isValid) {
          const userObject = reactive({
            firstName: null,
            lastName: null,
            contact: null,
            gender: null,
            email: null,
            birthDate: null,
            city: null,
            address: null,
            password: null,
          });

          Object.keys(userObject).forEach((key) => {
            if (!user.value[key]) {
              delete userObject[key];
            } else {
              userObject[key] = user.value[key];
            }
          });
          console.log(userObject, user.value.password);
          const response = await updateUserInfo(user.value.id, userObject);
          console.log(response);
          router.push({ name: "home" });
        }
      } catch (error) {
        console.log(error);
      }
    };

    return {
      user,
      validationSchema,
      isEditMode,
      onToggleEditMode,
      onSaveProfile,
      formRef,
      onGotoHome,
    };
  },
};
</script>

<style></style>
