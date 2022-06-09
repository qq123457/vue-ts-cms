<template>
  <div class="goods">
    <div class="search">
      <wk-page-search
        :search-form-config="searchFormConfig"
        pageName="goods"
        @reset-btn-click="handleResetBtnClick"
        @query-btn-click="handleQueryBtnClick"
      ></wk-page-search>
    </div>
    <div class="content">
      <wk-page-content
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        page-name="goods"
        @edit-btn-click="handleEditData"
        @new-btn-click="handleNewData"
      >
        <template #image="scope">
          <el-image
            preview-teleported
            style="width: 100px; height: 100px"
            :src="scope.row.imgUrl"
            :preview-src-list="[scope.row.imgUrl]"
            :initial-index="4"
            fit="cover"
          />
        </template>

        <template #status="scope">
          <el-button :type="scope.row.status ? 'success' : 'danger'" plain>{{
            scope.row.status ? '上架' : '下架'
          }}</el-button>
        </template>

        <template #oldPrice="scope">{{ '$' + scope.row.oldPrice }}</template>
        <template #newPrice="scope">{{ '$' + scope.row.newPrice }}</template>
      </wk-page-content>
    </div>
    <div class="modal">
      <wk-page-modal
        ref="pageModalRef"
        :modalConfig="modalConfig"
        :title="title"
        :default-info="defaultInfo"
        page-name="goods"
      ></wk-page-modal>
    </div>
  </div>
</template>

<script setup lang="ts">
import WkPageContent from '@/components/page-content';
import WkPageSearch from '@/components/page-search';
import WkPageModal from '@/components/page-modal';
import { contentTableConfig } from './config/content-config';
import { formConfig as searchFormConfig } from './config/search-config';
import { modalConfig } from './config/modal-config';
import { usePageSearch } from '@/hooks/usePageSearch';
import { usePageModal } from '@/hooks/usePageModal';

const { handleQueryBtnClick, handleResetBtnClick, pageContentRef } =
  usePageSearch();

const { pageModalRef, defaultInfo, handleNewData, handleEditData, title } =
  usePageModal();
</script>

<style scoped></style>
