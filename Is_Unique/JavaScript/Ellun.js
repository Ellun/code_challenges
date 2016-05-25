// ========= Ellun's Solution ======== //
let isUnique = (string) => {
  let stringArray = string.split(''); // splits string into array
  let array = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) { // checks only the letters after
      if (stringArray[i] == stringArray[j]) {
        array.push(stringArray[i]); // stores any repeating variables
        break;
      }
    }
  }
  let answer = (array.length == 0) ? 'All Unique' : `Oops, looks like ${array} repeated`;
  return answer;
}
console.log(isUnique('hello')); // test, will fail
console.log(isUnique('world')); // test, will pass
