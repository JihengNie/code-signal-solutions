function solution(inputArray) {
  var finalJump = 2;
  var maxValue = Math.max(...inputArray);

  while (true) {
    var jump = finalJump;
    for (var i = finalJump; i <= maxValue; i += finalJump) {
      if (inputArray.includes(i)) {
        finalJump++;
        break;
      }
    }
    if (finalJump === jump) {
      return finalJump;
    }
  }
}
