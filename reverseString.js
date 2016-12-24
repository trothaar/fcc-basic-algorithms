// Teresa Rothaar
// Free Code Camp Challenge #239
// Reversing a string in JavaScript -- three ways to get the same result
// I submitted Method #1; I found the other two online

// METHOD 1:
// Reverses the provided string using a decremented FOR loop
// This is the one I submitted

function reverseString(str) {
  var reverseStr = "";
  for (i = str.length-1; i>=0; i--){
    reverseStr += str[i];
  }
  return reverseStr;
}
reverseString("hello");

// METHOD 2:
// Uses the the String.prototype.split() method,
// the Array.prototype.reverse() method,
// and the Array.prototype.join() method.

function reverseString(str) {
    var splitString = str.split("");  //split the string into an array
    var reverseArray = splitString.reverse(); // reverse the array
    var joinArray = reverseArray.join(""); // join all elements of the array into a string
    return joinArray;
}
reverseString("hello");

// ALTERNATE METHOD 2: Chain all three methods together
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

// METHOD 3:
// Use recursion with the the String.prototype.substr() method
// and the String.prototype.charAt() method.

function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");
