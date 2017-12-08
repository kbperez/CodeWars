function solution(str){
    let arr = str.split(''), arrTwo=[];
    console.log(arr);

      for (let i = (arr.length-1); i > -1; i--) {
        arrTwo.push(arr[i]);
        console.log(arrTwo);
      }
      console.log(arrTwo.join(''));
      return arrTwo.join('')
}
