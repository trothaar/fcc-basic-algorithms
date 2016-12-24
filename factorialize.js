// Teresa Rothaar
// Free Code Camp Challenge #238
// Returns the factorial of the provided integer

function factorialize(num) {
  var numFactorial = 1;
  if (num === 0){
    return 1; // 0! = 1 by definition
  }else{
    for (i = 1; i<=num; i++){
      numFactorial *= i;
    }
  }
  return numFactorial;
}

factorialize(5);
