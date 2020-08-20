/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var arr = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (i != j && (nums[i] + nums[j] == target)) {
        arr = [nums[i], nums[j]];
        break;
      }
    }
    if(arr.length>0){
        break;
    }
  }
  return arr;
};

// 输入：nums = [2,7,11,15], target = 9
// 输出：[2,7] 或者 [7,2]

// twoSum([2, 7, 11, 15], 9);
