/* Teresa Rothaar
   Free Code Camp Challenge #250
   You will be provided with an initial array
   (the first argument in the destroyer function),
   followed by one or more arguments. Remove all elements
   from the initial array that are of the same value
   as these arguments.

   For example, destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]. */
   
   function destroyer(arr) {
     var newArr = []; // Array to be returned
     var argsArr = []; // Array to hold the values to be deleted
     var oldArr = arguments[0]; // Array to hold initial values
     // Put the arguments in the argsArr array
     for (i=1; i<arguments.length; i++){
       argsArr.push(arguments[i]);
     }
     // Now compare them to the initial values
     for (i = 0; i<oldArr.length; i++){
       if (argsArr.includes(oldArr[i])){
         continue;
       }else{
         newArr.push(oldArr[i]);
       }
     }
     return newArr;
   }

   destroyer([1, 2, 3, 1, 2, 3], 2, 3);
