/* Teresa Rothaar
   Free Code Camp Challenge #274 - Convert HTML Entities

   Convert the characters &, <, >, " (double quote),
   and ' (apostrophe), in a string to their corresponding HTML entities.

   For example, convertHTML("Dolce & Gabbana")
   should return Dolce &​amp; Gabbana.
*/

function convertHTML(str) {

  // Use regex and a string of replace
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/''/g, "marks&;").replace(/'/g, "&apos;");
}

convertHTML("Dolce & Gabbana");
