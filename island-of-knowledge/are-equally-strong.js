function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  var myStrength = [yourLeft, yourRight];
  var friendStrength = [friendsLeft, friendsRight];

  if (Math.max(...myStrength) === Math.max(...friendStrength) && Math.min(...myStrength) === Math.min(...friendStrength)) {
    return true;
  } else {
    return false;
  }
}
