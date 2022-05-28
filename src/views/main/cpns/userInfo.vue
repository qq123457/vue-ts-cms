<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar
        :size="35"
        style="margin-right: 1rem"
        src="https://img1.baidu.com/it/u=2003496092,3295249130&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313"
      />
      {{ name }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
        <el-dropdown-item>用户信息</el-dropdown-item>
        <el-dropdown-item>系统管理</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue';
import { useStore } from '@/store';
import { computed } from '@vue/reactivity';
const store = useStore();
const name = computed(() => store.state.login.userInfo.name);
</script>
<style lang="scss" scoped>
.example-showcase .el-dropdown-link,
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
