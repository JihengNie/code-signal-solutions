function solution(inputArray, k) {
  const totalLoop = inputArray.length + 1 - k;
  const sumArray = [];
  for (let i = 0; i < totalLoop; i++) {
    let temp = 0;
    for (let j = 0; j < k; j++) {
      temp = temp + inputArray[j + i];
    }
    sumArray.push(temp);
    temp = 0;
  }
  return Math.max(...sumArray);
}
