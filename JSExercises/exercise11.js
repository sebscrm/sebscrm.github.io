function repeat_string_num_times(string, times) {
	// first the empty string that will host the repeated string
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--; // this is the equivalent of times - 1
  }
  return repeatedString;
}

console.log(repeat_string_num_times("abc", 3)) // 'abcabcabc'
console.log(repeat_string_num_times("abc", 1)) // 'abc'
console.log(repeat_string_num_times("abc", 0)) // ''
console.log(repeat_string_num_times("abc", -1)) // '')