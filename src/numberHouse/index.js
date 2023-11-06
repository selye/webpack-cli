/**
 * 两个数组，如果b数组的元素包含于a数组中，返回a中不存在b中的元素，否则返回空数组
 * 判断b的每一项是否存在与a中
 * 如果存在,找出a中不存在于b中的元素
 * 如果不存在，返回空元素
 * 【1，2，3，4，5，6】
 * 【1，2，3，4，5，6，7，8，9，10】
 *  a.filter(item => b.indexOf(item) === -1)
 * */

import { useEffect } from 'react';

/**
 * 1. 判断b数组元素是否全部包含在b数组中，
 * 2. 返回b数组中所有不属于a数组的元素
 *
 *
 *
 */

function chatArray(lista, listb) {
  const setA = new Set(lista);
  const setB = new Set(listb);

  const hasItem = [...setB].every((item) => [...setA].includes(item));

  if (hasItem) {
    const result = [...setA].filter((item) => !setB.has(item));
    return [...result];
  }
  return null;
}

const arr2 = [1, 2, 3, 4, 5, 6];
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = chatArray(arr1, arr2);

// 防抖：只要有函数进来，就会清空之前的函数，重新调用

function debunce(fn, delay = 2000) {
  // let timer = null;
  // return function (...arg) {
  //   if (timer) {
  //     clearTimeout(timer);
  //   }
  //   timer = setTimeout(() => {
  //     fn(...arg);
  //   }, delay);
  // };

  let timer = null;
  return function (...arg) {
    console.log(timer);

    if (timer) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(() => {
        fn(...arg);
      }, delay);
    }
  };
}

// 数组排序

// 节流,无论输入多少次，都以第一次输入的函数为开始，以一定的间隔输出
function throttle(fn, delay = 2000) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn();
        timer = null;
      }, delay);
    }
  };
}

function shopping() {
  console.log('shopping');
}

// 去重
const btn = document.querySelector('#btn');

// btn.addEventListener('click', debunce(shopping));
btn.addEventListener('click', throttle(shopping));
