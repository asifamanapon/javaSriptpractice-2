function isLeapYear(number){
    var LeapYear = number % 4;
    if (LeapYear === 0) {
        return true;
    }
    return false;
}

var salDao = 1944;
var leapSal = isLeapYear(salDao);
console.log(leapSal);