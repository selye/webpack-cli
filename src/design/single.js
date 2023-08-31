class SingleDog {
  constructor() {
    if (!SingleDog.instance) {
      SingleDog.instance = this;
    }
    return SingleDog.instance;
  }

  show() {
    console.log('我是一个单例对象');
  }
}

const ming = new SingleDog();
const hong = new SingleDog();

// console.log(ming === hong);

function countMatch(text) {
  // 栈后进先出
  const stack = [];
  let count = 0;
  for (const char of text) {
    if (char === '[') {
      stack.push(char);
    } else if (char === ']') {
      if (stack.length > 0) {
        stack.pop();
        count++;
      }
    }
  }
  return count;
}

// 单例storage设计模式
// instance class实例
class Storage {
  constructor() {
    if (!Storage.instance) {
      Storage.instance = this;
    }
    return Storage.instance;
  }

  getItem(key) {
    return `我是获取数据的，我取的是${key}`;
  }
  setItem(key, value) {
    return `我是存储数据的，我存的是${key}，值是${value}`;
  }
}
const storage1 = new Storage();
const storage2 = new Storage();

storage1.setItem('name', '李雷');
const name1 = storage1.getItem('name');
const name2 = storage2.getItem('name');
console.log(name1, name2);
console.log(storage1 === storage2);
