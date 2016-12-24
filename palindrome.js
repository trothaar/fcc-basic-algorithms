// Teresa Rothaar
// Free Code Camp Challenge #239
// Returns true if a string is a palindrome; otherwise false

function palindrome(str) {
  // convert string to lower case and remove all nonalphanumeric
  // chars and white spaces
  var originalStr = str.toLowerCase().replace(/[^0-9a-zA-Z]/g, '');
  // use function reverseString to reverse the string
  var reverseStr = reverseString(originalStr);
  // now compare the two strings
  if (originalStr === reverseStr){
  return true;
  }
  return false;
}

// Used to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}


palindrome("race car");
