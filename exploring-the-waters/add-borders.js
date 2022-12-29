function solution(picture) {
  var length = 0;
  var topBorder = '';
  for (var i = 0; i < picture.length; i++) {
    picture[i] = '*' + picture[i] + '*';
    length = picture[i].length;

  }
  for (var j = 0; j < length; j++) {
    topBorder += '*';
  }
  picture.splice(0, 0, topBorder);
  picture.push(topBorder);
  return picture;
}
