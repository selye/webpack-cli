function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
    console.log(map)
  }

  return [];
}


const map1 = new Map();
map1.set('key1', 'value1');
map1.set('key2', 'value2');
map1.set('key3', 'value3');
const second = map1.get('key2')

console.log('map1', map1, second)





console.log(twoSum([2, 11, 7, 15], 9));
