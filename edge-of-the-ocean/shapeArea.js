function solution(n) {
  var area = 0;
  if (n === 1) {
    return 1;
  } else {
    area = (4 * (n - 2)) + 4 + solution(n - 1);
  }
  return area;
}
