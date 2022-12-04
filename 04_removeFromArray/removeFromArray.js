const removeFromArray = function() {

  let newArray = Array.from(arguments[0]);

  for (let i = 1; i < arguments.length; i++) {
    if (newArray.indexOf(arguments[i]) === -1) {
      continue;
    }
    else {
      newArray.splice(newArray.indexOf(arguments[i]), 1);
    }  
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
