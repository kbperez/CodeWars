function formatWords(words){

if (words === null) return ''

if (words.length===0) return ''

if (words.length === 1) return words[0]

for (i=0; i < words.length; i++) {
    if (words[i]==='') {
      words.splice(i,1);
      i=i-1;
    }
}

if (words.length === 1) return words[0]

let back = ' and '+ words.pop();

let front = words.toString();

return front.replace(/,/g, ', ') + back

}
