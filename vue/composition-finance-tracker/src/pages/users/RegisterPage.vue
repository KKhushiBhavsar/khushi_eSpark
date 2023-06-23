<template>
  <VContainer class="pa-10">
    <VCard title="Register" class="pa-10 ma-10">
      <VForm @submit.prevent>
        <VTextField v-model="user.userName" label="User Name"></VTextField>
        <VTextField v-model="user.emailId" label="Email Id"></VTextField>
        <VTextField v-model="user.password" label="Password"></VTextField>
        <VBtn type="submit" @click="registerUser()">Submit</VBtn>
      </VForm>
    </VCard>
  </VContainer>
</template>
<script>
import { userRegistration } from "@/services/users/users.services";
import { ref } from "vue";
export default {
  name: "RegisterPage",
  setup() {
    const user = ref({
      userName: null,
      emailId: null,
      password: null,
    });

    const registerUser = () => {
      userRegistration(user);
    };

    return { user, registerUser };
  },
};
</script>
