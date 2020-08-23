/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    if(nums.length==1){
        return nums[0]
    }
    var arr = []
    var map = {}
    for(var i = 0;i<nums.length;i++){
        var chatX = nums[i]
        if(map[chatX]){
            map[chatX]++
        }else{
            map[chatX] = 1
        }
    }
     for(var i = 0;i<nums.length;i++){
         var chatY = nums[i]
         if(map[chatY]==1){
             arr.push(chatY)
         }
     }
    return arr
};

// nums = [4,1,4,6]
console.log(singleNumbers( [4,1,4,6]))