<template>
  <div class="login__panel">
    <h2 class="login__title heading-2">后台管理系统</h2>
    <el-tabs
      class="login__tabs"
      type="border-card"
      :stretch="true"
      v-model="selectedTabs"
    >
      <el-tab-pane label="账号登录" name="account">
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="手机登录" name="phone">
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="login__control">
      <el-checkbox v-model="isKeepPassword" style="color: #fff">
        记住密码
      </el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login__button" @click="handleLoginClick">
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import LoginAccount from './LoginAccount.vue';
import LoginPhone from './LoginPhone.vue';
import { ref } from 'vue';

const isKeepPassword = ref(true);
const accountRef = ref<InstanceType<typeof LoginAccount>>();
const phoneRef = ref<InstanceType<typeof LoginPhone>>();
const selectedTabs = ref('account');
const handleLoginClick = () => {
  switch (selectedTabs.value) {
    case 'account':
      accountRef.value?.loginAction(isKeepPassword.value);
      break;
    case 'phone':
      phoneRef.value?.loginAction();
      break;
  }
};
</script>

<style lang="scss" scoped>
.login {
  &__panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 32rem;
    transform: translateY(-50%);
  }

  &__title {
    color: var(--color--white);
  }

  &__tabs {
    width: 100%;
    margin-top: 2rem;
    // background-color: raga(var(--color--white), 0.9);
  }

  &__control {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__button {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
