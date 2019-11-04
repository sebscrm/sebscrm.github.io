function add_all(arr){
    var index0 = arr[0], index1 = arr[1], counter = 0, sum = 0, val;
    if(index0 < index1){
         counter += index0;
        while(counter <= index1){
              val = index0++;  
              sum += val;     
              counter++;
         }

  } else if(index0 > index1){
         counter = 1;
         counter += index0;
        while(counter >= index1){
              val = index1 + 1;  
              sum += val;     
             counter--;
         }
    }
   return sum;
}

console.log(add_all([1, 4])) // 10
console.log(add_all([5, 10])) // 45
console.log(add_all([9, 10])) // 19
console.log(add_all([0, 0])) // 0
console.log(add_all([-1, 1])) // 0