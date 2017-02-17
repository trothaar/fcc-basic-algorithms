/* Teresa Rothaar
   Free Code Camp Challenge #271 - Missing Letters

   Find the missing letter in the passed letter range and return it.
   If all letters are present in the range, return undefined.

   For example, fearNotLetter("abce") should return "d",
   and fearNotLetter("bcd") should return undefined.

*/
function fearNotLetter(str) {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                 'u', 'v', 'w', 'x', 'y', 'z'];
  var newStr = "";
  var char = "";
  var len = str.length;
  // Get the first and last letters of the string
  var firstLetter = str.charAt(0);
  var lastLetter = str.charAt(len-1);
  // Get the array indices of the first and last letters
  var start = alphabet.indexOf(firstLetter);
  var end = alphabet.indexOf(lastLetter);

  //Pull substring out of array
  for(i=start; i<end+1; i++){
   newStr = newStr.concat(alphabet[i]); 
  }

  // If the strings are equal, return undefined
  // Else compare each string char by char
  // and return the one that's missing from original string
  if(newStr === str){
    return undefined;
  }else{
    for(i=0; i<newStr.length; i++){
      char = newStr[i];
      if(str.indexOf(char) === -1){
        return char;
      }
    }
  }
  return char;
}

fearNotLetter("abce");
