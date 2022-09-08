function milesToKilometer(miles) {
    const kilometer = miles * 1.609;
    return kilometer;
}

var miles = 144;
var miles2 = milesToKilometer(miles);
console.log(miles2);