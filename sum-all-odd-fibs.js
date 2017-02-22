/* Teresa Rothaar
   Free Code Camp Challenge #276 - Sum All Odd Fibonacchi Numbers

   Given a positive integer num, return the sum of all
   odd Fibonacci numbers that are less than or equal to num.

   The first two numbers in the Fibonacci sequence are 1 and 1.
   Every additional number in the sequence is the sum of the two
   previous numbers. The first six numbers of the Fibonacci
   sequence are 1, 1, 2, 3, 5 and 8.

   For example, sumFibs(10) should return 10 because all
   odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  // Start by calculating our Fibs and putting them
  // into an array
  var placeholder = calculateFibs(num);
  // Filter the array so only the odd numbers remain
  var oddsArr = placeholder.filter(returnOdds);
  // Sum and return the odd numbers
  var oddFibsTotal = oddsArr.reduce(getSum);
  return oddFibsTotal;
}

// Takes a number and returns the
// Fibonacci sequence up to and including that
// number as an array
function calculateFibs(n){
  var fibArr = [];
  var temp = 0;
  if(n === 1){
    fibArr.push(1);
  }else if (n === 2){
    fibArr.push(1, 1);
  }else{
    fibArr.push(1, 1);
    for(i=2; i<n; i++){
      temp = fibArr[i-1] + fibArr[i-2];
      if(temp<=n){
      fibArr.push(temp);
      }else{
        return fibArr;
      }
    }
  }
  return fibArr;
}

// Checks if array entry is odd
function returnOdds(index) {
    return(index%2 !==0);
}

//Sums all elements of the array
function getSum(total, num) {
    return total + num;
}

sumFibs(4);
