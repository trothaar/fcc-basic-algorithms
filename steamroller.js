/* Teresa Rothaar
   Free Code Camp Challenge #281 - Steamroller

   Flatten a nested array. You must account
   for varying levels of nesting.

   For example, steamrollArray([[["a"]], [["b"]]])
   should return ["a", "b"].
*/

// Use ES6
// jshint esversion:6
function steamrollArray(arr) {
// Create a copy of the array
var flat = [].concat(arr);

for(var i = 0; i < flat.length; i++) {
  if(Array.isArray(flat[i])) {
    // Replace with the items and backtrack 1 position
    // Use ES6 spread operator to make code simpler
    flat.splice(i, 1, ...flat[i--]);
  }
}

  return flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
