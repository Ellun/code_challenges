// ========= Elton's Solution ======== //

let permutationCheck = (string1, string2) => {
  if (string1.length != string2.length) {
    return false;
  }

  let s1Array = string1.split('').sort().join('');
  let s2Array = string2.split('').sort().join('');
  return (s1Array === s2Array) ? true : false;
}

console.log(permutationCheck('abc', 'abcd')); // returns false because of length
console.log(permutationCheck('bat', 'tab')); // returns true
console.log(permutationCheck('bat', 'Tab')); // returns true
console.log(permutationCheck('hello', 'world')); // returns false


// ========== Bryce's Solution ======== //

function permutationCheck(string1, string2){
	var count = 0;
	if (string1.length !== string2.length){
		return "Not permutations!"
	}

	for (var i = 0; i < string1.length; i++){
		for (var j = 0; j < string1.length; j++){
			if (string1.charAt(i) === string2.charAt(j)){
				count++;
			}
		}	
	}

	if (count === string1.length) {
		return "They are Permutations!"
	} else {
		return "Not permutations!"
	}
}
