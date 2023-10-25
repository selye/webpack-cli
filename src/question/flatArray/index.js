const arr = [1, 2, 3, 4, [5, [6, [7, [8, [9]]]]]];

function flatArray(arr) {
  if (!arr.length) return null;
  let resultArr = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (Array.isArray(arr[i])) {
  //     resultArr = resultArr.concat(flatArray(arr[i]));
  //   } else {
  //     resultArr.push(arr[i]);
  //   }
  // }

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      resultArr.push(...flatArray(element));
    } else {
      resultArr.push(element);
    }
  });
  return resultArr;
}

console.log(flatArray(arr));
