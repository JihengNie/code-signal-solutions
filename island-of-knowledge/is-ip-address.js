function solution(inputString) {
  var array = inputString.split('.');
  for (var i = 0; i < array.length; i++) {
    if (!array[i] || containsAnyLetters(array[i]) || array.length !== 4) {
      return false;
    }
    if (parseInt(array[i], 10) < 0 || parseInt(array[i], 10) > 255 || leadingZeroCheck(array[i])) {
      return false;
    }
  }
  return true;
}

function containsAnyLetters(string) {
  return /[a-zA-Z]/.test(string);
}

function leadingZeroCheck(string) {
  if (string[0] == 0 && string.length > 1) {
    return true;
  }
  return false;
}
