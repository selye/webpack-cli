// console.log('1');

// setTimeout(function () {
//   console.log('2');
// }, 1000);

// new Promise((resolve) => {
//   console.log('3');
//   resolve();
//   console.log('4');
// }).then(() => {
//   console.log('5');
// });

// console.log('6');

/**
 * 宏 1
 * 微 3
 * 宏 2
 * 微 宏 4
 * 微 5
 * 宏 6
 *
 */

// console.log('script start');

// async function async1() {
//   await async2();
//   console.log('async1 end');
// }
// async function async2() {
//   console.log('async2 end');
// }
// async1();

// setTimeout(function () {
//   console.log('setTimeout');
// }, 0);

// new Promise((resolve) => {
//   console.log('Promise');
//   resolve();
// })
//   .then(function () {
//     console.log('promise1');
//   })
//   .then(function () {
//     console.log('promise2');
//   });

// console.log('script end');

/**
 * script start
 * async2 end
 * console.log('Promise')
 * script end
 * async1 end
 * promise1
 * promise2
 * setTimeout
 */

// class Stack {
//   constructor() {
//     this.items = [];
//   }
//   in(value) {
//     // 添加
//     this.items.push(value);
//   }
//   out() {
//     // 推出
//     return this.size() === 0 ? null : this.items.pop();
//   }
//   top() {
//     // 顶部元素
//     return this.size() === 0 ? null : this.items[this.size() - 1];
//   }
//   size() {
//     // 大小
//     return this.items.length;
//   }
// }

// const stack = new Stack();

// stack.in('1');
// stack.in('2');
// stack.in('3');

// console.log(stack.top()); // 3
// console.log(stack.size()); // 3
// console.log(stack.out()); // 3
// console.log(stack.top()); // 2
// console.log(stack.size()); //2
const sleep = (time) =>
  new Promise((resolve) =>
    setTimeout(
      resolve({
        name: '小红',
      }),
      time,
    ),
  );

async function checkNumber(number) {
  try {
    const person = await sleep(1000);
    console.log('name', person.name);
    if (person.name === '小白') {
      console.log('哈哈哈');
    } else if (person.name === '小黑') {
      console.log('好好好');
    }
  } catch (error) {
    console.log(error);
  }
}

async function showRes() {
  await checkNumber(30);
  console.log('结果123');
}

showRes();
