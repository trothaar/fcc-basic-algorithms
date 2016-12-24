/* Teresa Rothaar
   Free Code Camp Challenge #244
   Repeat a given string (first argument) num times (second argument).
   Return an empty string if num is not a positive number. */

   function repeatStringNumTimes(str, num) {
     // Check if num is negative
     if(num < 0){
       return "";
     }
     // Create a string with the first instance of str
     // Use a while loop & concat() to repeat the string num times
     var newStr = str;
     var i = 1;
     while (i < num){
       newStr = newStr.concat(str);
       i++;
     }
     return newStr;
   }

   repeatStringNumTimes("abc", 3);
