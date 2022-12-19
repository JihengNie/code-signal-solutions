function solution(inputArray) {
  var lengthArray = [];
  var maxLength = 0;
  var resultArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    lengthArray.push(inputArray[i].length);
  }
  for (var k = 0; k < lengthArray.length; k++) {
    if (maxLength < lengthArray[k]) {
      maxLength = lengthArray[k];
    }
  }
  for (var j = 0; j < inputArray.length; j++) {
    if (inputArray[j].length === maxLength) {
      resultArray.push(inputArray[j]);
    }
  }
  return resultArray;
}
