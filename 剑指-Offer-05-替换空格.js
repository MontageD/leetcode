/**
 * @param {string} s
 * @return {string}
 */
//  示例 1：
// 输入：s = "We are happy."
// 输出："We%20are%20happy."
var replaceSpace = function(s) {
    s= s.replace(/ /g,'%20')
    return s
};

var s = "We are happy."
console.log(replaceSpace(s))