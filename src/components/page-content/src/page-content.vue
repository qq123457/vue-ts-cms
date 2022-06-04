<template>
  <div class="page-content">
    <wk-table
      :listData="listData"
      v-bind="contentTableConfig"
      @selectionChange="handleSelectionChange"
      :dataCount="dataCount"
      v-model:page="pageInfo"
    >
      <!-- 列中的插槽 -->
      <template #enable="scope">
        <el-button :type="scope.row.enable ? 'success' : 'danger'" plain>{{
          scope.row.enable ? '启动' : '禁用'
        }}</el-button>
      </template>
      <template #createAt="scope">
        <strong v-fm-date="'YYYY/MM/DD'">{{ scope.row.createAt }}</strong>
      </template>
      <template #updateAt="scope">
        <strong v-fm-date>{{ scope.row.createAt }}</strong>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button type="primary" size="small" :link="true">
            <el-icon><Edit></Edit></el-icon>
            编辑
          </el-button>
          <el-button type="danger" size="small" :link="true">
            <el-icon><Delete></Delete></el-icon>
            删除
          </el-button>
        </div>
      </template>

      <!-- header 中的插槽 -->
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
        <el-button>
          <el-icon><refresh></refresh></el-icon
        ></el-button>
      </template>
    </wk-table>
  </div>
</template>

<script setup lang="ts">
import { Edit, Delete, Refresh } from '@element-plus/icons-vue';
import { defineProps, defineExpose, ref, watch } from 'vue';
import { computed } from 'vue';
import { useStore } from '@/store';
import WkTable from '@/bast-ui/table';

const props = defineProps<{
  contentTableConfig: any;
  pageName: string;
}>();

const store = useStore();

// 双向绑定pageInfo
const pageInfo = ref({
  currentPage: 0,
  pageSize: 10
});

watch(pageInfo, () => getListData());
// 发送网络请求
const getListData = (queryInfo?: any) => {
  store.dispatch('system/getPageList', {
    pageName: props.pageName,
    queryInfo: {
      offset:
        (pageInfo.value.currentPage ? pageInfo.value.currentPage - 1 : 0) *
        pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  });
};

getListData();

const listData = computed(() =>
  store.getters['system/pageListData'](props.pageName)
);

const dataCount = computed(() =>
  store.getters['system/pageListCount'](props.pageName)
);

const handleSelectionChange = (value: any) => {
  console.log(value);
};

defineExpose({
  getListData
});
</script>

<style lang="scss" scoped></style>
