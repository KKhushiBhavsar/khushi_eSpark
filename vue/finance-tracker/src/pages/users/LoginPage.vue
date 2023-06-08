<template>
  <VContainer class="pa-10">
    <VCard title="Log In" class="pa-10 ma-10">
      <VForm @submit.prevent>
        <VTextField v-model="user.emailId" label="Email Id"></VTextField>
        <VTextField v-model="user.password" label="Password"></VTextField>
        <VBtn type="submit" @click="loggedUser()">Submit</VBtn>
      </VForm>
    </VCard>
  </VContainer>
</template>
<script>
import { loginUser } from "@/services/users/users.services";
export default {
  name: "LoginPage",
  data() {
    return {
      user: {
        emailId: null,
        password: null,
        transactionHistory: null,
      },
    };
  },
  methods: {
    async loggedUser() {
      const isUser = await loginUser(this.user);
      if (isUser) {
        this.$router.push({
          name: "AllTransactions",
        });
      }
    },
  },
};
</script>
