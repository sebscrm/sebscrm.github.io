function time_conversion(n) {
var num = n;
var hours = (num / 60);
var rhours = Math.floor(hours);
var minutes = (hours - rhours) * 60;
var rminutes = Math.round(minutes);
return rhours + ":" + rminutes; //How can I code the hours and the minutes in 2 digits?
}


console.log(time_conversion(155)) // "02:35"
console.log(time_conversion(61)) // "01:01"
console.log(time_conversion(60)) // "01:00"
console.log(time_conversion(59)) // "00:59"