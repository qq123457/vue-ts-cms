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
        @editBtnClick="handleEditData"
        @newBtnClick="handleNewData"
      >
        <template #enable="scope">
          <el-button :type="scope.row.enable ? 'success' : 'danger'" plain>{{
            scope.row.enable ? '启动' : '禁用'
          }}</el-button>
        </template>
      </wk-page-content>
    </div>
    <wk-page-Modal
      :modalConfig="modalConfigRef"
      ref="pageModalRef"
      pageName="users"
      :defaultInfo="defaultInfo"
      :title="title"
    ></wk-page-Modal>
  </div>
</template>

<script setup lang="ts">
import { formConfig as searchFormConfig } from './config/search-config';
import WkPageSearch from '@/components/page-search';
import WkPageContent from '@/components/page-content';
import WkPageModal from '@/components/page-modal';
import { contentTableConfig } from './config/content-config';
import { modalConfig } from './config/modal-config';
import { usePageSearch } from '@/hooks/usePageSearch';
import { usePageModal } from '@/hooks/usePageModal';
import { useStore } from '@/store';
import { computed } from 'vue';
const { pageContentRef, handleResetBtnClick, handleQueryBtnClick } =
  usePageSearch();

const newCallback = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  );
  passwordItem!.isHidden = false;
};
const editCallback = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  );
  passwordItem!.isHidden = true;
};

const store = useStore();
const modalConfigRef = computed(() => {
  const departmentItem = modalConfig.formItems.find(
    (item) => item.field === 'departmentId'
  );
  const roleItem = modalConfig.formItems.find(
    (item) => item.field === 'roleId'
  );

  departmentItem!.options = store.state.entireDepartment.map((item) => ({
    title: item.name,
    value: item.id
  }));
  roleItem!.options = store.state.entireRole.map((item) => ({
    title: item.name,
    value: item.id
  }));
  return modalConfig;
});

const { pageModalRef, defaultInfo, handleNewData, handleEditData, title } =
  usePageModal(newCallback, editCallback);
</script>

<style lang="scss" scoped>
.search {
  padding: 0.5rem 2rem;
}

.content {
  padding: 0 2rem;
}
</style>
