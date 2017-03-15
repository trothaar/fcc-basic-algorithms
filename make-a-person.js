/* Teresa Rothaar
   Free Code Camp Challenge #290 - Make A Person

   Fill in the object constructor with the following methods below:

   getFirstName()
   getLastName()
   getFullName()
   setFirstName(first)
   setLastName(last)
   setFullName(firstAndLast)

   Run the tests to see the expected output for each method.

   The methods that take an argument must accept only one argument and it has to be a string.

   These methods must be the only available means of interacting with the object.
*/

var Person = function(firstAndLast) {
  // Put the param value (a full name) into an array split by a space
  var array = firstAndLast.split(" ");

  // Now use the array params for all the functions
  this.getFirstName = function(){
    return array[0];
  };

  this.getLastName = function(){
    return array[1];
  };

  this.getFullName = function(){
    return array[0] + " "  + array[1];
  };

  this.setFirstName = function(first){
    array[0] = first;
  };

  this.setLastName = function(last){
    array[1] = last;
  };

  this.setFullName = function(firstAndLast){
    var temp = firstAndLast.split(" ");
    //array[0] = temp[0];
    //array[1] = temp[1];
    // The above will work, too, but this is more elegant
    this.setFirstName(temp[0]);
    this.setLastName(temp[1]);
  };

};

var bob = new Person('Bob Ross');
bob.getFullName();
