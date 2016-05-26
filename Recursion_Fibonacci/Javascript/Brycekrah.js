function fib(num){
	if (num <= 1){
		return 1
	} else {
		return fib(num-1) + fib(num-2)
	}
}

fib(4)

fib(6)