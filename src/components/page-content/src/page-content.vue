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

      <template #createAt="scope">
        <strong v-fm-date="'YYYY/MM/DD'">{{ scope.row.createAt }}</strong>
      </template>
      <template #updateAt="scope">
        <strong v-fm-date>{{ scope.row.createAt }}</strong>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            type="primary"
            size="small"
            :link="true"
            v-if="isUpdate"
            @click="handleEditClick(scope.row)"
          >
            <el-icon><Edit></Edit></el-icon>
            编辑
          </el-button>
          <el-button
            type="danger"
            size="small"
            :link="true"
            v-if="isDelete"
            @click="handleDeleteClick(scope.row)"
          >
            <el-icon><Delete></Delete></el-icon>
            删除
          </el-button>
        </div>
      </template>

      <!-- header 中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" v-if="isCreate" @click="handleNewClick"
          >新建</el-button
        >
        <el-button>
          <el-icon><refresh></refresh></el-icon
        ></el-button>
      </template>

      <!-- 跨组件插槽传递 -->

      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </wk-table>
  </div>
</template>

<script setup lang="ts">
import { Edit, Delete, Refresh } from '@element-plus/icons-vue';
import { defineProps, defineExpose, defineEmits, ref, watch } from 'vue';
import { computed } from 'vue';
import { useStore } from '@/store';
import { usePermission } from '@/hooks/usePermission';
import WkTable from '@/bast-ui/table';

const props = defineProps<{
  contentTableConfig: any;
  pageName: string;
}>();
const isCreate = usePermission(props.pageName, 'create');
const isUpdate = usePermission(props.pageName, 'update');
const isDelete = usePermission(props.pageName, 'delete');
const isQuery = usePermission(props.pageName, 'query');
const store = useStore();

// 双向绑定pageInfo
const pageInfo = ref({
  currentPage: 0,
  pageSize: 10
});
let aqueryInfo: any = null;
watch(pageInfo, () => getListData());
// 发送网络请求
const getListData = (queryInfo?: any) => {
  aqueryInfo = queryInfo;
  if (!isQuery) return;
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

const exSlot = ['createAt', 'updateAt', 'handler'];
// 获取其他插槽的名称
const otherPropSlots: any[] = props.contentTableConfig?.propList.filter(
  (item: any) => {
    if (exSlot.includes(item.slotName)) return false;
    return true;
  }
);

// 删除
const handleDeleteClick = (item: any) => {
  store.dispatch('system/deletePageData', {
    pageName: props.pageName,
    id: item.id,
    queryInfo: aqueryInfo
  });
};

const emit = defineEmits<{
  (e: 'newBtnClick'): void;
  (e: 'editBtnClick', value: any): void;
}>();

const handleNewClick = () => {
  emit('newBtnClick');
};
const handleEditClick = (item: any) => {
  emit('editBtnClick', item);
};
defineExpose({
  getListData
});
</script>

<style lang="scss" scoped></style>
