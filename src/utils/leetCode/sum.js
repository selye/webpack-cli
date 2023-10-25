const nums = [1, 2, 3, 4];
const target = 6;

/*
box{

}
*/

function TwoSum(nums, target) {
  const box = {};
  for (let i = 0; i < nums.length; i++) {
    console.log(box);
    if (box[target - nums[i]] >= 0) {
      return [box[target - nums[i]], i];
    }
    box[nums[i]] = i;
  }
}
