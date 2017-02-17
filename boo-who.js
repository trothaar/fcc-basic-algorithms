/* Teresa Rothaar
   Free Code Camp Challenge #272 - Boo Who

   Check if the value is a boolean primitive.
   If so, return true. Otherwise, return false.
*/

function booWho(bool) {
  // If bool is true or false, return true
  // Otherwise, return false
  if(bool === true || bool === false){
    return true;
  }else{
    return false;
  }
}

booWho(null);
