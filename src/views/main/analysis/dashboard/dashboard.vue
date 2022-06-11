<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <wk-card title="分类商品数量(饼图)">
          <pie-echart :data="categoryGoodsCount"></pie-echart>
        </wk-card>
      </el-col>
      <el-col :span="10">
        <wk-card title="不同城市商品销量">
          <map-echart :map-data="addressGoodsSale"></map-echart>
        </wk-card>
      </el-col>
      <el-col :span="7">
        <wk-card title="分类商品数量(玫瑰图)">
          <rose-echart :data="categoryGoodsCount"></rose-echart>
        </wk-card>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <wk-card title="分类商品销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </wk-card>
      </el-col>
      <el-col :span="12">
        <wk-card title="分类商品收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </wk-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store';
import WkCard from '@/bast-ui/card';
import {
  RoseEchart,
  PieEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts';
import { computed } from 'vue';
const store = useStore();
// 请求数据
store.dispatch('dashboard/getDashboardDataAction');

const categoryGoodsCount = computed(() =>
  store.state.dashboard.categoryGoodsCount.map((item) => ({
    name: item.name,
    value: item.goodsCount
  }))
);

const categoryGoodsSale = computed(() => {
  const xLabels: string[] = [];
  const value: any[] = [];

  store.state.dashboard.categoryGoodsSale.forEach((item) => {
    xLabels.push(item.name);
    value.push(item.goodsCount);
  });
  return { xLabels, value };
});

const categoryGoodsFavor = computed(() => {
  const xLabels: string[] = [];
  const value: any[] = [];

  store.state.dashboard.categoryGoodsFavor.forEach((item) => {
    xLabels.push(item.name);
    value.push(item.goodsFavor);
  });
  return { xLabels, value };
});

const addressGoodsSale = computed(() => {
  return store.state.dashboard.addressGoodsSale.map((item: any) => ({
    name: item.address,
    value: item.count
  }));
});
</script>

<style scoped>
.dashboard {
  padding: 1rem 2rem 0 2rem;
}
</style>
