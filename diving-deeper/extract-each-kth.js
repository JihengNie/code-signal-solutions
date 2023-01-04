function solution(inputArray, k) {
  let i = inputArray.length;
  while (i--) {
    if ((i + 1) % k === 0) {
      (inputArray.splice(i, 1));
    }
  }
  return inputArray;
}
