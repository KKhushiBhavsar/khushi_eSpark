<template>
  <VContainer class="pa-10">
    <VCard title="Register" class="pa-10 ma-10">
      <VForm ref="form">
        <VTextField
          v-model="user.name"
          label=" Name"
          :rules="userRules.name"
        ></VTextField>
        <VTextField
          v-model="user.surname"
          label="Surname"
          :rules="userRules.surname"
        ></VTextField>
        <VTextField
          v-model="user.email"
          label="Email Id"
          :rules="userRules.email"
        ></VTextField>
        <VTextField
          v-model="user.password"
          label="Password"
          :rules="userRules.password"
        ></VTextField>

        <VBtn @click="registerUser" type="submit">Submit</VBtn>
      </VForm>
    </VCard>
  </VContainer>
</template>
<script>
import { ref } from "vue";
import { userRegistrationValidation } from "@/helper/user.helper";
import { SignUpUser } from "@/service/fetchapi.service";
export default {
  name: "RegisterPage",
  setup() {
    const user = ref({
      name: null,
      surname: null,
      email: null,
      password: null,
    });
    const userRules = userRegistrationValidation;
    const registerUser = async () => {
      // console.log(user.value);
      try {
        const response = await SignUpUser({
          name: user.value.name,
          surname: user.value.surname,
          email: user.value.email,
          password: user.value.password,
        });
        console.log(response);
        if (response.status === 200) {
          //router push
        }
      } catch (error) {
        if (error.status === 500) {
          console.log("Internal Server Error");
        }
      }
    };
    return { user, registerUser, userRules };
  },
};
</script>
