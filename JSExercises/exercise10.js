function is_power_of_two(x) {
    return (Math.log(x)/Math.log(2)) % 1 === 0;
}

console.log(is_power_of_two(8)) // true
console.log(is_power_of_two(16)) // true
console.log(is_power_of_two(32)) // true
console.log(is_power_of_two(12)) // false
console.log(is_power_of_two(24)) // false