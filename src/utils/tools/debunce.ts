// import { throttle } from '@/src/assets/utils';
const useTools = () => {
  // 防抖
  const debunce = (fn, delay = 2000) => {
    let timer: any = null;
    return function () {
      let context = this;
      let args = arguments;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        fn.call(context, ...args);
      }, delay);
    };
  };

  // 节流
  const throttle = (fn: Function, delay = 2000) => {
    let timer: any;
    return function () {
      let args = arguments;
      if (!timer) {
        timer = setTimeout(() => {
          fn(...args);
          timer = null;  // 重置timer
        }, delay);
      }
    };
  };
  return {
    debunce,
    throttle,
  };
};

export default useTools;
