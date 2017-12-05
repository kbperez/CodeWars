function isNice(arr) {
if (arr.length===0) return false
  for (i=0; i < arr.length; i++) {
    let before = arr[i] + 1;
    let after = arr[i] - 1;
    console.log(before, after);
    console.log(arr.includes(before), arr.includes(after));
    if (!arr.includes(before) && !arr.includes(after)) {
      return false
    }
  }
  return true
}
