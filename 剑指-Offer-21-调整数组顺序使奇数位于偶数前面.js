/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  var a = nums.length - 1;
  var b = 0;
  var oddNum = []; // 奇数
  var cenNum = [];
  var eveNum = []; // 偶数
  while (a >= b) {
    if (a == b) {
      cenNum.push(nums[a]);
    } else {
      if (nums[a] % 2 == 0) {
        eveNum.push(nums[a]);
      } else {
        oddNum.push(nums[a]);
      }
      if (nums[b] % 2 == 0) {
        eveNum.push(nums[b]);
      } else {
        oddNum.push(nums[b]);
      }
    }
    a--;
    b++;
  }
  return oddNum.concat(cenNum, eveNum);
};

console.log(exchange([1, 5, 3, 2, 6]));
