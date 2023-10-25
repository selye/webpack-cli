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

function handle() {
  console.log('截流');
}

const btn = document.getElementById('btn');
btn.addEventListener('click', throttle(handle, 1000));
