/* Teresa Rothaar
   Free Code Camp Challenge #284 - Arguments Optional

   Create a function that sums two arguments together. If only one
   argument is provided, then return a function that expects one
   argument and returns the sum.

   For example, addTogether(2, 3) should return 5, and addTogether(2)
   should return a function.

   Calling this returned function with a single argument will
   then return the sum:

   var sumTwoAnd = addTogether(2);
   sumTwoAnd(3) returns 5.

   If neither argument is a valid number, return undefined.
*/


function addTogether() {
  // Create an array that slices the args on each parameter
  var params = [].slice.call(arguments);

  // Check if item in params is a number
  // If not, return undefined
  if(!params.every(function(param){
    return typeof param === "number";
  })){
    return undefined;
  }
  
  // If array has 2 values, add them together
  if(params.length === 2){
    return params[0] + params [1];
  }else{
    // Store first parameter
    var firstParam = params[0];
    // Store a fn that will take in the 2nd param &
    // use recursion to call itself & add the params
    var addOneMore = function(secondParam){
      return addTogether(firstParam, secondParam);
    };
    // Return the value of our new function
    return addOneMore;
  }

  return params;
}

addTogether(2,3);
