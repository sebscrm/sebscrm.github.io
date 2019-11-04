function count_vowels(str) {
  var vowelsCount = 0;

  //turn the input into a string
  var string = str.toString();

  //loop through the string
  for (var i = 0; i <= string.length - 1; i++) {

  //if a vowel, add to vowel count
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u" || string.charAt(i) == "y") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

console.log(count_vowels("alphabet")) // 3
console.log(count_vowels("Propulsion Academy")) // 7
console.log(count_vowels("AaaAa")) // 5 - shouldnt be 3? exercise text "You may assume that all the letters are lower cased"
console.log(count_vowels("fly")) // 0 - Shouldnt be 1?The exercise says "You can treat “y” as a consonant." so I think the 0 was a typo.