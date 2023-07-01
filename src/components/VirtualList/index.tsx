import { useEffect, useRef, useState } from 'react';
import './index.less';

/* 总数组 */
const listData = Array.from({ length: 10000 }, (_, index) => index);
/* 子项高度 */
const itemSize = 100;
/* 列表总高度 */
const listheight = listData.length * itemSize;

export const VirtualList = () => {
  /* 可视区域 */
  const containerRef = useRef<HTMLDivElement>(null);
  /* 列表数据 */
  /* 每项高度 */
  /* 当前滚动位置 */
  const [scrollTop, setScrollTop] = useState<number>(0);
  /* 可视区域可见子项的数量 */
  const visibleCount = useRef<number>(0);
  const [visibelData, setVisibleData] = useState<number[]>();
  const [startIndex, setStartIndex] = useState<number>(0);
  const [startOffset, setStartOffset] = useState<number>(0);

  useEffect(() => {
    if (containerRef.current) {
      visibleCount.current = Math.ceil(containerRef.current?.clientHeight / itemSize);
    }
  }, []);

  useEffect(() => {
    setVisibleData(listData.slice(startIndex, startIndex + visibleCount.current));
  }, [startIndex]);

  useEffect(() => {
    const nowStart = Math.floor(scrollTop / itemSize);
    setStartIndex(nowStart);
    setStartOffset(scrollTop - (scrollTop % itemSize));
  }, [scrollTop]);

  const scrollEvent = (event: any) => {
    if (containerRef.current) {
      let nowScrollTop = containerRef.current?.scrollTop;
      setScrollTop(nowScrollTop);
    }
  };

  return (
    /* 容器 */
    <div className="virtual-container" ref={containerRef} onScroll={scrollEvent}>
      {/* 容器内的占位，高度为总列表高度，用于形成滚动条 */}
      <div
        className="infinite-list-phantom"
        style={{
          height: listheight + 'px',
        }}
      ></div>
      {/* 列表区域的渲染 */}
      <div
        className="infinite-list"
        style={{
          transform: `translate3d(0, ${startOffset}px,0)`,
        }}
      >
        {visibelData?.map((item, index) => {
          return (
            <div
              key={index}
              className="infinite-list-item"
              style={{
                height: itemSize + 'px',
                lineHeight: itemSize + 'px',
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
