<template>
  <VContainer class="pa-10">
    <VCard title="Register" class="pa-10 ma-10">
      <VForm ref="form">
        <VTextField
          v-model="user.userName"
          label="User Name"
          :rules="userRules.name"
        ></VTextField>
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
        <VBtn type="submit" @click="registerUser()">Submit</VBtn>
      </VForm>
    </VCard>
  </VContainer>
</template>
<script>
import { userRegistration } from "@/services/users/users.services";
import { userLoginRules } from "@/helper/userValidatinRules";

export default {
  name: "RegisterPage",
  data() {
    return {
      user: {
        userName: null,
        emailId: null,
        password: null,
      },
      userRules: userLoginRules,
    };
  },
  methods: {
    async registerUser() {
      const validate = await this.$refs.form.validate();
      if (validate.valid) {
        userRegistration(this.user);
      }
    },
  },
};
</script>
