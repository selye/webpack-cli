// 数据结构

// 栈 stack LIFO
// 后进先出
const stack = [];

stack.push('东北大板');
stack.push('可爱多');
stack.push('巧乐兹');
stack.push('冰工厂');
stack.push('光明奶砖');

while (stack.length) {
  const top = stack[stack.length - 1];
  // console.log('现在是：', top);
  stack.pop();
}

// 队列 FIFO
// 先进先出

// 链表

// ‘Iv’

var romanToInt = function (s) {
  var sub = 0;

  var obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const obj2 = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  var arr = s.split(''); // ['I',"I","I"]
  for (let i = 0; i < arr.length; i++) {
    var sum = obj2[arr[i] + arr[i + 1]];
    if (sum) {
      sub += sum;
      i++;
      continue;
    }
    sub += obj[arr[i]];
  }
  return sub;
};

const result = romanToInt('IV');

// 时间复杂度 执行多少次

const arrList2 = [2, 5, 5, 11];
const sumVal = 10;

/*
map{
  2 0,
  5 1,
  5 2,
  11 3
}

*/

function arraySums(nums, target) {
  const numjMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numjMap.has(target - nums[i])) {
      return [numjMap.get(target - nums[i]), i];
    }
    numjMap.set(nums[i], i);
  }
  return [];
}

// console.log(arraySums(arrList2, sumVal));


//
