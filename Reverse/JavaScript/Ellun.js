// ======== Ellun's solution ========= //

let reverseString = (string) => {
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

console.log(reverseString('hello world'));
