<template>
  <VContainer class="pa-10">
    <VCard title="Log In" ref="form" class="pa-10 ma-10">
      <VForm ref="form">
        <VTextField
          v-model="user.emailId"
          label="Email Id"
          :rules="userRules.email"
        ></VTextField>
        <VTextField
          v-model="user.password"
          label="Password"
          :rules="userRules.password"
        ></VTextField>
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
import { userLoginRules } from "@/helper/userValidatinRules";
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
      userRules: userLoginRules,
    };
  },
  methods: {
    async loggedUser() {
      const validate = await this.$refs.form.validate();
      if (validate.valid) {
        const isUser = await loginUser(this.user);
        if (isUser) {
          localStorage.setItem(
            "token",
            "3r8wb7frfb347rfb34rfb3749brf9378rfb023tf23"
          );
          this.$router.push({
            name: "AllTransactions",
          });
        }
      }
    },
  },
};
</script>
