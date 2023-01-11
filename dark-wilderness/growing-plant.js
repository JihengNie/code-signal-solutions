function solution(upSpeed, downSpeed, desiredHeight) {
  if (upSpeed > desiredHeight) return 1;
  let days = 0;
  let output = 0;
  while (output < desiredHeight) {
    days++;
    output = output + upSpeed;
    if (output >= desiredHeight) break;
    output = output - downSpeed;
  }
  return days;
}
