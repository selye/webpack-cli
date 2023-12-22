const arr1 = [1, 2, 3, 0, 0, 0];
const arr2 = [2, 5, 6];
const m = 3;
const n = 3;

const merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n);
  nums1.push(...nums2);
  nums1.sort();
  // [...nums1, ...nums2].sort();
};

var removeElement = function (nums, val) {
  // let newIndex = 0;

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== val) {
  //     nums[newIndex] = nums[i];
  //     newIndex++;
  //   }
  // }
  // return newIndex;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
};

const duplicates = [1, 1, 2];

const removeDuplicates = function (nums) {
  let newIndex = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[newIndex] = nums[i];
    }
  }
  return result;
};

/*
双指针


*/

const mergeFn = function (nums1, m, nums2, n) {
  // 初始两个指针，初始化nums1的尾部索引
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;
  // 当两个数组都没遍历完时，指针同步移动
  while (i >= 0 && j >= 0) {
    // 取较大的值，从末尾往前补
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  //  如果nums2留下的情况
  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }
};

const mer1 = [1, 2, 3, 0, 0, 0],
  mer2 = [2, 5, 6],
  m1 = 3,
  n2 = 3;

const thirdArray = [-1, 0, 1, 2, -1, 4];

/*
str: 八级大级八

*/

var isPalindrome = function (x) {
  const x_str = x + '';

  const len = x_str.length;
  for (let i = 0; i < len / 2; i++) {
    if (x_str[i] !== x_str[len - i - 1]) {
      return false;
    }
  }
  return true;
};

// console.log(isPalindrome(10));

// 链表的本质：处理链表节点之间的指针关系

// 洗牌算法

const sortArr = [1,2,3,4,5,6]
function cashArr(arr){
  for(i = 0; i < arr.length; i++){
    const rand = parseInt(Math.random() * i)  + 1;
    let tmp = arr[i];   // 1
    arr[i] = arr[rand]; // 2
    arr[rand] = tmp
  }
  return arr
}

console.log(cashArr(sortArr))


