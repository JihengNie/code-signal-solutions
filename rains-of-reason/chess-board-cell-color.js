function solution(cell1, cell2) {
  var letters = ['temp', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  var numbers = ['temp', '1', '2', '3', '4', '5', '6', '7', '8'];
  var cellLetter1 = letters.indexOf(cell1[0].toLowerCase());
  var cellnumber1 = numbers.indexOf(cell1[1]);
  var cellLetter2 = letters.indexOf(cell2[0].toLowerCase());
  var cellnumber2 = numbers.indexOf(cell2[1]);
  var num = Math.abs(cellLetter1 - cellLetter2) + Math.abs(cellnumber1 - cellnumber2);
  if (num % 2 !== 0) {
    return false;
  }
  return true;
}
