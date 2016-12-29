/* Teresa Rothaar
   Free Code Camp Challenge #252
   One of the simplest and most widely known ciphers
   is a Caesar cipher, also known as a shift cipher. In
   a shift cipher the meanings of the letters are shifted by some set amount.

   A common modern use is the ROT13 cipher, where the values of the
   letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

   Write a function which takes a ROT13 encoded string as input and
   returns a decoded string. */
   
   function rot13(str) {
     var decodedStr = "";
     var c = "";
     for (i=0; i<str.length; i++){ // Iterate through the string
       var temp = str.charCodeAt(i); // Get the char code
       if(temp < 65 || temp > 90){ // If not a letter, do nothing to it
         decodedStr += str.charAt(i);
       } else if (temp < 78){ // If ASCII value is below 78, add 13
         temp += 13;
         c = String.fromCharCode(temp);
         decodedStr += c;
       } else {
       temp -= 13; // If ASCII value is above 78, subtract 13 to "loop around"
       c = String.fromCharCode(temp);
       decodedStr += c;
       }
     }
     return decodedStr;
   }

   // Change the inputs below to test
   rot13("SERR PBQR PNZC");
