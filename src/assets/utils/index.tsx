export const debunceFn = (fn: Function, deley: number) => {
  let timerID: NodeJS.Timeout;
  return function (...arg): void {
    clearInterval(timerID);
    timerID = setTimeout(() => {
      fn.apply(this, arg);
    }, deley);
  };
};

export function throttle(func, delay) {
  let timerId: any;
  return function (...arg) {
    if (!timerId) {
      timerId = setTimeout(() => {
        func.apply(this, arg);
        timerId = null;
      }, delay);
    }
  };
}
