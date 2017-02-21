/* Teresa Rothaar
   Free Code Camp Challenge #275 - Spinal Tap Case

   Convert a string to spinal case.
   Spinal case is all-lowercase-words-joined-by-dashes.

   For example, spinalCase("This Is Spinal Tap")
   should return "this-is-spinal-tap".
*/

function spinalCase(str) {
// Chained regex - first do low-upper case to low-space-uppercase
// Then replace spaces with hyphens
// Then replace underscores with hyphens
// Then convert to lowercase and return
var newStr = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s+/g, "-").replace(/_/g, "-").toLowerCase();

  return newStr;
}

spinalCase('This Is Spinal Tap');
