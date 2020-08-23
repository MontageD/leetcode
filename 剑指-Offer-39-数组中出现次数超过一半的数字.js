/**
 * @param {number[]} nums
 * @return {number}
 */

// 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
// 输出: 2
var majorityElement = function(arr) {
    var init = ''
    if(arr.length==1){
        return arr[0]
    }
    var map = {}
    for(var i=0;i< arr.length;i++){
        var chatX = arr[i]
        if(!map[chatX]){
            map[chatX] = 1
        }else{
            map[chatX]++
        }
    }

    for(var i =0;i<arr.length;i++){
        var chatY = arr[i]
        if(map[chatY] > (arr.length/2)){
            init = chatY
            break;
        }
    }
    return init
};




console.log(majorityElement([8,8,7,7,7]))