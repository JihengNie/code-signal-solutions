
function solution(array) {
  const permutation = permutator(array);
  for (let i = 0; i < permutation.length; i++) {
    if (checkConditionForOneArray(permutation[i])) {
      return true;
    }
  }
  return false;
}

function checkConditionForOneArray(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (!diffByOneOrLessChar(array[i], array[i + 1])) {
      return false;
    }
  }
  return true;
}

function diffByOneOrLessChar(str1, str2) {
  let mistakes = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      mistakes++;
    }
  }
  if (mistakes === 1) {
    return true;
  }
  return false;
}

const permutator = inputArr => {
  const result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};
