<template>
  <div class="pie-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import BaseEchart from '@/bast-ui/echart';
import { computed } from '@vue/reactivity';
import { defineProps } from 'vue';
import { IDataType } from '../types';
const props = defineProps<{
  data: IDataType[];
}>();
const options = computed(() => {
  return {
    legend: {
      left: 'left'
    },
    // toolbox: {
    //   show: true,
    //   feature: {
    //     mark: { show: true },
    //     dataView: { show: true, readOnly: false },
    //     restore: { show: true },
    //     saveAsImage: { show: true }
    //   }
    // },
    series: [
      {
        name: '类别数据',
        type: 'pie',
        radius: [10, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.data
      }
    ]
  };
});
</script>

<style scoped></style>
