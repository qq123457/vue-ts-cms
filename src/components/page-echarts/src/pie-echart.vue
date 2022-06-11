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
    tooltip: {
      trigger: 'item'
    },
    legend: {
      left: 'center'
      // top: 'bottom'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
});
</script>

<style scoped></style>
