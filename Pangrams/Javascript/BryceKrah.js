// uncommented solution 
function processData(string) {

    var str = string.toLowerCase();

    var alpha = "abcdefghijklmnopqrstuvwxyz";
    
    for (var i = 0; i < 26; i++){
        if (str.indexOf(alpha.charAt(i)) === -1){
            return console.log("not pangram");
        }
    }
    console.log("pangram")    

};


// solution with explanation
// scr rosetta code
function processData(string) {
    
    // take input string and change to all lower case letters    
    var str = string.toLowerCase();

    // create string containing all letters of alphbet to check str against
    var alpha = "abcdefghijklmnopqrstuvwxyz";

    /* 
     indexOf method : method returns the index within the calling String object of the
     first occurrence of the specified value, starting the search at fromIndex. Returns -1 
     if the value is not found. 
    src: MDN
    */

    /* 
      loops over alpha string and checks to see if each character in alpha is present 
       inside of the input str, if not then it will return -1 and it is not a pangram
    */
    for (var i = 0; i < 26; i++){
        if (str.indexOf(alpha.charAt(i)) === -1){
            return console.log("not pangram");
        }
    }
    console.log("pangram")    

} 
