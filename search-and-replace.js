/* Teresa Rothaar
   Free Code Camp Challenge #268 - Search & Replace

   Perform a search and replace on the sentence using
   the arguments provided and return the new sentence.

   First argument is the sentence to perform the
   search and replace on.

   Second argument is the word that you will be
   replacing (before).

   Third argument is what you will be replacing
   the second argument with (after).

   NOTE: Preserve the case of the original word when
   you are replacing it. For example if you mean to replace
   the word "Book" with the word "dog", it should be replaced as "Dog."
*/

function myReplace(str, before, after) {
  // Put the array into a string
  var strArr = str.split(" ");
  // Find the index of the term we are searching on
  var pos = strArr.indexOf(before);

  str.replace(before, function(x) {
    return matchCase(after, before);
});

  return str;
}

function matchCase(text, pattern) {
    var result = '';

    for(var i = 0; i < text.length; i++) {
        var c = text.charAt(i);
        var p = pattern.charCodeAt(i);

        if(p >= 65 && p < 65 + 26) {
            result += c.toUpperCase();
        } else {
            result += c.toLowerCase();
        }
    }

    return result;
}


myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
