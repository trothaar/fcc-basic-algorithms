/* Teresa Rothaar
   Free Code Camp Challenge #282 - Binary Agents

   Return an English-translated sentence of the
   passed binary string.

   The binary string will be space-separated.
*/

function binaryAgent(str) {
  // Split string into an array
  var arr = str.split(" ");
  // String to be returned
  var output = "";
  // Use parseint with 2 for binary to convert each char from
  // binary to Unicode, and then use String.fromCharCode
  // to convert it from Unicode to letters and punctuation
    for (i = 0; i < arr.length; i++) {
        output += String.fromCharCode(parseInt(arr[i],2));
    }
  return output;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
