function solution(n) {
  let counter = 0;
  if (n < 10) return counter;
  counter++;
  while (returingDigitSum(n) > 9) {
    counter++;
    n = returingDigitSum(n);
  }
  return counter;
}

function returingDigitSum(num) {
  let temp = 0;
  for (let i = 0; i < num.toString().length; i++) {
    temp = +num.toString()[i] + temp;
  }
  return temp;
}
