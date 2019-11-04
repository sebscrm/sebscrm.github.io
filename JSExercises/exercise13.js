function is_it_true(val) {
   return val === false || val === true;

}


console.log(is_it_true(true)) // true
console.log(is_it_true(false)) // true
console.log(is_it_true("true")) // false
console.log(is_it_true(1)) // false
console.log(is_it_true("false")) // false