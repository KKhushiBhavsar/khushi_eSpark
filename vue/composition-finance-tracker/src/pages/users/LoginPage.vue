<template>
  <VContainer class="pa-10">
    <VCard title="Log In" class="pa-10 ma-10">
      <VForm @submit.prevent>
        <VTextField v-model="user.emailId" label="Email Id"></VTextField>
        <VTextField v-model="user.password" label="Password"></VTextField>
        <VLable
          >Register
          <router-link :to="{ name: 'RegisterPage' }">here</router-link></VLable
        ><br />
        <VBtn type="submit" @click="loggedUser()">Submit</VBtn>
      </VForm>
    </VCard>
  </VContainer>
</template>
<script>
import { loginUser } from "@/services/users/users.services";
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  name: "LoginPage",
  setup() {
    const router = useRouter();
    const user = ref({
      emailId: null,
      password: null,
      transactionHistory: null,
    });
    const loggedUser = async () => {
      const isUser = await loginUser(user);
      if (isUser) {
        router.push({
          name: "AllTransactions",
        });
      }
    };

    return { user, loggedUser };
  },
};
</script>
