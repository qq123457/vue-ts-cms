<template>
  <div class="nav__header">
    <el-icon :size="25" @click="handleFoldClick">
      <IconMenu />
    </el-icon>
    <div class="content">
      <wk-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu as IconMenu } from '@element-plus/icons-vue';
import userInfo from './userInfo.vue';
import WkBreadcrumb from '@/bast-ui/breadcrumb';
import { ref, defineExpose, defineEmits, computed } from 'vue';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';
import { pathMapBreadcrumbs } from '@/utils/map-menus';
const isOpen = ref(true);

const emit = defineEmits<{
  (e: 'openchange', isOpen: boolean): void;
}>();

const handleFoldClick = () => {
  isOpen.value = !isOpen.value;
  console.log(isOpen.value);
  emit('openchange', isOpen.value);
};

// 面包屑：{name,path}

const route = useRoute();
const store = useStore();
const breadcrumbs = computed(() =>
  pathMapBreadcrumbs(store.state.login.userMenu, route.path)
);

// 为外部组件暴露的方法
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
