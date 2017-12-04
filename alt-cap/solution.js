
let altcap = {};

function altcap.capitalize(str) {
  //code here
  let first, second;
  for(i = 0; i < str.length; i++) {
    if (i%2 === 0) {
      first=first + str[i].toUpperCase();
      second=second + str[i];
    } else {
      first=first + str[i];
      second=second + str[i].toUpperCase();
    }
  }
  altcap = `{'${first}', '${second}'}`;
  return altcap
}
