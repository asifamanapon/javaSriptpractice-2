function reverseFac(number) {
    var i = number;
    var result = 1;
    while (i >= 1) {
        result = result * i;
        i--;
        console.log(i);
    }
    return result;
}
var numberDao = 8;
var numberNao = reverseFac(numberDao);
console.log(numberNao);