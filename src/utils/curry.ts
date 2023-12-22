function curry(func: Function) {
  return function curried(...args: any[]) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2: any[]) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a: number, b: number, c: number) {
  return a + b + c;
}

let currySum = curry(sum);
console.log(currySum(1)(2)(3));

// function getLog(date: Date, importance: string, message: string) {
//   console.log(`[${date.getHours()}:${date.getMinutes}][${importance}]${message}`);
// }

// const log = curry(getLog);






