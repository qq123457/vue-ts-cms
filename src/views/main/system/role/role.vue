<template>
  <div class="role">
    <div class="search">
      <wk-page-search
        :searchFormConfig="searchFormConfig"
        pageName="role"
        @resetBtnClick="handleResetBtnClick"
        @queryBtnClick="handleQueryBtnClick"
      ></wk-page-search>
    </div>
    <div class="content">
      <wk-page-content
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="role"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      >
        <template #createAt="scope">
          <strong>{{ scope.row.createAt }}</strong>
        </template>

        <template #updateAt="scope">
          <strong>{{ scope.row.updateAt }}</strong>
        </template>
      </wk-page-content>
    </div>

    <div class="modal">
      <wk-page-modal
        :modalConfig="modalConfig"
        pageName="role"
        :title="title"
        :defaultInfo="defaultInfo"
        ref="pageModalRef"
        :otherInfo="otherInfo"
      >
        <el-tree
          ref="elTreeRef"
          style="padding: 0px 20px"
          :data="menus"
          show-checkbox
          :defaultCheckedKeys="defaultChecked"
          node-key="id"
          @check="handlerCheckChange"
          highlight-current
          :props="{ label: 'name', children: 'children' }"
        />
      </wk-page-modal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formConfig as searchFormConfig } from './config/search-config';
import { usePageSearch } from '@/hooks/usePageSearch';
import { contentTableConfig } from './config/content-config';
import { modalConfig } from './config/modal-config';
import WkPageSearch from '@/components/page-search';
import WkPageContent from '@/components/page-content';
import WkPageModal from '@/components/page-modal';
import { usePageModal } from '@/hooks/usePageModal';
import { useStore } from '@/store';
import { computed, ref } from 'vue';
import { getMenuLeafKeys } from '@/utils/map-menus';

const { pageContentRef, handleResetBtnClick, handleQueryBtnClick } =
  usePageSearch();

const defaultChecked = ref<number[]>();
const newCallback = () => {
  defaultChecked.value = [];
};
const editCallback = (item: any) => {
  const leafKeys: number[] = getMenuLeafKeys(item.menuList);
  // 当dom渲染完成后，在执行该步骤
  defaultChecked.value = leafKeys;
};
const { pageModalRef, defaultInfo, handleNewData, handleEditData, title } =
  usePageModal(newCallback, editCallback);

const store = useStore();
const menus = computed(() => store.state.entireMenu);
const otherInfo = ref({});

const handlerCheckChange = (data1: any, data2: any) => {
  const checkedKeys = data2.checkedKeys;
  const halfCheckedKeys = data2.halfCheckedKeys;
  const menuList = [...checkedKeys, ...halfCheckedKeys];
  otherInfo.value = { menuList: menuList };
};
</script>

<style lang="scss" scoped>
.search {
  padding: 2rem;
}

.content {
  padding: 0 2rem;
}
</style>
