function solution(inputString) {
  let counter = 0;
  while (counter < inputString.length) {
    if (inputString[counter] !== inputString[inputString.length - 1 - counter]) {
      return false;
    } else {
      counter++;
    }
  }
  return true;
}
