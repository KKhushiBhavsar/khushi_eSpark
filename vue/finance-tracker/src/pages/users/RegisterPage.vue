<template>
  <VContainer class="pa-10">
    <VCard title="Register" class="pa-10 ma-10">
      <VForm @submit.prevent>
        <VTextField v-model="user.userName" label="User Name"></VTextField>
        <VTextField v-model="user.emailId" label="Email Id"></VTextField>
        <VTextField v-model="user.password" label="Password"></VTextField>
        <VBtn type="submit">Submit</VBtn>
      </VForm>
    </VCard>
  </VContainer>
</template>
<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      user: {
        userName: null,
        emailId: null,
        password: null,
      },
    };
  },
};
</script>
