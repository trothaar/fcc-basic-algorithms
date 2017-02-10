/* Teresa Rothaar
   Free Code Camp Challenge #264 - Sum All Numbers in a Range

   We'll pass you an array of two numbers.
   Return the sum of those two numbers and all numbers between them.
   The lowest number will not always come first.
*/

function sumAll(arr) {
  // Sort the array so the lowest number is first
  arr.sort(function(a, b){return a-b;});
  var x = arr[0];
  var y = arr[1];
  var temp = x;
  // Start with the value of x; keep adding 1
  // and pushing each number into the array until
  // reaching y-1
  while(temp<y-1){
    temp++;
    arr.push(temp);
  }
  // Use reduce and external function getSum to add up numbers
  return arr.reduce(getSum);
}

function getSum(total, num) {
    return total + num;
}

sumAll([1, 4]);
