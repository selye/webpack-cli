import { Button } from 'antd';
import { useEffect, useRef, useState } from 'react';

const str =
  '然后还问了一些项目问题能不能加班因为虽然双休但周一到周五会有3天加班等基本没有问啥原理性的问题就是看基础怎么样能不能干活';

function findMostFrequentChar(str: string) {
  if (str.length === 0) {
    return null; // 字符串为空，返回 null
  }

  const charMap = {}; // 用来存储字符和它们的出现次数

  // 遍历字符串，统计字符出现的次数
  for (const char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  console.log(charMap);

  let maxChar = str[0]; // 假设第一个字符是出现最多的
  let maxCount = charMap[maxChar]; // 假设的字符的出现次数

  // 遍历字符映射表，找到出现次数最多的字符
  for (const char in charMap) {
    if (charMap[char] > maxCount) {
      maxChar = char;
      maxCount = charMap[char];
    }
  }

  return maxChar;
}

export const Vdom = () => {
  const domRef = useRef<HTMLDivElement>(null);

  function getResult(obj) {
    let length = 0;
    const result = Object.values(obj);
    const res = result.reduce((pre, cur) => {
      if (pre.length < cur.length) {
        return cur;
      }
      return pre;
    });
    return res;
  }

  function getStrLength(s: string) {
    let obj = {};
    for (let item of s) {
      if (obj[item]) {
        obj[item].push(item);
      } else {
        obj[item] = [item];
      }
    }

    const result = getResult(obj);

    return result[0];
  }

  const arr1 = [
    [0, 1],
    [2, [3, 4]],
    [5, 6],
  ];

  function flatArray(arr) {}

  useEffect(() => {
    // const result = findMostFrequentChar(str);
    const result = getStrLength(str);
    const resultArr = arr1.flat(2);
    // console.log(resultArr);
    // console.log(result);
  }, []);

  return (
    <div ref={domRef}>
      <Button>修改state</Button>
    </div>
  );
};
