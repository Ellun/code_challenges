function permPalidrome(str){  // if str is a single word

  var uniqueletters = [];

  var strArr = str.split("");

  for (var i = 0; i > strArr.length; i ++) {
    if ( uniqueletters.indexOf(strArr[i]) === -1 ){
      uniqueletters.push(strArr[i])
    }
  }

  var x = uniqueletters.length;
  var y = strArr.length/2;

  if ( x % 2 === 0 || x == y) {
    return true;
  } else if ( ( x-1) === y) {
    return true;
  } else {
    return false
  }
}

// if a string has more words:
