import { FC, memo, useCallback, useEffect, useState } from 'react';

// 通过memo包裹组件，优化重新渲染时间

interface ShippingProps {
  onSubmit?: () => void;
}
const ShippingForm: FC<ShippingProps> = memo(({ onSubmit }) => {
  return <div onClick={onSubmit}>缓存组件</div>;
});

interface ProductProp {
  proId?: number;
  referrer?: string;
  theme?: string;
}

function ProductPage({ proId, theme }: ProductProp) {
  // 每次当them发生变更的时候，submit函数都会重新生成一个不同的函数
  // 通过使用useCallBack缓存函数
  const handleSubmit = useCallback(() => {
    console.log(`proId:${proId}--`);
  }, [proId]);
  return (
    <div className={theme}>
      {/* 同时也会导致 ShippingForm 的props永远都不会相同，并且每次都会重新渲染 */}
      {/*  */}
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

export default ProductPage;
