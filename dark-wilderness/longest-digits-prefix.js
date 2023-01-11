function solution(inputString) {
  let result = '';
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === ' ') break;
    if (!isNaN(inputString[i])) {
      result += inputString[i];
    } else break;
  }
  return result;
}
