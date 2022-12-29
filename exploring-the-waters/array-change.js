function solution(inputArray) {
  var result = 0;
  var comparison = inputArray[0];
  for (var i = 1; i < inputArray.length; i++) {
    if (comparison > inputArray[i]) {
      result += comparison - inputArray[i] + 1;
      comparison = comparison + 1;
    } else if (comparison === inputArray[i]) {
      comparison++;
      result++;
    } else {
      comparison = inputArray[i];
    }
  }
  return result;
}
