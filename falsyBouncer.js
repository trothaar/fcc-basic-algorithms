/* Teresa Rothaar
   Free Code Camp Challenge #249
   Remove all "falsy" values from an array */

   function bouncer(arr) {
     // Create new array that will be returned
     var newArr = [];
     /* Cast each element in the array as a Boolean.
     If the element evaluates as false, it's falsy; 
     everything else will evaluate as true and be
     pushed into the new array*/
     for(i = 0; i<arr.length; i++){
       if (Boolean(arr[i])){
         newArr.push(arr[i]);
       }
     }
     return newArr;
   }

   bouncer([7, "ate", "", false, 9]);
