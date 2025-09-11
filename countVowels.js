


function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";  str.toLowerCase().split("").forEach(function(char) {
    if (vowels.includes(char)) {
      count++;
    }
  });  return count;
}


console.log(countVowels("")) ;
