// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
// [2, 3, 1, 0, 2, 5, 3]




var findRepeatNumber = function(arr) {
    var newarr= []
    for(var j = 0;j < arr.length;j++){
        for(var i = j+1;i < arr.length;i++){
            if(arr[j] == arr[i]){
                newarr.push(arr[i]);
            }
        }
        if(newarr.length>0){
            break;
        }
    } 
    return newarr[0]
};
// console.log(...new Set([0, 1, 2, 3, 4, 11, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))
console.log(findRepeatNumber([0, 1, 2, 3, 4, 11, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))