function solution(a) {
  var team1 = [];
  var team2 = [];
  var result = [];
  for (var i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      team2.push(a[i]);
    } else {
      team1.push(a[i]);
    }
  }
  result.push(team2.reduce(add, 0));
  result.push(team1.reduce(add, 0));
  return result;
}

function add(accumulator, a) {
  return accumulator + a;
}
