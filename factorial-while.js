function factorialWhile(number) {
    var i = 1;
    var result = 1;
    while (i < number) {
        result = result * 1;
        i++;
    }
    return result;
}
var factorialDao = 9;
var factorialNao = factorialWhile(factorialDao);
console.log(factorialNao);