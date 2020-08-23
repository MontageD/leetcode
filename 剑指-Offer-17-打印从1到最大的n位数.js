/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    var _arr=[]
    var a = 1
    var txt = ''
    var arr = Array.apply(null, { length: n }).fill(0);
    arr.map(_=>txt+='0')
    var max = parseInt('1' + txt)
    console.log('max',max)
    while(a < max){
         _arr.push(a)
        a++
      
    }
    return _arr
};


console.log(printNumbers(100))