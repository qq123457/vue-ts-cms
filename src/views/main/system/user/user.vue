<template>
  <div class="user">
    <div class="search">
      <wk-form v-bind="formConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import WkForm from '@/bast-ui/form';
import { formConfig } from './config/search-config';
</script>

<style lang="scss" scoped>
.search {
  padding: 2rem;
}
</style>
