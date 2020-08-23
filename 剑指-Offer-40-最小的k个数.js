/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    return arr.sort((a,b)=>{
        return a - b
    }).slice(0,k)
};
