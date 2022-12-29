function solution(inputArray) {
  var difference = 0;
  for (var i = 0; i < inputArray.length; i++) {
    if (Math.abs(inputArray[i] - inputArray[i + 1]) > difference) {
      difference = Math.abs(inputArray[i] - inputArray[i + 1]);
    }
  }
  return difference;
}
