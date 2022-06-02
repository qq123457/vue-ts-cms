<template>
  <div class="department">
    <div class="search">
      <wk-page-search
        :searchFormConfig="searchFormConfig"
        pageName="department"
      />
    </div>
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import { formConfig as searchFormConfig } from './config/search-config';
import WkPageSearch from '@/components/page-search';
</script>

<style lang="scss" scoped>
.search {
  padding: 2rem;
}
</style>
