/* Teresa Rothaar
   Free Code Camp Challenge #286 - Symmetric Difference
   (Hey, wait a minute. Record Collection was No. 286 as well???)

   Create a function that takes two or more arrays and returns an
   array of the symmetric difference (△ or ⊕) of the provided arrays.

   Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}),
   the mathematical term "symmetric difference" of two sets is the set of
   elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}).
   For every additional symmetric difference you take (say on a set D = {2, 3}),
   you should get the set with elements which are in either of the
   two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/


function sym(args) {
  // Create an array by slicing the arguments
  var argsArray = Array.prototype.slice.call(arguments);

  // Callback fn to iterate through the arrays for reduce
  function symDiff(arr1, arr2){
    // Create array to store unique values
    var uniqueVals = [];
    for(var i=0; i<arr1.length; i++){
      if(arr2.indexOf(arr1[i])<0 && uniqueVals.indexOf(arr1[i])<0){
        uniqueVals.push(arr1[i]);
      }
    }

  arr2.forEach(function(item){
    if(arr1.indexOf(item)<0 && uniqueVals.indexOf(item)<0){
      uniqueVals.push(item);
    }
  });
  return uniqueVals;
}
  return argsArray.reduce(symDiff);
}

sym([1, 2, 3], [5, 2, 1, 4]);
