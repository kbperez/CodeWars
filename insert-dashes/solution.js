function insertDash(num) {
   //code me
   let newString = '';
   let prev = '';
   let curr;
   let n = num.toString();

   for(i = 0; i < n.length; i++) {

    if (parseInt(n[i])%2 === 0) {
      curr = 'even';
    } else {
      curr = 'odd';
    }

    if (curr === 'odd' && prev === 'odd') {
      newString = newString + '-' + n[i];
    }else{
      newString = newString + n[i];
      prev = curr;
   }
  }
    return newString;
}
