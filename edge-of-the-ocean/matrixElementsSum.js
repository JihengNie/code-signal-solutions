function solution(matrix) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        for (var k = i + 1; k < matrix.length; k++) {
          matrix[k][j] = 0;
        }
      }
    }
  }

  for (var m = 0; m < matrix.length; m++) {
    for (var n = 0; n < matrix[m].length; n++) {
      sum += matrix[m][n];
    }
  }
  return sum;
}
