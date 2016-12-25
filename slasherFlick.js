/* Teresa Rothaar
   Free Code Camp Challenge #247
   Return the remaining elements of an array
   after chopping off n elements from the head (0th index). */

/* Use splice to remove the indicated number of
   elements from the beginning of the array and store
   them into a temporary array, then return the
   original array. */
function slasher(arr, howMany) {
  tempArr = arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);
