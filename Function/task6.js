// function productOfArray(arr) {
//     return arr.reduce((product, num) => product * num, 1);
//   }
//   console.log(productOfArray([1, 2, 3, 4])); 
  



  function productOfArray(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    return product;
  }
  console.log(productOfArray([1, 2, 3, 4])); 
  