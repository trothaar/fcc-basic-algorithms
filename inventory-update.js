/* Teresa Rothaar
   Free Code Camp Challenge #288 - Inventory Update

   Compare and update the inventory stored in a 2D array
   against a second 2D array of a fresh delivery. Update
   the current existing inventory item quantities (in arr1).
   If an item cannot be found, add the new item and quantity
   into the inventory array. The returned inventory array
   should be in alphabetical order by item.
*/


function updateInventory(arr1, arr2) {
  // First, let's give these arrays names that make sense
  var existingInventory = arr1;
  var newInventory = arr2;

  for(var i =0; i<newInventory.length; i++){
    // Case 1: Item does not exist in inventory
   var widget = newInventory[i];
   if(!isItemInArray(existingInventory, widget)){
      existingInventory.push(widget);
    }else{
      // Case 2: Item does exist; we must update the quantity
      // First, find the index of the item
      var widgetIndex = findIndexOfItem(existingInventory, widget);
      // Now update the quantity
      var oldQty = existingInventory[widgetIndex][0];
      //console.log("Old Qty = " + oldQty);
      var newQty = oldQty + widget[0];
      //console.log("New Qty = " + newQty);
      existingInventory[widgetIndex][0] = newQty;
    }
  }

  // Sort the array before returning it
  existingInventory = existingInventory.sort(Comparator);
 //console.log(existingInventory);

    return existingInventory;
}

// Determines if the 2D inventory array contains an item
function isItemInArray(array, item) {
    for (var j = 0; j < array.length; j++) {
        if (array[j][1] == item[1]) {
            return true;   // Found it
        }
    }
    return false;   // Not found
}

// Given a 2D inventory array that definitely contains a
// particular item, returns that item's index
function findIndexOfItem(array, item){
  for (var x = 0; x < array.length; x++) {
        if (array[x][1] == item[1]) {
            return x;
        }
}
  }

// Sorts the 2D array alphabetically
 function Comparator(a, b) {
   if (a[1] < b[1]) return -1;
   if (a[1] > b[1]) return 1;
   return 0;
 }


// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
