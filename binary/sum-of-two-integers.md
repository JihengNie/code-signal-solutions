# Sum of two integers
## Problem
Given two integers a and b, return the sum of the two integers without using the operators + and -.

## Solution

```js
function getSum(a, b) {
    while (a !== 0 && b !== 0) {
    const temp = (a & b) << 1;
    a = a ^ b;
    b = temp;
  }
  return a ^ b;
};
```

## Key take aways
* We can add numbers using binary by comparing what the numbers have in common in binary and using the shifting operators
* The exclusive or operator (^) is returns true if an item that in one set which does not appear in another one
