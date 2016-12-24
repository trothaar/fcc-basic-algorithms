// Teresa Rothaar
// Free Code Camp Challenge #241
// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.


function titleCase(str) {
  //convert string to lowercase, then split into an array
  var stringArray = str.toLowerCase().split(" ");
  //set helper variables
  var word = "";
  var firstLetter = "";
  var restOfWord = "";
  var newWord = "";
  var wordLen = 0;
  var tempStr = "";
  var newStr = "";

  for(i = 0; i<stringArray.length; i++){
    // Get each word out of the array
    word = stringArray[i];
    // Get the word length
    wordLen = word.length;
    // Get the first letter of the word & convert to UC
    firstLetter = word.charAt(0).toUpperCase();
    // Get the rest of the word
    restOfWord = word.slice(1, wordLen);
    // New word = first letter + remainder of word
    newWord = firstLetter + restOfWord;
    // Replace array entry with new word
    stringArray[i] = newWord;
  }
  // Covert array to a string
  tempStr = stringArray.toString();
  // Use regex to replace all commas with spaces & return new string
  newStr = tempStr.replace(/,/g , " ");
  return newStr;
}

titleCase("I'm a little tea pot");
