var findNumberIn2DArray = function (matrix, target) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
};

var findNumberIn2DArray2 = function (matrix, target) {
  for (var i = 0; i < matrix.length; i++) {
    if (matrix[i].findIndex((r) => r === target) !== -1) {
      return true;
    }
  }
  return false;
};
var findNumberIn2DArray3 = function (matrix, target) {
  for (var i = 0, len = matrix.length; i < len; i++) {
    for (var j = 0, len = matrix[i].length; j < len; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
};

console.log(
  findNumberIn2DArray3(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
