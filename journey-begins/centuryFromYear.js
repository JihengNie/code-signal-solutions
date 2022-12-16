function solution(year) {
  var result = 0;
  if (year <= 100) {
    return 1;
  } else if (Number.isInteger(year / 100)) {
    return year / 100;
  } else {
    return Math.floor(year / 100) + 1;
  }
}
