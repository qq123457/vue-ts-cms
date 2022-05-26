<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './cpns/LoginPanel.vue';
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background-image: url(@/assets/img/bg.webp);
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
