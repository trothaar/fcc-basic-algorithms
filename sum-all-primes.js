/* Teresa Rothaar
   Free Code Camp Challenge #277 - Sum All Primes

   Sum all the prime numbers up to and including the provided number.

   A prime number is defined as a number greater than one and
   having only two divisors, one and itself. For example, 2
   is a prime number because it's only divisible by one and two.

   The provided number may not be a prime.
*/

function sumPrimes(num) {
  // Create array of all numbers up to num
  var placeholder = [];
  for(i=2; i<=num; i++){
    placeholder.push(i);
  }

  // Filter out everything except for primes
  var primeArr = placeholder.filter(isPrime);
  // Get the sum of the array of primes
  primeArr = primeArr.reduce(getSum);

  return primeArr;
}

// Checks if a given number is a prime
function isPrime(num) {
  // Start at 2 because we don't need to check 1
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

//Sums all elements of the array
function getSum(total, num) {
    return total + num;
}

sumPrimes(10);
