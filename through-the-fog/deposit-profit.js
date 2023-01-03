function solution(deposit, rate, threshold) {
  var newAmount = deposit;
  var counter = 0;
  while (newAmount < threshold) {
    newAmount += (rate * 0.01 * newAmount);
    counter++;
  }
  return counter;
}
