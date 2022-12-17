function solution(sequence) {
  var numberOfBad = 0;
  for (var i = 0; i < sequence.length; i++) {

    if (sequence[i] <= sequence[i - 1]) {
      numberOfBad++;
      if (numberOfBad > 1) return false;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;
    }
  }
  return true;
}
