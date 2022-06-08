import { ref } from 'vue';
import WkPageModal from '@/components/page-modal';

type CallbackFn = (item?: any) => void;

export function usePageModal(
  newCallback?: CallbackFn,
  editCallback?: CallbackFn
) {
  const pageModalRef = ref<InstanceType<typeof WkPageModal>>();
  const defaultInfo = ref({});
  const title = ref('');
  const handleNewData = () => {
    newCallback && newCallback();

    defaultInfo.value = {};
    title.value = '新建';
    if (pageModalRef.value) pageModalRef.value.dialogVisible = true;
  };
  const handleEditData = (item: any) => {
    editCallback && editCallback(item);

    defaultInfo.value = { ...item };
    title.value = '编辑';
    // console.log(item);
    if (pageModalRef.value) pageModalRef.value.dialogVisible = true;
  };

  return {
    pageModalRef,
    defaultInfo,
    handleNewData,
    handleEditData,
    title
  };
}
