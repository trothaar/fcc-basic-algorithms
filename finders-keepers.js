/* Teresa Rothaar
   Free Code Camp Challenge #279 - Finders Keepers

   Create a function that looks through an array
   (first argument) and returns the first element
   in the array that passes a truth test (second argument).
*/
function findElement(arr, func) {
  // Set placeholder
  var num = 0;
  // Iterate through array, passing each element to
  // the fn. As soon as the fn finds an element that
  // passes the test, it returns that element
  for(i=0; i<arr.length; i++){
    num = arr[i];
    if(func(num)){
      return num;
    }
  }
  // If no elements are found that pass the test,
  // return undefined
  return undefined;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
