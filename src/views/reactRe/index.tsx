import { useEffect, useState } from 'react';
import './index.less';

export default function Picture() {
  const [baActive, setBgActive] = useState<boolean>(true);

  function testArr() {
    let arr = new Array(9999999).fill(1);
    for (let i = 0; i < arr.length; i++) {}

    let i = 0;
    while (i < arr.length) {
      i++;
    }
  }

  const sleep = (duration: number) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(1);
      }, duration),
    );
  };

  function excute(i: unknown) {
    const duration = Math.floor(Math.random() * 100);
    sleep(duration).then(() => {
      // console.log('id' + i);
    });
  }

  let arr: any = [];

  function start(i) {
    arr.push(() => {
      const obj = {};
      obj.toString = () => {
        arr.shift()?.();
        return i;
      };
      excute(obj);
    });

    if (i === 0) {
      arr.shift()();
    }
  }

  for (let i = 0; i < 5; i++) {
    start(i);
  }

  // function start(i) {
  //   excute(test(i));
  // }

  // const sleep = (duration) => {
  //   return new Promise((resolve) =>
  //     setTimeout(() => {
  //       resolve(1);
  //     }, duration),
  //   );
  // };

  // function excute(i) {
  //   const duration = Math.floor(Math.random() * 5000);
  //   sleep(duration).then(() => {
  //     console.log('id' + i);
  //   });
  // }

  // for (let i = 0; i < 5; i++) {
  //   start(i);
  // }

  // var index = 0;

  // function test(i) {
  //   // console.log(i);
  //   return i;
  // }

  // const sleep = (duration: number, callback: () => void) => {
  //   setTimeout(() => {
  //     callback();
  //   }, duration);
  // };

  // function execute(i: number, callback: () => void) {
  //   const duration = Math.floor(Math.random() * 5000);
  //   sleep(duration, () => {
  //     console.log('id' + i);
  //     callback();
  //   });
  // }

  // function start(index: number) {
  //   if (index < 5) {
  //     execute(index, () => {
  //       start(index + 1);
  //     });
  //   }
  // }

  // start(0);

  // 期望结果
  // “id”0
  // “id”1
  // “id”2
  // “id”3
  // “id”4

  return (
    <div
      className={`background ${baActive ? 'background-active' : ''} `}
      onClick={(e) => {
        e.stopPropagation();
        if (baActive) return;
        setBgActive(true);
      }}
    >
      <img
        className={`picture ${baActive ? '' : 'picture-active'}`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://blogs.mbc.co.jp/popo/wp-content/uploads/2023/05/230516_01.jpg"
        onClick={(e) => {
          e.stopPropagation();
          setBgActive(false);
        }}
      />
    </div>
  );
}
