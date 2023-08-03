<template>
  <h1>GOOGLE</h1>
  <GoogleLogin :callback="callback" />
</template>
<script>
import { onMounted } from "vue";
import { decodeCredential, googleOneTap } from "vue3-google-login";
export default {
  name: "googleAuth",
  setup() {
    const callback = (response) => {
      const userData = decodeCredential(response.credential);
      console.log("HANDLE THE RESPONSE", userData);
    };
    onMounted(() => {
      googleOneTap({ autoLogin: true })
        .then((response) => {
          console.log("Handle Response!", response);
        })
        .catch((error) => {
          console.log("Handle the Error!", error);
        });
    });
    return { callback };
  },
};
</script>
