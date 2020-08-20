/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
// 输入: s = "abcdefg", k = 2
// 输出: "cdefgab"
var reverseLeftWords = function(s, n) {
    var txt = s.substring(0,n)
    var initxt = s.substring(n)
    return initxt+txt
};