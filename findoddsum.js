sum = 0;
function addoddNumber(number) {
    for (i = 0; i <= number.length; i++){
        if (i % 2 !== 0) {
            sum = sum + i;
            console.log(i);
        }
    }
    return sum;

}

var numberDao = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numberNao = addoddNumber(numberDao);
console.log(numberNao);