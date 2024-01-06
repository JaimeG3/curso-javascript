//Sum of Digits / Digital Root
function digital_root(n) {
    return (n - 1) % 9 + 1;
  }

///////

  function digitalRoot(n) {
    // ...
   let result = 0;
    
    let digits = n.toString().split("");
  
    for (let i = 0; i < digits.length; i++) {
      result += parseInt(digits[i], 10);
    }
  
    return result > 9 ? digitalRoot(result) : result;
  }
   

  //DUPLICATE ENCODE
  function duplicateEncode(word){
    // ...
  let result = ""
  word = word.toLowerCase()
  for(let i =0; i<word.length;i++){
    if(word.lastIndexOf(word[i]) !== word.indexOf(word[i])){
      result += ")"
    }else{
      result += "("
    }
    }
    return result
  }

//Counting Duplicates
  function duplicateCount(text){
  //...
  let result = 0
  const charCount = {};

  text.toLowerCase().split("").forEach((character) => {
    if (charCount[character]) {
      charCount[character] += 1;

      if (charCount[character] === 2) {
        result += 1;
      }
    } else {
      charCount[character] = 1;
    }
  });
  return result
}


//Vowel Count
function getCount(str) {
    let count = 0
    for(let i = 0;i<str.length;i++){
      if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
        count++
      }
    }
      return count
  }

  //Sort the odd
  function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }
