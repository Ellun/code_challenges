let perfectSquares = (min, max) => {
  let answersArray = [];
  for (let i = min; i <= max; i++) {
    if (Math.sqrt(i) % 1 == 0) {
      answersArray.push(i);
    }
  }
  return answersArray.length;
}

console.log(perfectSquares(1, 36));
