//
function rot13(message) {
    return message.split("").map(char => {
      if (/[A-M]/.test(char)) {
        return String.fromCharCode(char.charCodeAt(0) + 13);
      } else if (/[N-Z]/.test(char)) {
        return String.fromCharCode(char.charCodeAt(0) - 13);
      } else if (/[a-m]/.test(char)) {
        return String.fromCharCode(char.charCodeAt(0) + 13);
      } else if (/[n-z]/.test(char)) {
        return String.fromCharCode(char.charCodeAt(0) - 13);
      } else {
        return char;
      }
    }).join("");
  }


  // First non-repeating character
  function firstNonRepeatingLetter(s) {
    // Add your code here
   const letters = s.toLowerCase().split("");
    
    for (let i = 0; i < letters.length; i++) {
      let currentLetter = letters[i];
      if (letters.indexOf(currentLetter) === letters.lastIndexOf(currentLetter)) {
        return s[i];
    }
    }
     return "";
  }

  function firstNonRepeatingLetter(s) {
    for(var i in s) {
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
  }