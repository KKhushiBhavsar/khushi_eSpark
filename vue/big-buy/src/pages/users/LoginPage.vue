<template>
  <VContainer class="pa-10">
    <VCard title="Log In" class="pa-10 ma-10">
      <VForm ref="form">
        <VTextField v-model="user.emailId" label="Email Id"></VTextField>
        <VTextField
          v-model="user.password"
          label="Password"
          :rules="userRules.password"
        ></VTextField>
        <VBtn @click="loggedUser($event)" type="submit">Login</VBtn>
      </VForm>
    </VCard>
  </VContainer>
</template>
<script>
import { userLoginValidation } from "@/helper/user.helper";
import { LogInUser } from "@/service/fetchapi.service.ts";
import { ref } from "vue";
export default {
  name: "LoginPage",
  setup() {
    const user = ref({
      emailId: null,
      password: null,
    });
    const userRules = ref(userLoginValidation);
    const loggedUser = async (event) => {
      event.preventDefault();
      console.log(user.value.emailId);
      console.log(user.value.password);
      try {
        const response = await LogInUser({
          email: user.value.emailId,
          password: user.value.password,
        });
        console.log(response.data.data);
        localStorage.setItem("token", JSON.stringify(response.data.data));
        if (response.status === 201) {
          //router.push
        }
        console.log(response);
      } catch (error) {
        if (error.status === 500) {
          console.log("internal server error");
        }
      }
    };
    return { user, loggedUser, userRules };
  },
};
</script>
