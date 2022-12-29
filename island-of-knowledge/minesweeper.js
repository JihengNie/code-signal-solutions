function solution(matrix) {
  var result = [];
  for (var i = 0; i < matrix.length; i++) {
    var tempArray = [];
    for (var j = 0; j < matrix[i].length; j++) {
      var count = 0;
      if (i > 0) {
        if (matrix[i - 1][j]) {
          count++;
        }
        if (matrix[i - 1][j + 1]) {
          count++;
        }
        if (matrix[i - 1][j - 1]) {
          count++;
        }
      }
      if (i < matrix.length - 1) {
        if (matrix[i + 1][j]) {
          count++;
        }
        if (matrix[i + 1][j + 1]) {
          count++;
        }
        if (matrix[i + 1][j - 1]) {
          count++;
        }
      }
      if (matrix[i][j + 1]) {
        count++;
      }
      if (matrix[i][j - 1]) {
        count++;
      }
      tempArray.push(count);
    }
    result.push(tempArray);
  }

  return result;
}
