
let altcap = {first: '', second: ''};

function capitalize(str) {
  //code here
  for(i = 0; i < str.length; i++) {
    if (i%2 === 0) {
      altcap.first=altcap.first + str[i].toUpperCase();
      altcap.second=altcap.second + str[i];
    } else {
      altcap.first=altcap.first + str[i];
      altcap.second=altcap.second + str[i].toUpperCase();
    }
  }
  altcap
  return altcap
}
