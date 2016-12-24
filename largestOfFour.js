/* Teresa Rothaar
   Free Code Camp Challenge #242
   Return an array consisting of the largest number
   from a sub-array. */

   function largestOfFour(arr) {
     // Define helper variables
     var largestNums = [];
     var temp = [];
     var sortedNums = [];
     // Iterate through the array & pull out sub-arrays one by one
     for (i = 0; i<arr.length; i++){
       temp = arr[i];
       // Sort each sub-array in descending order
       sortedNums = temp.sort(function(a, b){return b - a ;});
       // The first entry is the largest number
       // Save the largest number in each sub-array into a new array
       largestNums[i] = sortedNums[0];
     }
     // Return the new array of largest numbers
     return largestNums;
   }

   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
