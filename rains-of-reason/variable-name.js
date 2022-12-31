function solution(name) {
  if (/[\d]/.test(name[0]) || /[' '`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/.test(name)) {
    return false;
  }
  if (!check(name)) {
    return false;
  }
  if (/[\-]/.test(name)) {
    return false;
  }
  return true;
}

function check(string) {
  return /[a-zA-Z\d\_]/.test(string);
}
