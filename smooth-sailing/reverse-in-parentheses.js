function solution(s) {
  while (true) {
    const c = s.indexOf(')');

    if (c === -1) {
      break;
    }

    const o = s.substring(0, c).lastIndexOf('(');

    const start = s.substring(0, o);
    const middle = s.substring(o + 1, c).split('').reverse().join('');
    const end = s.substring(c + 1, s.length);

    s = start + middle + end;
  }

  return s;
}
