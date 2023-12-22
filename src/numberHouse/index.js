/**
 * 两个数组，如果b数组的元素包含于a数组中，返回a中不存在b中的元素，否则返回空数组
 * 判断b的每一项是否存在与a中
 * 如果存在,找出a中不存在于b中的元素
 * 如果不存在，返回空元素
 * 【1，2，3，4，5，6】
 * 【1，2，3，4，5，6，7，8，9，10】
 *  a.filter(item => b.indexOf(item) === -1)
 * */

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

// 函数柯里化
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}

const sum = (a, b) => a + b;

const sumFn = curry(sum);

// console.log(sumFn(1, 1));

// 递归

const number = 10;
function getSum(number) {
  if (number === 1) {
    return 1;
  }
  return number + getSum(number - 1);
}
// console.log(getSum(number));

const treeData = [
  {
    id: 1,
    name: 'root',
    children: [
      {
        id: 2,
        name: 'child1',
        children: [
          {
            id: 3,
            name: 'grandchild1',
            children: [
              {
                id: 4,
                name: 'greatgrandchild1',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const atob = (aq) => {
  return aq.reduce((flatArray, cur) => {
    flatArray.push(cur);
    if (cur.children.length > 0) {
      flatArray = flatArray.concat(atob(cur.children));
    }
    return flatArray;
  }, []);
};

const result1 = atob(treeData);
console.log(result1);

// 函数柯里化
// function add1(...args) {
//   return args.reduce((sum, cur) => sum + cur, 0);
// }

// function curring(fn) {
//   return function curried(...args) {
//     console.log(fn.length);
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.call(this, ...args, ...args2);
//       };
//     }
//   };
// }

function add1(x, y, z) {
  return x + y + z;
}

function curring(fn) {
  return function curried(...args) {
    console.log(args.length);
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.call(this, ...args, ...args2);
      };
    }
  };
}

const curriedAdd = curring(add1);
const result111 = curriedAdd(1)(2)(3);

// const sumResult = curring(add1);
// console.log(sumResult(1)(2)(3)(4));

// 递归
function getSum(n) {
  if (n === 0) return 0;
  return n * getSum(n - 1);
}
// 函数柯里化

const flatArray = [1, 2, 3, 4, 5, [1, 2, [3, [5], 6, [8, [9]]]]];

const flatFn = (list) => {
  let result = [];
  list.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flatFn(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

let arrObject = [
  {
    id: 1,
    name: 'JJ1',
  },
  {
    id: 2,
    name: 'JJ2',
  },
  {
    id: 1,
    name: 'JJ1',
  },
  {
    id: 4,
    name: 'JJ4',
  },
  {
    id: 2,
    name: 'JJ2',
  },
];

// 对象数组根据属性去重
let uniqueObject = (arr, key) => {
  let result = [];
  let hash = {};
  arr.forEach((item) => {
    hash[item[key]] = item;
  });
  for (let key in hash) {
    result.push(hash[key]);
  }
  return result;
};

const arrNew = uniqueObject(arrObject, 'id');
console.log(arrNew)
