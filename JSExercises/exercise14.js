function largest_of_four(arr) {
 let answer = []
  for (let i = 0; i < arr.length; i++) {
    answer.push(Math.max(...arr[i]))
  }
  return answer


}

console.log(largest_of_four([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])) // [27,5,39,1001]
