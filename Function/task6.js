function productOfArray(arr) {
    return arr.reduce((product, num) => product * num, 1);
  }
  console.log(productOfArray([1, 2, 3, 4])); 
  