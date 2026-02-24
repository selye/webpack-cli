const list = [
  { id: 1, name: 'test1' },
  { id: 2, name: 'test2' },
  { id: 3, name: 'test3' },
];

const mapList = list?.map((item) => [item.id, item]) || [];

const computedMap = new Map(mapList);

// console.log('maptest',mapList,  computedMap);


//斐波那契
const fib =(n) => {
  if(n < 2){
    return n
  }
  return fib(n - 1) + fib(n - 2)
}


// 0 1 1 2 3 5 8 13 21 34 55
// const res = fib(10);
// console.log('fib1', res);

function f(n) {
  if (n === 0) return;
  console.log('start', n);
  f(n - 1);
  console.log('end', n);
}

f(3);
