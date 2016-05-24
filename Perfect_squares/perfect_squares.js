/* Given an array of a pair of increasing integers, print the number of perfect squares in their range
 (inclusive)

ex input: 4,16

ex output: 3

explanation: because 4, 9, and 16 are perfect squares

*/ 

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
