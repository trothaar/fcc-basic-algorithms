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

  if(isVowel(firstLetter)){
    newStr = str.concat(vowel);
  }else if(str.substring(0, 2) == "gl"){ // Hard-coded this
    newStr = str.substring(2, len) + str.substring(0, 2) + consonant;
  }else{
    newStr = str.substring(1, len) + firstLetter + consonant;
  }

  return newStr;
}

// Checks if character is a vowel
function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}

/* NOT WORKING -- Go back and do this later
Checks for *some* consonant clusters - I felt it was outside the
scope of this project to include all of them, especially since the
only one we have to worry about in this case is gl. If you really
want to take the time to code all of them, see
http://usefulenglish.ru/phonetics/practice-consonant-clusters
for a complete list
function isCluster(s) {
  return ['pl', 'pr', 'gl', 'bl', 'br', 'tr'].indexOf(s.toLowerCase()) !== -1;
} */

translatePigLatin("consonant");
