import { Button } from 'antd';

import useHandEdit from '@/src/hooks/useHand';

const HandEdit = () => {
  const { debounceFn } = useHandEdit();

    const btnFn = debounceFn(() => {
        console.log('点击防抖')
    },1000, true)

  return (
    <>
      <Button onClick={btnFn}>test</Button>
    </>
  );
};

export default HandEdit;
