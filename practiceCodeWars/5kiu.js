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
  