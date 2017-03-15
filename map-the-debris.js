/* Teresa Rothaar
   Free Code Camp Challenge #291 - Map the Debris

   Return a new array that transforms the element's average
   altitude into their orbital periods.

   The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

   You can read about orbital periods on wikipedia.

   The values should be rounded to the nearest whole number. The body being orbited is Earth.

   The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

// Wot?

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  // Create array to return results
  var newArray=[];
  // Iterate through arr
  for(var i=0; i<arr.length; i++){
    // Calculate orbital period using several Math library functions
  var results = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+arr[i].avgAlt,3)/GM));
    // Push object for each iteration
    newArray.push({name:arr[i].name, orbitalPeriod: results});
  }

  return newArray;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
