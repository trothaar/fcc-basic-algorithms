/* Teresa Rothaar
   Free Code Camp Challenge #280 - Drop It

   Drop the elements of an array (first argument),
   starting from the front, until the predicate (second argument)
   returns true.

   The second argument, func, is a function you'll
   use to test the first elements of the array to
   decide if you should drop it or not.

   Return the rest of the array; otherwise, return an empty array.
*/
function dropElements(arr, func) {
  // Set a boolean and an integer variable
  var flag = true;
  var num = 0;

  while(flag){ // While the boolean is true
    num = arr[0]; // Pass the first element to the fn
    if(!func(num)){ // If it doesn't pass, remove the element
      arr.shift();
    }else{ // As soon as we find one that passes, return the array, ending the loop
      return arr;
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
