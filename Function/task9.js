// function power(base, exponent) {
//     return Math.pow(base, exponent);
//   }
//   console.log(power(2, 3)); 
  

function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }
  console.log(power(2, 3));  
  