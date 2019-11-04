function factorial(num) {
  if (num < 0) {
    return ("n must be > or = to 0");
    } 
  
  if (num === 0 || num === 1) {
    return 1;
  } 
  
  
  for (var i = num - 1; i >= 1; i--) {
        num = num * i;
      }
return num;
  
}

console.log(factorial(5)) // 120
console.log(factorial(4)) // 24
console.log(factorial(0)) // 1
console.log(factorial(-1)) // "n must be > or = to 0"