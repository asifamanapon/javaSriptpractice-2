function addFactorial(number) {
    var result = 1;
    for (i = 1; i <= number; i++){
        result = result * i;

    }
    return result;
}

var numberDao = 9;
var numberNao = addFactorial(numberDao);
console.log(numberNao);