<template>
  <div class="menu">
    <div class="content">
      <wk-page-content
        :contentTableConfig="contentTableConfig"
        :pageName="'menu'"
      ></wk-page-content>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formConfig as searchFormConfig } from './config/search-config';
import { contentTableConfig } from './config/content-config';
import WkPageSearch from '@/components/page-search';
import WkPageContent from '@/components/page-content';
</script>

<style lang="scss" scoped>
.search {
  padding: 0.5rem 2rem;
}

.content {
  padding: 0 2rem;
}
</style>
