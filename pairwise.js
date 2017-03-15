/* Teresa Rothaar
   Free Code Camp Challenge #292 - Pairwise

   Given an array arr, find element pairs whose sum equal
   the second argument arg and return the sum of their indices.

   If multiple pairs are possible that have the same numeric
   elements but different indices, return the smallest sum of
   indices. Once an element has been used, it cannot be reused to pair with another.

   For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs
   that sum to 20 are [7, 13] and [9, 11]. We can then write out the
   array with their indices and values.
*/

function pairwise(arr, arg) {
  // Set up variables for problem
  var total = 0;
  var checkIndex = [];
  // Iterate through the array, checking if each entry and the one next to it
  // sum to the total arg - if so, push them into checkIndex
  for(var i=0; i<arr.length; i++){
    for(var j=i+1; j<arr.length; j++){
      if(arr[i]+arr[j]===arg && checkIndex.indexOf(i) === -1 && checkIndex.indexOf(j) === -1){
        checkIndex.push(i);
        checkIndex.push(j);
        total += i+j; // Keep a running total
      }
    }
  }

  return total;
}

pairwise([1,4,2,3,0,5], 7);
