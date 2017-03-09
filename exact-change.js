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

/*
https://forum.freecodecamp.com/t/freecodecamp-algorithm-challenge-guide-exact-change/16012
*/


function checkCashRegister(price, cash, cid) {
  var changeNum = (cash-price)*100;
  var changeArr = [];

  // Iterate through cid array and add up money in drawer
  var drawerTotal = 0;
  for(var i=0; i<cid.length; i++){
    var x = cid[i][1] * 100;
    drawerTotal += x;
  }

  console.log("Drawer total: " + drawerTotal + " Change due: " + changeNum);
  if(drawerTotal<changeNum){
    return "Insufficient Funds";
  }

  if(drawerTotal === changeNum){
    return "Closed";
  }

  // Here is your change, ma'am.
  return changeArr;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
