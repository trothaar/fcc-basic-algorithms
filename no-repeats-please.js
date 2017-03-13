/* Teresa Rothaar
   Free Code Camp Challenge #289 - No Repeats Please

   Return the number of total permutations of the provided
   string that don't have repeated consecutive letters.
   Assume that all characters in the provided string are each unique.

   For example, aab should return 2 because it has 6 total permutations
   (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba)
   don't have the same letter (in this case a) repeating.
*/

/* Much thanks to http://www.knanthony.com/blog/free-code-camp-no-repeats-please/ */

function permAlone(str) {
  //console.log("Original string = " + str);
  //Create an array with every possible permutation
  var perms = getAnagrams(str);
  //Now use RegEx to find strings with repeated chars
  var pattern = /(.)\1+/;
  var count = 0;
  for(var i=0; i<perms.length; i++){
    var word = perms[i];
    if(!pattern.test(word)){
      count++;
    }
  }

  //console.log(perms);
  //console.log("Number of perms = " + perms.length);
  //console.log("Words with duplicate letters = " + count);
  return count;
}

// Helper function for getAnagrams
function swap(chars, i, j) {
    var tmp = chars[i];
    chars[i] = chars[j];
    chars[j] = tmp;
}

// Takes a string, uses Heap's algorithm to generate all
// possible permutations, and returns them as an array
function getAnagrams(input) {
    var counter = [],
        anagrams = [],
        chars = input.split(''),
        length = chars.length,
        i;

    for (i = 0; i < length; i++) {
        counter[i] = 0;
    }

    anagrams.push(input);
    i = 0;
    while (i < length) {
        if (counter[i] < i) {
            swap(chars, i % 2 === 1 ? counter[i] : 0, i);
            counter[i]++;
            i = 0;
            anagrams.push(chars.join(''));
        } else {
            counter[i] = 0;
            i++;
        }
    }

    return anagrams;
}
permAlone('aab');
