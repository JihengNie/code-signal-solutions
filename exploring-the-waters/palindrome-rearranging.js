function solution(inputString) {
  var letterObject = {};
  var oddCounter = 0;
  var lettersArray = gettingUniqueLettersOfString(inputString);
  for (var i = 0; i < lettersArray.length; i++) {
    letterObject[lettersArray[i]] = countingLetterInString(inputString, lettersArray[i]);
  }
  for (var items in letterObject) {
    if (letterObject[items] % 2 !== 0) {
      oddCounter++;
    }
  }
  if (oddCounter > 1) {
    return false;
  } else {
    return true;
  }
}

function countingLetterInString(string, letter) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++;
    }
  }
  return count;
}

function gettingUniqueLettersOfString(string) {
  var result = [];
  for (var i = 0; i < string.length; i++) {
    if (!checkIfInArray(result, string[i])) {
      result.push(string[i]);
    }
  }
  return result;
}

function checkIfInArray(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (item === array[i]) {
      return true;
    }
  }
  return false;
}
