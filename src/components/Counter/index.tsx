import { debunceFn, throttle } from '@/src/assets/utils';
import { useAppDispatch, useAppSelector } from '@/src/store';
import { decrement, increment } from '@/src/store/counter/counterSlice';

export const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  // async function async1() {
  //   console.log('async1');
  //   await async2();
  //   console.log('async3');
  // }

  // async function async2() {
  //   console.log('async2');
  // }

  // console.log('script1');
  // async1();
  // console.log('script2');

  // async function async1() {
  //   console.log('async1 start');
  //   await async2();
  //   //更改如下：
  //   setTimeout(function () {
  //     console.log('setTimeout1');
  //   }, 0);
  // }
  // async function async2() {
  //   //更改如下：
  //   setTimeout(function () {
  //     console.log('setTimeout2');
  //   }, 0);
  // }
  // console.log('script start');

  // setTimeout(function () {
  //   console.log('setTimeout3');
  // }, 0);
  // async1();

  // new Promise(function (resolve) {
  //   console.log('promise1');
  //   resolve();
  // }).then(function () {
  //   console.log('promise2');
  // });
  // console.log('script end');

  /*
  script start
  async1 start
  promise1
  script end
  promise2
  setTimeout1
  setTimeout2
  setTimeout3
  */

  return (
    <div>
      <p>数字：{count}</p>
      <button
        onClick={debunceFn(() => {
          dispatch(increment());
        }, 2000)}
      >
        防抖
      </button>
      <button
        onClick={throttle(() => {
          dispatch(increment());
        }, 3000)}
      >
        节流
      </button>
    </div>
  );
};
