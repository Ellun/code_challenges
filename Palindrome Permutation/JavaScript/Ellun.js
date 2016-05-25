// ======= Ellun's Solution ====== //
let pallyPerm = (string) => {
  let remainder0 = [];
  let remainder1 = [];
  string = string.split('');
  for (let i = 0; i < string.length; i++) {
    let count = 1;
    if (string[i] == ' ') {
      continue;
    } else {
      for (let j = i + 1; j < string.length; j++) {
        if (string[i] == string[j]) {
          string.splice(j,1);
          j--;
          count++;
        }
      }
      if (count % 2 == 0) {
        for (let k = 0; k < count/2; k++) {
          remainder0.push(string[i]);
        }
      } else {
        for (let k = 0; k < (count -1) / 2; k++) {
          remainder0.push(string[i]);
        }
        remainder1.push(string[i]);
      }
    }
  }
  if (remainder1.length > 1) {
    return "is not palidrome"
  }
  return true;
}

// currently only generates 1 solution. Need to add permutations

console.log(pallyPerm('hhh lll'));
