function solution(a) {
  var temp = [];
  for (var i = 0; i < a.length; i++) {
    temp.push(findSmallestDifferences(a[i], a));
  }
  var smallestDifference = Math.min(...temp);
  var index = temp.indexOf(smallestDifference);
  return a[index];
}

function findSmallestDifferences(num, array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(Math.abs(array[i] - num));
  }
  return result.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
}
