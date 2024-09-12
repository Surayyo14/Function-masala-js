function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
  }
  console.log(fizzBuzz(15)); 
  console.log(fizzBuzz(9));   
  console.log(fizzBuzz(10));  
  console.log(fizzBuzz(7));  
  