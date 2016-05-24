// ========= Ellun's Solution ======== //

let permutationCheck = (string1, string2) => {
  if (string1.length != string2.length) { // if strings aren't equal length
    return false;                         // then they can't be permutations
  }

  let s1Array = string1.split('').sort().join(''); // arranges strings in
  let s2Array = string2.split('').sort().join(''); // alphabetical order
  return (s1Array === s2Array) ? true : false; // ternary 
}

console.log(permutationCheck('abc', 'abcd')); // returns false because of length
console.log(permutationCheck('bat', 'tab')); // returns true
console.log(permutationCheck('bat', 'Tab')); // returns true
console.log(permutationCheck('hello', 'world')); // returns false
