function solution(inputArray) {
  var product = -1000;
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > product) {
      product = inputArray[i] * inputArray[i + 1];
    }
  }
  return product;
}
