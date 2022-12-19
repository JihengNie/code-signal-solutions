function solution(a) {
  var result = [];
  var inputArrayWithoutTrees = [];
  for (var j = 0; j < a.length; j++) {
    if (a[j] !== -1) {
      inputArrayWithoutTrees.push(a[j]);
    }
  }

  for (var i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      result.push(a[i]);
    } else {
      var max = Math.min(...inputArrayWithoutTrees);
      result.push(max);
      var index = inputArrayWithoutTrees.indexOf(max);
      inputArrayWithoutTrees.splice(index, 1);
    }
  }
  return result;
}
