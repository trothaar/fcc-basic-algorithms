//Teresa Rothaar

// Takes a number and returns the
// Fibonacci sequence of that number as an array
// Warning: This can calcuate some huge numbers
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
      fibArr.push(temp);
    }
  }
  return fibArr;
}
