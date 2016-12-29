/* Teresa Rothaar
   Free Code Camp Challenge #251
   Return the lowest index at which a value (second argument)
   should be inserted into an array (first argument) once it
   has been sorted. The returned value should be a number.

   For example, getIndexToIns([1,2,3,4], 1.5) should return 1
   because it is greater than 1 (index 0), but less than 2 (index 1). */


function getIndexToIns(arr, num) {
  // Push num into arr, then sort arr in ascending order
  arr.push(num);
  arr.sort(function(a, b){return a-b;} );
  // Return the index of num
  var lowestIndex = arr.indexOf(num);
  return lowestIndex;
}

getIndexToIns([40, 60], 50);
