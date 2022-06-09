<template>
  <div class="category">
    <div class="search">
      <wk-page-search
        :searchFormConfig="searchFormConfig"
        pageName="category"
        @reset-btn-click="handleResetBtnClick"
        @query-btn-click="handleQueryBtnClick"
      ></wk-page-search>
    </div>
    <div class="content">
      <wk-page-content
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="category"
        @edit-btn-click="handleEditData"
        @new-btn-click="handleNewData"
      ></wk-page-content>
    </div>
    <div class="modal">
      <wk-page-modal
        ref="pageModalRef"
        :modal-config="modalConfig"
        :defaultInfo="defaultInfo"
        :title="title"
        pageName="category"
      ></wk-page-modal>
    </div>
  </div>
</template>

<script setup lang="ts">
import WkPageSearch from '@/components/page-search';
import WkPageContent from '@/components/page-content';
import WkPageModal from '@/components/page-modal';
import { formConfig as searchFormConfig } from './config/search-config';
import { contentTableConfig } from './config/content-config';
import { modalConfig } from './config/modal-config';
import { usePageSearch } from '@/hooks/usePageSearch';
import { usePageModal } from '@/hooks/usePageModal';

const { pageContentRef, handleResetBtnClick, handleQueryBtnClick } =
  usePageSearch();
const { pageModalRef, defaultInfo, handleNewData, handleEditData, title } =
  usePageModal();
</script>

<style scoped></style>
