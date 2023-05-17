<template>
  <div class="outer"></div>
  <div class="main">
    <div class="close-btn">
      <button @click="$emit('closePopUpBox')">X</button>
    </div>
    <h1><slot name="header"></slot></h1>
    <div class="content"><slot name="content"> </slot></div>
    <div class="right">
      <slot name="footer"> </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "friendList",
  emits: ["closeFriendList"],
};
</script>

<style scoped>
.outer {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
}
.main {
  padding: 20px 30px;
  background-color: rgb(194, 212, 240);
  width: 400px;
  height: 500px;
  position: fixed;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
  top: 100px;
  left: 500px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  z-index: 100;
}
.content {
  height: 300px;
  overflow: auto;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #abc8d3;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(134, 164, 219);
  border-radius: 5px;
}

.close-btn {
  text-align: right;
}
.close-btn button {
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
  font-weight: 600;
}

.right {
  margin: 10px 0;
  text-align: right;
}
</style>
