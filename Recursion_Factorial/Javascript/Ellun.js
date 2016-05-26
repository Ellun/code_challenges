let factorial = (number) => {
  if (number > 1) {
    return number * factorial(number - 1);
  } else if (number == 1) {
    return number;
  } else if (number == 0) {
    return 1;
  } else if (number < 0) {
    return 'undefined'
  }
}

// test cases
console.log(factorial(-5)); // should return undefined
console.log(factorial(0)); // should return 1
console.log(factorial(1)); // should return 1
console.log(factorial(5)); // should return 120
