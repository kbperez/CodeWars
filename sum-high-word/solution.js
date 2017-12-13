test = 'wow this is az hard'


function high(x) {
  let arr = x.split(' ');
  console.log('arr', arr);
  let sum = [];

  for (i=0; i < arr.length; i++) {
    let word = arr[i];
    console.log('word', word);

    for (j =0; j < word.length; j++) {
      console.log(i,j);
      let ltr = word.charCodeAt(j)-96;
      sum = sum + ltr;
     console.log('ltr', ltr);
   }
   console.log('increment');
   console.log('sum', sum);
  }
}

high(test);
