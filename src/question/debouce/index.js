// 防抖函数

function debunce(fn, delay = 2000) {
  var timer;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn.call(context, ...args);
    }, delay);
  };
}

const btn = document.getElementById('btn');

function handle() {
  console.log(this);
  console.log('发送网络请求');
}

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getName = () => {
    return this.name;
  };
}
const ming = new Person('ming', 20);

// btn.addEventListener('click', debunce(handle, 2000));
btn.addEventListener('click', function () {
  handle();
});
