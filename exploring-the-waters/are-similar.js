function solution(a, b) {
  var count = 0;
  var temp1 = 0;
  var temp2 = 0;
  var tempArray1 = [];
  var tempArray2 = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count++;
      tempArray1.push(a[i]);
      tempArray2.unshift(b[i]);
      temp1 += a[i];
      temp2 += b[i];
    }
  }
  for (var j = 0; j < tempArray1.length; j++) {
    if (tempArray1[j] !== tempArray2[j]) {
      return false;
    }
  }

  return (count <= 2 && temp1 - temp2 === 0);
}
