const reverseString = function(string) {
  if (string === "") {
    return "";
  }
  else {
    n = string.length;
    let newString = string[n - 1]
  
    for (let i = (string.length - 2); i >= 0; i--) {
      newString += string[i];
    }
    return newString;
  }
};

// Do not edit below this line
module.exports = reverseString;
