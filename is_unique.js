/*
Write a function that checks of characters within a string repeats
*/

let isUnique = (string) => {
  let stringArray = string.split('');
  let array = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (stringArray[i] == stringArray[j]) {
        array.push(stringArray[i]);
        break;
      }
    }
  }
  let answer = (array.length == 0) ? 'All Unique' : `Oops, looks like ${array} repeated`;
  return answer;
}
console.log(isUnique('hello'));
console.log(isUnique('world'));



/// ========= Bryce's Solution ======== //

function isUnique(string){
  var arr = string.split('');
  arr.forEach(function(el){

  })
};
