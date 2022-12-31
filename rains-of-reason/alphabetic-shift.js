function solution(inputString) {
  var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var replacement = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A'];
  var index = 0;
  var result = '';
  for (var i = 0; i < inputString.length; i++) {
    if (letters.includes(inputString[i].toUpperCase())) {
      index = letters.indexOf(inputString[i].toUpperCase());
      result += replacement[index];
    }
  }
  return result.toLowerCase();
}
