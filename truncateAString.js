/* Teresa Rothaar
   Free Code Camp Challenge #245
   Truncate a string (first argument) if it is longer
   than the given maximum string length (second argument).
   Return the truncated string with a ... ending.
   However, if the given maximum string length num is less
   than or equal to 3, then the addition of the three dots
   does not add to the string length in determining the truncated string. */

   function truncateString(str, num) {
     // Get the string length & set up helper variables
     var len = str.length;
     var newString = "";
     var slice = "";
     // First case: num <= 3 - return original string plus ellipsis
     if (num <= 3){
       slice = str.slice(0, num);
       newString = slice.concat("...");
    // Second case: if num >= len, return original string, no ellipsis
     }else if (num == len || num>len){
       newString = str;
    // Otherwise, truncate the string accordingly
     }else{
     var endPos = num - 3;
     slice = str.slice(0, endPos);
     newString = slice.concat("...");
     }
     return newString;
   }

   truncateString("A-tisket a-tasket A green and yellow basket", 11);
