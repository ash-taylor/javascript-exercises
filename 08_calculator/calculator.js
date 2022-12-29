const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = array => array.reduce((total, item) => total + item, 0);

// const multiply = array => array.reduce((total, item) => total * item);

const multiply = array => array.length ? array.reduce((total, item) => total * item) : 0; // Adds ternary to test for empty array - if no array, returns 0

const power = (a, b) => a ** b;

const factorial = n => n === 0 ? 1 : n * factorial(n-1);

// const multiply = function(array) {
//   return array.length ? array.reduce((accumulator, nextItem) => accumulator * nextItem) : 0;
// };
// alternative solution - checks whether there is an array, then runs reduce func or returns 0

// const multiply = function(array) {
//   return array.reduce(function(total, item) {
//     return total * item;
//   }, 1);
// };

// const factorial = function(n) {
//   if (n === 0) return 1;
//   return n * factorial(n-1);
// };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
