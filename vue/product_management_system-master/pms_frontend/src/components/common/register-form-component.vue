<template>
  <!-- <div class="title">{{ title }}</div> -->
  <!-- <div class="title">Register User</div> -->

  <div class="">
    <v-form ref="formRef" @submit.prevent="onSubmitForm">
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
        :append-icon="showIcon"
        :type="showPassword"
        @click:append="onDisplayPassword"
        :rules="validationSchema.password"
        label="Password"
      ></v-text-field>
      <slot name="extra-field"></slot>
      <v-btn type="submit" block color="blue-grey-darken-4" class="flex-grow-1"
        >Submit</v-btn
      >
      <slot name="btn"></slot>
    </v-form>
  </div>
</template>

<script>
import { validationSchema } from "@/util/validation/form.validation";
import { reactive, ref, computed } from "vue";
export default {
  emits: ["onSubmitForm"],
  props: {
    title: {
      type: String,
      default: "Register Form",
    },
    userData: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const userData = reactive({
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

    const user = computed(() => {
      if (props.userData) {
        Object.keys(props.userData).forEach((key) => {
          userData[key] = props.userData[key];
        });
      }
      return userData;
    });

    const isShowPass = ref(false);
    const formRef = ref(null);

    const onSubmitForm = async () => {
      if (formRef.value.isValid) {
        emit("onSubmitForm", JSON.parse(JSON.stringify(userData)));
      }
    };

    const onDisplayPassword = () => {
      isShowPass.value = !isShowPass.value;
    };

    const showIcon = computed(() => {
      return isShowPass.value ? "mdi-eye" : "mdi-eye-off";
    });

    const showPassword = computed(() => {
      return isShowPass.value ? "text" : "password";
    });
    return {
      user,
      showIcon,
      showPassword,
      validationSchema,
      formRef,
      onSubmitForm,
      onDisplayPassword,
    };
  },
};
</script>
