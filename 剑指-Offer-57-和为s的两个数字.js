/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var arr = [];
  var a = nums.length-1;
  var b = 0;
  while (a > b) {
    var curSum = nums[a] + nums[b];
    if (curSum == target) {
      arr[0] = nums[a];
      arr[1] = nums[b];
      break;
    } else if (curSum > target) {
      a--;
    } else {
      b++;
    }
  }
  return arr;
};

// 输入：nums = [2,7,11,15], target = 9
// 输出：[2,7] 或者 [7,2]

