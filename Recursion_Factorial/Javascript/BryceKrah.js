function factorial(n){
	if (n < 0) {
		return "Must be positive integer"
	}
	if (n <= 1) {
		return 1;
	}
	else {
		return n * factorial(n-1);
	}
}

factorial(3);
