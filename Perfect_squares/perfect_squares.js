

function howManySquares(arr){
	var first = arr[0];
	var second = arr[1];
	var diff = second - first
	var count = 0;

	for (var i = 0; i <= diff; i++){
		if (Math.sqrt(first + i) % 1 === 0) {
			count++
		}
	}
	return count;
}
