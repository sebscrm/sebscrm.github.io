function sum_nums(num) {
  var total = 0;
    for(var i = 1; i <= num; i++){
      total += i;
    }
    return total;
}


console.log(sum_nums(6)) // 21
console.log(sum_nums(1)) // 1
console.log(sum_nums(0)) // 0