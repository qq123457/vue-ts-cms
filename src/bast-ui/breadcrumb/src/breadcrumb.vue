<template>
  <el-breadcrumb separator="/">
    <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb.name">
      <el-breadcrumb-item
        v-if="breadcrumb.path"
        :to="{ path: breadcrumb.path }"
      >
        {{ breadcrumb.name }}</el-breadcrumb-item
      >
      <el-breadcrumb-item v-else> {{ breadcrumb.name }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IBreadcrumb } from '../types';
defineProps<{
  breadcrumbs: IBreadcrumb[];
}>();
</script>

<style scoped></style>
