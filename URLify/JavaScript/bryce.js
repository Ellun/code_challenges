function urlIfy(string){
	var answer = string.trim();
	
	answer = answer.replace(/[' ']/g, '%20')

	return answer;
}

urlIfy("he ll o worl d   ")

