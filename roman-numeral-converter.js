/* Teresa Rothaar
   Free Code Camp Challenge #266 - Roman Numeral Converter

   Convert the given number into a Roman numeral.

   All answers should be provided in upper case.
*/

function convertToRoman(num) {
  var romanArr = [];
  var tempArr =[];
  var r;
  var r2;
  var r3;
  var base;

  if(num > 999){ //Case 1 - thousands
    if(num%1000 === 0){ //Case 2a - even division by 1000; easy
      romanArr.push(convertThousands(num));
    }else if(num%100 <10){ // Remainder < 10; harder
      r = num%100;  // Get remainder for thousands
      base = num-r; // Subtract remainder from base for singles
      // Send remainder and base to appropriate fns
      romanArr.push(convertThousands(base));
      romanArr.push(convertSingles(r));
    }else if(num%1000 <100){ // Remainder <100; harder still
      r = num%100;  // Get remainder
      base = num-r; // Subtract remainder from base for thousands
      r2 = r%10; // Get remainder of remainder for singles
      r = r-r2; // Subtract r2 from r for tens
      // Send remainders and base to appropriate fns
      romanArr.push(convertThousands(base));
      romanArr.push(convertTens(r));
      romanArr.push(convertSingles(r2));
    }else{ // Remainder >100; total clusterf--k
      r = num%1000;  // Get remainder
      base = num-r; // Subtract remainder from base for thousands
      r2 = r%100; // Get remainder of remainder
      r = r-r2; // Subtract r2 from r for hundreds
      r3 = r2%10; // Get remainder of r2 for singles
      r2 = r2-r3; //Subtract r3 from r2 for tens
      // Send remainders and base to appropriate fns
      romanArr.push(convertThousands(base));
      romanArr.push(convertHundreds(r));
      romanArr.push(convertTens(r2));
      romanArr.push(convertSingles(r3));
    }
  }
  else if(num > 99){ //Case 2 - hundreds
    if(num%100 === 0){ //Case 2a - even division by 100; easy
      romanArr.push(convertHundreds(num));
    }else if(num%100 <10){ // Remainder < 10; harder
      r = num%100;  // Get remainder
      base = num-r; // Subtract remainder from base
      // Send remainder and base to appropriate fns
      romanArr.push(convertHundreds(base));
      romanArr.push(convertSingles(r));
    }else{ // Remainder >= 10; hardest
      r = num%100;  // Get remainder
      base = num-r; // Subtract remainder from base for hundreds
      r2 = r%10; // Get remainder of remainder for singles
      r = r-r2; // Subtract r2 from r for tens
      // Send remainders and base to appropriate fns
      romanArr.push(convertHundreds(base));
      romanArr.push(convertTens(r));
      romanArr.push(convertSingles(r2));
    }
  }
  else if(num>9){ // Case 3 - tens from 10 to 90
    if(num%10 === 0){ //Case 3a - even division by 10; easy
      romanArr.push(convertTens(num));
    }else{ // No even division; much harder
      r = num%10;  // Get remainder for singles
      base = num-r; // Subtract remainder from base for tens
      romanArr.push(convertTens(base));
      romanArr.push(convertSingles(r));
    }
  }
  else{ // Case 4 - 1 through 9
    romanArr.push(convertSingles(num));
  }
 var romanNum = romanArr.join('');
 console.log(romanNum);
 return romanNum;
}

//Converts numbers 1-9
function convertSingles(num){
  switch (num) {
    case 1:
        return "I";
    case 2:
        return "II";
    case 3:
        return "III";
    case 4:
        return "IV";
    case 5:
        return "V";
    case 6:
        return "VI";
    case 7:
        return "VII";
    case 8:
        return "VIII";
    default:
         return "IX";
}
}

//Converts multiples of 10 up to 90
function convertTens(num){
  switch (num) {
    case 10:
        return "X";
    case 20:
        return "XX";
    case 30:
        return "XXX";
    case 40:
        return "XL";
    case 50:
        return "L";
    case 60:
        return "LX";
    case 70:
        return "LXX";
    case 80:
        return "LXXX";
    default:
         return "XC";
}
}

//Converts multiples of 100 up to 900
function convertHundreds(num){
  switch (num) {
    case 100:
        return "C";
    case 200:
        return "CC";
    case 300:
        return "CCC";
    case 400:
        return "CD";
    case 500:
        return "D";
    case 600:
        return "DC";
    case 700:
        return "DCC";
    case 800:
        return "DCCC";
    case 900:
         return "CM";
    default:
         return "Error";
}
}

//Converts multiples of 1000 up to 3000
function convertThousands(num){
  switch (num) {
    case 1000:
        return "M";
    case 2000:
        return "MM";
    default:
         return "MMM";
}
}
convertToRoman(36);
