<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>
<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
</script>
<style lang="scss">
.search {
  padding: 0.5rem 2rem;
}

.content {
  padding: 0 2rem;
}
</style>
