/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    var num = 1
    var arr = 0
    function sum(){
        num<=n?( function(){
            arr = arr + num ;
            num++ ;
            sum()
        })():''
    }
    sum()
    return arr
};
