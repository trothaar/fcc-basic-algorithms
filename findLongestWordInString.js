// Teresa Rothaar
// Free Code Camp Challenge #240
// Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
//split the string into an array of strings
  var s = str.split(" ");
  // Sort the array according to word length, from highest to lowest
  var sorted = s.sort(function (a, b) { return b.length - a.length ;});
  // The longest word is the first entry in the array; return its length
  return sorted[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
