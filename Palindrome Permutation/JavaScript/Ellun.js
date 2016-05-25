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
  let length = remainder0.length + remainder1.length;
  let answer = [];
  if (remainder1.length > 1) {
    return "is not palidrome"
  }
  for (let i = 0; i < remainder0.length; i++) {
    answer.push(remainder0[i]);
  }
  if (length % 2 == 1) {
    answer.push(remainder1[0]);
  }
  for (let i = remainder0.length - 1; i >= 0; i--) {
    answer.push(remainder0[i]);
  }
  return answer.join('');
}

// currently only generates 1 solution. Need to add permutations

console.log(pallyPerm('hhh ll'));
