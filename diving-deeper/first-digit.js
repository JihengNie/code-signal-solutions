function solution(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    if (parseInt(inputString[i]) || parseInt(inputString[i]) === 0) {
      return inputString[i];
    }
  }
}
