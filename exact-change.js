/* Teresa Rothaar
   Free Code Camp Challenge #287 - Exact Change

   Design a cash register drawer function checkCashRegister()
   that accepts purchase price as the first argument (price),
   payment as the second argument (cash), and cash-in-drawer (cid)
   as the third argument.

   cid is a 2D array listing available currency.

   Return the string "Insufficient Funds" if cash-in-drawer
   is less than the change due. Return the string "Closed" if
   cash-in-drawer is equal to the change due.

   Otherwise, return change in coin and bills, sorted in
   highest to lowest order.
*/

function checkCashRegister(price, cash, cid) {
  // Multiply amounts by 100 to get around Javascript's dislike of anything but integers
  var grossChange = 100 * (cash - price);
  var availableFunds = 0;
  // Set array to hold denomination values & array to be returned
  var moneyValues = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  var amtToReturn = [];

  // Loop through cid array from end to beginning -- highest to lowest denoms
  for (var i = cid.length - 1; i >= 0; i--){
    var amt = 0;
    while (moneyValues[i] <= grossChange && cid[i][1] > 0 && grossChange > 0){
      // Deduct amount from cid & gross change, and keep track of how much
      // was removed from the register
      cid[i][1] -= moneyValues[i]/100;
      grossChange -= moneyValues[i];
      amt += moneyValues[i]/100;
    }
    if (amt !== 0){
      amtToReturn.push([cid[i][0], amt]);
    }
  }

  // If there is some gross change left over, there's
  // not enough in the drawer to cover it
  if (grossChange !== 0){
    return "Insufficient Funds";
  }

  // If there is any money left in cid, return amtToReturn
  for (var j = 0; j < cid.length; j++){
    if (cid[j][1] > 0){
      return amtToReturn;
    }
  }

  // Default: Empty register
  return "Closed";

}
