<template>
  <div class="user">
    <div class="search">
      <wk-page-search
        :searchFormConfig="searchFormConfig"
        pageName="users"
        @resetBtnClick="handleResetBtnClick"
        @queryBtnClick="handleQueryBtnClick"
      />
    </div>
    <div class="content">
      <wk-page-content
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
      ></wk-page-content>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formConfig as searchFormConfig } from './config/search-config';
import WkPageSearch from '@/components/page-search';
import WkPageContent from '@/components/page-content';
import { contentTableConfig } from './config/content-config';
import { usePageSearch } from '@/hooks/usePageSearch';

const { pageContentRef, handleResetBtnClick, handleQueryBtnClick } =
  usePageSearch();
</script>

<style lang="scss" scoped>
.search {
  padding: 0.5rem 2rem;
}

.content {
  padding: 0 2rem;
}
</style>
