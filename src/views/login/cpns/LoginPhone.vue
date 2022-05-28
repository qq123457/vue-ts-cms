<template>
  <div>
    <el-form :model="form">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="form.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input style="width: 30%" type="password" v-model="form.code" />
        <el-button style="flex: 1; margin-left: 1rem" type="primary"
          >获取验证码</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose } from 'vue';
const form = reactive({
  num: '',
  code: ''
});
const loginAction = () => {
  console.log('phone 正在登录');
};
defineExpose({
  loginAction
});
</script>

<style scoped></style>
