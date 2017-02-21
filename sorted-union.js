/* Teresa Rothaar
   Free Code Camp Challenge #273 - Sorted Union

   Write a function that takes two or more arrays
   and returns a new array of unique values in the
   order of the original provided arrays.

   In other words, all values present from all arrays
   should be included in their original order, but
   with no duplicates in the final array.

   The unique numbers should be sorted by their original
   order, but the final array should not be sorted in
   numerical order.

   Examples:

   uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
   uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].

*/

function uniteUnique(arr) {

  // Create a duplicate from the original array of arrays
  var newArr = arr;

  // Iterate through the length of the arguments
  for(var i=0; i<arguments.length; i++){
    // Iterate through the index values of the arguments
    for(var j=0; j<arguments[i].length; j++){
      // Check if new array contains the value
      // If not, push it into the new array
      if(newArr.indexOf(arguments[i][j]) === -1){
        newArr.push(arguments[i][j]);
      }
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
