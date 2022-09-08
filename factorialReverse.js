function reverseFactorial(num) {
    var result = 1;
    for (i = num; i > 0; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}

var numberDao = 5;
var numberNao = reverseFactorial(numberDao);
console.log('Reverse Factorial:', numberDao, numberNao);