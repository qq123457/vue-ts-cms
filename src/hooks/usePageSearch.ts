import WkPageContent from '@/components/page-content';
import { ref } from 'vue';
export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof WkPageContent>>();
  // 处理查询，处理重置
  const handleResetBtnClick = () => {
    pageContentRef.value?.getListData();
  };
  const handleQueryBtnClick = (queryInfo: any) => {
    pageContentRef.value?.getListData(queryInfo);
    console.log(queryInfo);
  };

  return { pageContentRef, handleResetBtnClick, handleQueryBtnClick };
}
