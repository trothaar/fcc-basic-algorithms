/* Teresa Rothaar
   Free Code Camp Challenge #270 - DNA Pairing

   The DNA strand is missing the pairing element.
   Take each character, get its pair, and return
   the results as a 2d array.

   Base pairs are a pair of AT and CG. Match the
   missing element to the provided character.
   Return the provided character as the first
   element in each array. For example, for the
   input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

   The character and its pair are paired up in an array,
   and all the arrays are grouped into one encapsulating array.
*/


function pairElement(str) {
  var arr = [];
  var subArr = [];
  var temp ="";

  // Iterate through each char of the string
  // and match it with its mate. Push each
  // pair into a subarray, then push each element
  // of the subarray into the array to be returned
  for(i=0; i<str.length; i++){
    temp = matchDNA(str[i]);
    subArr.push(temp.split(""));
    arr.push(subArr[i]);
  }


  console.log(arr);
  return arr;
}

//Match each character with its mate
function matchDNA(c){
  switch (c) {
    case "A":
        return "AT";
    case "T":
        return "TA";
    case "C":
        return "CG";
    case "G":
        return "GC";
    default:
         return "Error";
}
}

pairElement("GCG");
