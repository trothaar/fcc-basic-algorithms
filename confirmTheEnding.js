/* Teresa Rothaar
   Free Code Camp Challenge #243
   Check if a string (first argument, str) ends with the
   given target string (second argument, target).
   Do not use the endsWith() method */

   function confirmEnding(str, target) {
     // Obtain the length of the original string & the target ending
     var strLen = str.length;
     var suffixLen = target.length;
     // This is the place where we start the substring
     var startPos = strLen - suffixLen;
     // Extract the substring and compare it to the target
     var suffix = str.substr(startPos, suffixLen);
     if (target === suffix){
       return true;
     }
     return false;
   }

   confirmEnding("Bastian", "n");
