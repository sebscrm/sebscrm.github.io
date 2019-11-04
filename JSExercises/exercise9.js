const two_sum = (arr, target) => {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}
console.log(two_sum([1, 3, -1, 5],0)) // [[0, 2]]
console.log(two_sum([1, 3, -1, 5, -3],0)) // [[0, 2], [1, 4]]
console.log(two_sum([1, 5, 3, -4],0)) // null
// => Output [ 0, 1 ]