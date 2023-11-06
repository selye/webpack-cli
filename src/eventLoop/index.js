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

// /**
//  * 1
//  * 3
//  * 4
//  * 6
//  * 5
//  * 2
//  */

class Stack {
  constructor() {
    this.items = [];
  }
  in(value) {
    // 添加
    this.items.push(value);
  }
  out() {
    // 推出
    return this.size() === 0 ? null : this.items.pop();
  }
  top() {
    // 顶部元素
    return this.size() === 0 ? null : this.items[this.size() - 1];
  }
  size() {
    // 大小
    return this.items.length;
  }
}

const stack = new Stack();

stack.in('1');
stack.in('2');
stack.in('3');

console.log(stack.top()); // 3
console.log(stack.size()); // 3
console.log(stack.out()); // 3
console.log(stack.top()); // 2
console.log(stack.size()); //2
