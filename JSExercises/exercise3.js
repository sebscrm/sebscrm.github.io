function longest_word(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}
console.log(longest_word("This is an amazing test")) // "amazing"
console.log(longest_word("Laurent Colin")) // "Laurent"
console.log(longest_word("Propulsion 123")) // "Propulsion"