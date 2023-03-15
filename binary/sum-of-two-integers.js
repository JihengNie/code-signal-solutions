// https://leetcode.com/problems/sum-of-two-integers/

function getSum(a, b) {
  while (a !== 0 && b !== 0) {
    const temp = (a & b) << 1;
    a = a ^ b;
    b = temp;
  }
  return a ^ b;
}

/* eslint-disable */

console.log(getSum(10, 2));
console.log(getSum(14, 20));
