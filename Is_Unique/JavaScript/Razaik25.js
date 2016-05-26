
function isUnique(input) {
  if (typeof(input) === 'string') input = input.toLowerCase().split('');
  var temp,count = 0;
  for( var i =0; i<input.length; i++){
    if(temp === input[i]) {
      count++;
      return `${temp} repeats`;
    }
    temp = input[i];
  }
  if (count === 0) return `all characters unique`;
}

// test cases
isUnique('hello'); 
isUnique([1,2,3]);
