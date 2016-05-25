// ======= Ellun's Version ======= //
let fillVoid = (string) => {
  let URLString = string.split(''); // seperates string into array
  for (let i = 0; i < URLString.length; i++) {
    if (URLString[i] == ' ') { // checks for spaces within array
      URLString[i] = '%20'; // replaces spaces with '%20'
    }
  }
  for (let i = URLString.length - 1; i > 0; i--) { // checks for '%20's at end
    if (URLString[i] == '%20') {
      URLString.pop(); // removes extra '%20's
    } else {
      URLString = URLString.join(''); // joins new string
      return URLString; // exits loop and returns new url
    }
  }
}

console.log(fillVoid('hello World   '));
