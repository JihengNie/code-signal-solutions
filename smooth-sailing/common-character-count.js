function solution(s1, s2) {
  var object = {};
  var result = 0;
  for (var i = 0; i < s1.length; i++) {
    if (!(s1[i] in object) && isInString(s1[i], s2)) {
      object[s1[i]] = countALetterInAString(s1[i], s1);
    }
  }
  for (var j = 0; j < s2.length; j++) {
    if (s2[j] in object) {
      if (object[s2[j]] > countALetterInAString(s2[j], s2)) { object[s2[j]] = countALetterInAString(s2[j], s2); }
    }
  }
  for (var items in object) {
    result = result + object[items];
  }
  return result;
}

function countALetterInAString(letter, string) {
  var result = 0;
  for (var i = 0; i < string.length; i++) {
    if (letter === string[i]) {
      result++;
    }
  }
  return result;
}

function isInString(letter, string) {
  for (var i = 0; i < string.length; i++) {
    if (letter === string[i]) {
      return true;
    }
  }
  return false;
}
