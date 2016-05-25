let singleEdit = (string, change) => {
  string = string.split('');
  change = change.split('');
  const diff = Math.abs(string.length - change.length);
  if (diff > 1) { return false; }
  else if (diff == 0) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] != change[i]) {
        count++;
      }
      if (count > 1) {
        return false;
      }
    }
  } else if (string.length > change.length){
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == change[i] || string[i] == change[i + 1] || string[i] == change[i - 1]) {
        continue;
      } else {
        count++;
      }
      if (count > 1) {
        return false;
      }
    }
  }
  return true;
}

console.log(singleEdit('hello', 'helll'));
