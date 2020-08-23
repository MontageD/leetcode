/**
 * @param {number} n
 * @return {number}
 */
// var fib = function (n) {
//   if (n > 1) {
//     var num = 0;
//     var arr = [];
//     arr[0] = 0;
//     arr[1] = 1;
//     var reload = function () {
//       if (arr.length == n + 1) {
//       } else {
//         arr.push(
//             ((arr[arr.length - 1]) + (arr[arr.length - 2]))  % 1000000007
//             );
//         reload();
//       }
//     };
//     reload();
//     return arr[n];
//   } else {
//     return n == 1 ? 1 : 0;
//   }
// };
 var fib = function (n) {
     let arr = [0,1]
    for(var i = 0;i<n;i++){
        arr[i+2] =  (arr[i+1] + arr[i]) %1000000007;
    }
    return arr[n]
 }
console.log(fib(45));
