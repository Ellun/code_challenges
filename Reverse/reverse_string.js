let reverseString = (string) => {
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

console.log(reverseString('hello world'));


// ======== Bryce's solution ========= //

function reverseString(string) {
	var str = string.split('').reverse().join('');
	console.log(str);
}

// ====== Code Golf ==== //

const reverseString = (string) => string.split('').reverse().join('');
