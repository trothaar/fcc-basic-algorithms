/* Teresa Rothaar
   Free Code Camp Challenge #285 - Validate U.S. Telephone Numbers

   Return true if the passed string is a valid US phone number.

   The user may fill out the form field any way they choose as long
   as it is a valid US number. The following are examples of valid
   formats for US numbers (refer to the tests below for other variants):

   555-555-5555
   (555)555-5555
   (555) 555-5555
   555 555 5555
   5555555555
   1 555 555 5555

   For this challenge you will be presented with a string such
   as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate
   or reject the U.S. phone number based on any combination of the
   formats provided above. The area code is required. If the
   country code is provided, you must confirm that the country code
   is 1. Return true if the string is a valid US phone number;
   otherwise, return false.
*/


function telephoneCheck(str) {

  //If string contains anything other than digits, dashes,
  //whitespace, and parens, return false
  var pattern = /[^0-9()-\s]/;
  if(pattern.test(str)){
    console.log(str);
    return false;
  }

  //Remove all whitespaces from string
  var newStr = str.replace(/\s+/g, '');
  //If newStr is < 10 characters
  //(area code + phone no.) or >
  //14 characters (1 + area code in parens + phone
  //no.), return false
  if(newStr.length<10 || newStr.length>14){
    console.log(newStr);
    return false;
  }  

  // Good luck!
  return true;
}

telephoneCheck("555-555-5555");
