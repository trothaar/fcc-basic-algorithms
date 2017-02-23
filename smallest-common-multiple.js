/* Teresa Rothaar
   Free Code Camp Challenge #278 - Smallest Common Multiple

   Find the smallest common multiple of the provided parameters
   that can be evenly divided by both, as well as by all sequential
   numbers in the range between these parameters.

   The range will be an array of two numbers that will not
   necessarily be in numerical order.

   e.g. for 1 and 3 - find the smallest common multiple of both 1
   and 3 that is evenly divisible by all numbers between 1 and 3.
*/


function smallestCommons(arr) {
  var placeholder = arr.sort();
  var range = [];
  var numMin = placeholder[0];
  var numMax = placeholder[1];

  // Populate array range with range of numbers from
  // numMin to numMax
  for (var i=numMin; i<=numMax; i++) {
    range.push(i);
}

  // Solve with helper function GCD
  var lcm = range[0];
  for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
    }

  console.log(range);

  return lcm;
}

// Finds the gcd of two numbers using the Euclidean algorithm
function gcd(x, y) {
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }

smallestCommons([1,5]);
