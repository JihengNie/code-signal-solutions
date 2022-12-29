function solution(image) {
  var result = [];
  for (var i = 1; i < image.length - 1; i++) {
    var tempRow = [];
    for (var j = 1; j < image[0].length - 1; j++) {
      var num = image[i - 1][j - 1] + image[i - 1][j] + image[i - 1][j + 1] +
        image[i][j - 1] + image[i][j] + image[i][j + 1] +
        image[i + 1][j - 1] + image[i + 1][j] + image[i + 1][j + 1];
      var sum = Math.floor(num / 9);
      tempRow.push(sum);
    }
    result.push(tempRow);
  }
  return result;
}
