function solution(n, firstNumber) {
  var result = (firstNumber + n / 2) % n;
  return result;
}
