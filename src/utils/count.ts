import { useEffect, useRef, useState } from 'react';

/*

  setInterval每次都会setState
  每次setState都会触发页面渲染，函数重新执行

*/

function useCount() {
  const [count, setCount] = useState<number>(10);
  const timerId = useRef<NodeJS.Timeout>();

  function init() {
    if (count === 0) {
      clearInterval(timerId.current);
    } else {
      timerId.current = setInterval(() => {
        setCount((c) => c - 1);
      }, 1000);
    }
  }

  useEffect(() => {
    init();
    return () => clearInterval(timerId.current);
  }, [count]);

  return { count };
}

export default useCount;
