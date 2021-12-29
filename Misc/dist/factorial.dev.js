"use strict";

function factorial(x) {
  // if number is 0
  if (x === 0) {
    return 1;
  } // if number is positive
  else {
      return x * factorial(x - 1);
    }
}

var num = 3; // calling factorial() if num is non-negative

if (num > 0) {
  var result = factorial(num);
  console.log("The factorial of ".concat(num, " is ").concat(result));
}
//# sourceMappingURL=factorial.dev.js.map
