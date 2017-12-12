function cubeOdd(arr) {
if (arr.length === 0) return

 let str = (arr.filter(a => (typeof a !== 'string')));

 if (arr.length === str.length) {
  let res = arr.filter(b => b%2).map(x => x*x*x);
  let sum = res.reduce((a,c) => a + c);
  return sum

  }else{
  return
  }
}
