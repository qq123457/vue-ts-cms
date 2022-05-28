<template>
  <div>
    <el-form ref="elFormRef" :model="form" :rules="rules">
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="form.password" label="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from 'element-plus';
import { ElLoading, ElMessage } from 'element-plus';
import { rules } from '../config/account-config';
import { reactive, defineExpose, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import localCache from '@/utils/cache';

const elFormRef = ref<FormInstance>();
const form = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
});
const store = useStore();
const router = useRouter();

const loginAction = (isKeepPassword: boolean) => {
  elFormRef.value?.validate(async (valid) => {
    if (valid) {
      // 1. 判断是否需要记住密码
      if (isKeepPassword) {
        // 本地缓存
        localCache.setCache('name', form.name);
        localCache.setCache('password', form.password);
      }
      const loading = ElLoading.service({
        lock: true,
        text: '正在登录',
        background: 'rgba(0,0,0,0.5)'
      });
      // 2. 进行登录
      const flag = await store.dispatch('login/accountLoginAction', form);
      loading.close();

      if (flag) {
        ElMessage({
          showClose: true,
          type: 'success',
          message: '登录成功'
        });
        router.push('/main');
      } else
        ElMessage({
          showClose: true,
          type: 'error',
          message: '账号或密码错误'
        });
    }
  });
};
defineExpose({
  loginAction
});
</script>

<style scoped></style>
