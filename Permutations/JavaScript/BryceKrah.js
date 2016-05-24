// ========== BryceKrah's Solution ======== //

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
