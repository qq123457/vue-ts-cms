<template>
  <div class="common-layout">
    <el-container>
      <el-aside
        class="nav__container"
        :width="isOn ? '21rem' : '6rem'"
        translate="soomth"
      >
        <nav-menu :isOn="isOn" />
      </el-aside>
      <el-container class="nav__main">
        <el-header>
          <nav-header @openchange="handleOpenChange" />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavMenu from './cpns/NavMenu.vue';
import NavHeader from './cpns/NavHeader.vue';
import { ref } from 'vue';
const isOn = ref(true);
const handleOpenChange = (isOpen: boolean) => {
  isOn.value = isOpen;
};
</script>

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100vh;
}
.nav__container {
  background-color: var(--bg--nav);
  height: 100vh;
  transition: all 0.3s;
}
</style>
