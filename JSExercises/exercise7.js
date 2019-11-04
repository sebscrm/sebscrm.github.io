function palindrome(str) 
{

  x = str.split("");
  y = x.reverse();
  z = y.join("");
  regExp = z.replace(/[\W_]/gi, "");
      if(regExp === str)
         {
           return true;
         }
      else
         {
           return false;
         }

}

console.log(palindrome("ABBA")) // true
console.log(palindrome("AbbA")) // true
console.log(palindrome("abcd")) // false)
