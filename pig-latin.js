/* Teresa Rothaar
   Free Code Camp Challenge #269 - Pig Latin

   Translate the provided string to pig latin.
   Pig Latin takes the first consonant (or consonant cluster)
   of an English word, moves it to the end of the word, and
   suffixes an "ay". If a word begins with a vowel, you just
   add "way" to the end.

   Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  var consonant = "ay";
  var vowel = "way";
  var len = str.length;
  var newStr = "";
  var firstLetter = str.charAt(0);
  var firstTwo = str.substring(0,2);

  if(isVowel(firstLetter)){ // First case: 1st letter is vowel
    newStr = str.concat(vowel);
  }else if(!isVowel(str[0]) && !isVowel(str[1])){ // 2nd case: Starts with "consonant cluster"
    newStr = str.substring(2, len) + str[0] + str[1] + consonant;
  }else{ // 3rd case: Starts with a single consonant
    newStr = str.substring(1, len) + firstLetter + consonant;
  }

  return newStr;
}

// Checks if character is a vowel
function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}

translatePigLatin("consonant");
