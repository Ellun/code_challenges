let magnitude = (array) => {
  let max = 0;
  let count = 1;
  array = array.sort(); // makes sure the array is in order
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      count++
    } else {
      if (count > max) {
        max = count;
      }
      count = 1;
    }
  }
  return max;
}

console.log(magnitude([1,2,3,4,2,2,3,4,1,1,2,3,1,4]));
