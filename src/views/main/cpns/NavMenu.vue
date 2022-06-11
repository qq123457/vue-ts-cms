<template>
  <el-row class="nav">
    <el-col :span="24">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :collapse="!isOn"
        text-color="#fff"
        :default-active="defaultValue"
        unique-opened
      >
        <h2 class="heading-3 nav__title">后台管理</h2>
        <template v-for="nav in userMenu" :key="nav.id">
          <el-sub-menu v-if="nav.type === 1" :index="nav.id + ''">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>{{ nav.name }}</span>
            </template>
            <el-menu-item-group
              v-for="childNav in nav.children"
              :key="childNav.id"
            >
              <el-menu-item
                :index="childNav.id + ''"
                @click="handleNavItemClick(childNav.url)"
              >
                {{ childNav.name }}
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item v-else-if="nav.type === 2" :index="nav.id">
            <el-icon><icon-menu /></el-icon>
            <span>{{ nav.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { computed, defineProps, ref } from 'vue';
import { useStore } from '@/store';
import { Menu as IconMenu } from '@element-plus/icons-vue';
import { useRouter, useRoute } from 'vue-router';
import { pathMapToMenu } from '@/utils/map-menus';
const store = useStore();
const userMenu = computed(() => store.state.login.userMenu);

const route = useRoute();
const currentPath = route.path;

const menu = pathMapToMenu(userMenu.value, currentPath);
const defaultValue = ref(menu.id + '');

defineProps<{
  isOn: boolean;
}>();

// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath);
// };
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath);
// };

const router = useRouter();
// 处理导航点击
const handleNavItemClick = (url: string) => {
  router.push(url);
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: inherit;
  .nav__title {
    color: var(--color--white);
    text-align: center;
    margin: 1rem 0;
  }
}

.el-menu-vertical-demo {
  widows: 100%;
  border: none;
}
</style>
