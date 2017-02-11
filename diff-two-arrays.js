/* Teresa Rothaar
   Free Code Camp Challenge #265 - Diff Two Arrays

   Compare two arrays and return a new array with any
   items only found in one of the two given arrays, but not both.
   In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  // Concatenate arr1 & arr2
  var tempArr = arr1.concat(arr2);
  var newArr = [];

  // If element in tempArr is not found in either arr1 or arr2,
  // push it into newArr
  for(var i in tempArr){
        if(arr1.indexOf(tempArr[i]) === -1 || arr2.indexOf(tempArr[i]) === -1){
            newArr.push(tempArr[i]);
        }
    }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
