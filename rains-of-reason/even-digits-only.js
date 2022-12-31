function solution(n) {
  var nString = n.toString();
  for (var i = 0; i < nString.length; i++) {
    if (parseInt(nString[i], 10) % 2 !== 0) {
      return false;
    }
  }
  return true;
}
