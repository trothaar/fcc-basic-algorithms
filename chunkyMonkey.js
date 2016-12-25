/* Teresa Rothaar
   Free Code Camp Challenge #246 - "Chunky Monkey"
   Write a function that splits an array (first argument)
   into groups the length of size (second argument) and returns
   them as a two-dimensional array. */

   function chunkArrayInGroups(arr, size) {
     // Define helper variables
     var newArr = [];
     var subArr = [];
     var i = 0;
     /* While the array is not empty, remove size number
     of items beginning at index zero, place them in
     a new subarray, then push them into the new array
     that the function will return*/
     while (arr.length !== 0){
       subArr = arr.splice(i, size);
       newArr.push(subArr);
     }
     return newArr;
   }

   chunkArrayInGroups(["a", "b", "c", "d"], 2);
