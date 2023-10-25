function curry(func) {
  return function curried() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function () {
        var args2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args2[_i] = arguments[_i];
        }
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
function sum(a, b, c) {
  return a + b + c;
}
var currySum = curry(sum);
// console.log(currySum(1)(2)(3));
// function getLog(date: Date, importance: string, message: string) {
//   console.log(`[${date.getHours()}:${date.getMinutes}][${importance}]${message}`);
// }
// const log = curry(getLog);

/*

call: Function实例的 Call 会以给定的 this值 和逐个提供的参数调用该函数
apply: Function实例的 apply 会以给定的 this值 和作为数组提供的 arg 调用该函数
*/

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

// console.log(new Food('chees', 5));

function greet() {
  console.log(this);
  console.log(this.animal, '的睡眠时间是', this.sleepDuration, '之间');
}

const obj = {
  animal: 'cat',
  sleepDuration: '12到15小时',
};

const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);
// const max = Math.max(...numbers);
// const min = Math.min(...numbers);

const steven = {
  name: 'Steven',
  phoneBattery: 70,
  charge: function (level) {
    this.phoneBattery = level;
  },
};

const backy = {
  name: 'Backy',
  phoneBattery: 30,
};

function getLog(name1) {
  return function (name2, name3) {
    return `${name1}:${name2}:${name3}`;
  };
}

const logs = getLog('https');
const logs2 = logs('www.google.com', '函数');
const logs3 = logs('www.google.com', '柯里化');

// console.log(logs2, logs3);
