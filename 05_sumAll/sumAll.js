const sumAll = function(a, b) {
  if (a >= 0 && Number.isInteger(a) && b >= 0 && Number.isInteger(b)) {
    let total = 0;
    let x = Math.min(a, b);
    let y = Math.max(a, b);
    while (x <= y) {
      total += x;
      x += 1;
    }
    return total;
  }
  else {
    return "ERROR"
  }
};

// Do not edit below this line
module.exports = sumAll;
