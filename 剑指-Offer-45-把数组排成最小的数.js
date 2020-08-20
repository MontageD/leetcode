/**
 * @param {number[]} nums
 * @return {string}
 */

// 示例 1:
// 输入: [10,2]
// 输出: "102"
// 示例 2:
// 输入: [3,30,34,5,9]
// 输出: "3033459"
var minNumber = function(nums) {
    for(let i= 0;i < nums.length-1;i++){
        for(let j = i + 1;j < nums.length;j++){
            let a = nums[i].toString()
            let b = nums[j].toString()
            // 330 > 303 交换
            if( (a+b) > (b+a) ){
                    let temp = nums[i]
                    nums[i] = nums[j]
                    nums[j] = temp
            }
        }
    }
    return nums
};

function PrintMinNumber(numbers) {
    // write code here
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let iStr = numbers[i].toString()
            let jStr = numbers[j].toString()
            if ((iStr + jStr) > (jStr + iStr)) {
                swap(numbers, i, j)
            }
        }
    }
    return numbers.join('')
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(minNumber([3,30,34,1,9]))