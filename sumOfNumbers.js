function  sumofNumbers(number) {
    var sum = 0;
    for (i = 1; i <= 7; i++){
        sum = sum + i;
        console.log(sum, i);

    }
    return sum;
}
var numberDao = [1, 2, 3, 4, 5, 6, 7];
var numberNao = sumofNumbers(numberDao); 
console.log('Sum ', numberNao);