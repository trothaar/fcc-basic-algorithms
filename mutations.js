/* Teresa Rothaar
   Free Code Camp Challenge #248
   Return true if the string in the first element
   of the array contains all of the letters of the string
   in the second element of the array.

   For example, ["hello", "Hello"], should return true because
   all of the letters in the second string are present in
   the first, ignoring case.

   The arguments ["hello", "hey"] should return false
   because the string "hello" does not contain a "y".

   Lastly, ["Alien", "line"], should return true because
   all of the letters in "line" are present in "Alien". */


function mutation(arr) {
  // Set helper variables
  var s1 = "";
  var s2= "";
  var target = "";
  // Determine which string is shorter,
  // assign the shorter string to s1, and
  // Convert both strings to lower case
  if (arr[0].length >= arr[1].length){
    s1 = arr[1].toLowerCase();
    s2 = arr[0].toLowerCase();
  }else{
    s1 = arr[0].toLowerCase();
    s2 = arr[1].toLowerCase();
  }
  /* Iterate through the shorter string character
  by character and determine if each character is
  in the longer string - if any character in s1 is
  not found in s2, immediately return false */
  for (i=0; i<s1.length; i++){
    target = s1[i];
    if (s2.includes(target)){
      continue;
    }else{
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
