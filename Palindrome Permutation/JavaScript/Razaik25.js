
// ======= Razaik25's Solution ====== //


function palinPerm(str){

  // check if input is string
  if(typeof(str) !== 'string'){ return console.log('please enter a string');}

  // array to store all the unpaired characters
  var notPairedcharacters = [];

  //  converting the input to lowercase and using regex to remove spaces, where \s stands for space and g for global space,refrenced from stack overflow
  var input = str.replace(/\s+/g, '').toLowerCase().split('');
    for( var i = 0; i< input.length; i++ ){

      // the current character is not present in the notPairedcharacters array, then push to the array
      if (notPairedcharacters.indexOf(input[i]) === -1 ) {
        notPairedcharacters.push(input[i]);
      } else {
        // else remove that character from notPairedcharacters array
        notPairedcharacters.splice(notPairedcharacters.indexOf(input[i]), 1);
      }
    }

    /* check if given input string has one or less characters with no pair
     if the length of notPairedcharacters is either 0 or 1, then the string will have palindrome permutations */
    if (notPairedcharacters.length <= 1) {
      return true;
    } else {
      return 'no palindrome permutation possible';
    }
}
