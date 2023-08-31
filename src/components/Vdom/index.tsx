import { useEffect, useRef } from 'react';

export const Vdom = () => {
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (domRef.current) {
      let content = '';
      for (let i = 0; i < 100; i++) {
        content += `我是粉刷匠${i}号`;
      }
      domRef.current.innerHTML = content;
    }
  }, []);

  return <div ref={domRef}></div>;
};
