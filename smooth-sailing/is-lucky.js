function solution(n) {
  var numberAsString = n.toString();
  var lengthOfNumber = n.toString().length;
  var firstHalf = numberAsString.slice(0, (lengthOfNumber) / 2);
  var secondHalf = numberAsString.slice(-(lengthOfNumber) / 2);
  var first = 0;
  var second = 0;
  if (lengthOfNumber % 2 !== 0 || firstHalf.length !== secondHalf.length) {
    return false;
  }
  for (var i = 0; i < firstHalf.length; i++) {
    first = first + parseInt(firstHalf[i], 10);
    second = second + parseInt(secondHalf[i], 10);
  }
  return first === second;
}
