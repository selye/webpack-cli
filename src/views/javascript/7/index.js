/* 迭代器 Iterable */

/* 代理 */

const target = {
  name: 'target',
};

// 参数
function howManyArg() {
  console.log(arguments.length);
}
// howManyArg('a','b','c')
// howManyArg()
// howManyArg(998)

const getSum = (...values) => {
  return values.reduce((pre, cur) => pre + cur, 0);
};
// console.log(getSum(1, 2, 3, 4, 5));

const callSomeFunction = (fn, ...args) => {
  return fn(...args);
};

function add10(num) {
  return num + 10;
}

// console.log(callSomeFunction(add10, 10));

function createComparisonFunction(propertyName) {
  return function (obj1, obj2) {
    const value1 = obj1[propertyName];
    const value2 = obj2[propertyName];
    if (value1 < value2) {
      return -1;
    }
    if (value1 > value2) {
      return 1;
    }
    return 0;
  };
}

const sortData = [
  {
    name:'jack',
    age:18
  },
  {
    name:'mike',
    age:22
  },
  {
    name:'james',
    age:20
  }
]

const sortResult = sortData.sort(createComparisonFunction('age'));
// console.log(sortResult)


function factorial(num){
  if(num == 1){
    return 1
  }
  return num * factorial(num - 1)
}


