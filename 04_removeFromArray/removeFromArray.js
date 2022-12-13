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


// const removeFromArray = function (...args) {
//   const array = args[0];
//   const newArray = [];
//   array.forEach((item) => {
//     if (!args.includes(item)) {
//       newArray.push(item);
//     }
//   });
//   return newArray;
// };


// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }
