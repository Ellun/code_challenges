// ======== Ellun's solution ========= //

let reverseString = (string) => {
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--) { // loops backwards from end
    reverse += string[i]; // adds each letter to new string
  }
  return reverse; // retruns the string backwards
}

console.log(reverseString('hello world')); // test
