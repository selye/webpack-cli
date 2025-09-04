// 节流函数
function throttle(fn, delay) {
  let timer;
  return function () {
    let context = this;
    if (timer) {
      return;
    } else {
      timer = setTimeout(() => {
        fn.call(context, ...arguments);
        timer = null;
      }, delay);
    }
  };
}
function recursivelyCheckEqual(x, ...rest) {
  return Object.is(x, rest[0]) && (rest.length < 2 || recursivelyCheckEqual(...rest));
}

function handle() {
  console.log('截流');
}

const btn = document.getElementById('btn');
btn.addEventListener('click', throttle(handle, 1000));



// factory 模式
const carFactory = (name,price,color) => {
  let car = new Object();
  car.name = name;
  car.price = price;
  car.color = color;
  car.sayName = function(){
    console.log(this.name)
  }
  return car;
}

const mikeCar = carFactory('mike',1000000,'red');
console.log(mikeCar)
mikeCar.sayName();


