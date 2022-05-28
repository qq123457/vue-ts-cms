<template>
  <div class="nav__header">
    <el-icon :size="25" @click="handleFoldClick">
      <IconMenu />
    </el-icon>
    <div class="content">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">promotion management</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
      <user-info />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu as IconMenu } from '@element-plus/icons-vue';
import userInfo from './userInfo.vue';

import { ref, defineExpose, defineEmits } from 'vue';

const isOpen = ref(true);

const emit = defineEmits<{
  (e: 'openchange', isOpen: boolean): void;
}>();

const handleFoldClick = () => {
  isOpen.value = !isOpen.value;
  console.log(isOpen.value);
  emit('openchange', isOpen.value);
};

defineExpose({
  handleFoldClick
});
</script>

<style lang="scss" scoped>
.nav__header {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  background-color: white;
  .content {
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    justify-content: space-between;
  }
}
</style>
