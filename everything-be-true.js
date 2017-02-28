/* Teresa Rothaar
   Free Code Camp Challenge #283 - Everything Be True

   Check if the predicate (second argument) is truthy
   on all elements of a collection (first argument).

   For example, truthCheck([{"user": "Tinky-Winky", "sex": "male"},
   {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"},
   {"user": "Po", "sex": "female"}], "sex") should return true.

   truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"},
   {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}],
   "sex") should return false.

*/

function truthCheck(collection, pre) {
  // Create a counter to check how many cases are true
  var count = 0;
  // Iterate through collection using hasOwnProperty()
  // Determine if the property exists; then determine if it is truthy
  for(var key in collection){
    if(collection[key].hasOwnProperty(pre) && collection[key][pre]){
       count++;
       }
  }
  // If the count equals the length of the collection, everything was truthy
  return count === collection.length;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
