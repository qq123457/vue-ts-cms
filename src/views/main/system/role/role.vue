<template>
  <div class="role">
    <div class="search">
      <wk-page-search
        :searchFormConfig="searchFormConfig"
        pageName="role"
      ></wk-page-search>
    </div>
    <div class="content">
      <wk-page-content :contentTableConfig="contentTableConfig" pageName="role">
        <template #createAt="scope">
          <strong>{{ scope.row.createAt }}</strong>
        </template>

        <template #updateAt="scope">
          <strong>{{ scope.row.updateAt }}</strong>
        </template>
      </wk-page-content>
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
  padding: 2rem;
}

.content {
  padding: 0 2rem;
}
</style>
