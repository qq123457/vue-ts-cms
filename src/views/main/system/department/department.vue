<template>
  <div class="department">
    <div class="search">
      <wk-page-search
        :searchFormConfig="searchFormConfigRef"
        pageName="department"
        @resetBtnClick="handleResetBtnClick"
        @queryBtnClick="handleQueryBtnClick"
      />
    </div>
    <div class="content">
      <wk-page-content
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="department"
        @editBtnClick="handleEditData"
        @newBtnClick="handleNewData"
      ></wk-page-content>
    </div>
    <div class="modal">
      <wk-page-modal
        ref="pageModalRef"
        :modalConfig="modalConfigRef"
        :title="title"
        pageName="department"
        :defaultInfo="defaultInfo"
      ></wk-page-modal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formConfig as searchFormConfig } from './config/search-config';
import { contentTableConfig } from './config/content-config';
import { modalConfig } from './config/modal-config';
import WkPageSearch from '@/components/page-search';
import WkPageContent from '@/components/page-content';
import WkPageModal from '@/components/page-modal';
import { usePageModal } from '@/hooks/usePageModal';
import { usePageSearch } from '@/hooks/usePageSearch';
import { useStore } from '@/store';
import { computed } from 'vue';
const { pageContentRef, handleResetBtnClick, handleQueryBtnClick } =
  usePageSearch();

const { pageModalRef, defaultInfo, handleNewData, handleEditData, title } =
  usePageModal();

const store = useStore();
const usersList = computed(() => store.state.entireUsers);
const departmentList = computed(() => store.state.entireDepartment);
const modalConfigRef = computed(() => {
  const leaderItem = modalConfig.formItems.find(
    (item) => item.field === 'leader'
  );

  const departmentItem = modalConfig.formItems.find(
    (item) => item.field === 'parentId'
  );

  leaderItem!.options = usersList.value.map((item) => ({
    title: item.name,
    value: item.name
  }));
  departmentItem!.options = departmentList.value.map((item) => ({
    title: item.name,
    value: item.id
  }));
  return modalConfig;
});

const searchFormConfigRef = computed(() => {
  const leaderItem = searchFormConfig.formItems.find(
    (item) => item.field === 'leader'
  );

  leaderItem!.options = usersList.value.map((item) => ({
    title: item.name,
    value: item.name
  }));
  return searchFormConfig;
});
</script>

<style lang="scss" scoped>
.search {
  padding: 2rem;
}
</style>
