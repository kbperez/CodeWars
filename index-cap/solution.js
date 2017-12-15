function capitalize(s,arr){

let str = s.split('');

  for (i=0; i < arr.length; i++) {

    if (str[arr[i]]) {

    str[arr[i]] = str[arr[i]].toString().toUpperCase();
    console.log(str[arr[i]].toString().toUpperCase());
   }

  }
   return str.join('');
}
