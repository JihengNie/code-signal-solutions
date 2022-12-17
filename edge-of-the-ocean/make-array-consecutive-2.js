function solution(statues) {
  var minNumber = statues[0];
  var maxNumber = statues[0];
  var lengthNumber = statues.length;
  for (var i = 0; i < statues.length; i++) {
    if (minNumber > statues[i]) {
      minNumber = statues[i];
    }
    if (maxNumber < statues[i]) {
      maxNumber = statues[i];
    }
  }
  return maxNumber - minNumber - lengthNumber + 1;
}
