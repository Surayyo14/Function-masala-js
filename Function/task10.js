// function sumToN(n) {
//   return (n * (n + 1)) / 2;
// }
// console.log(sumToN(10)); 


function sumToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(sumToN(10)); 
  