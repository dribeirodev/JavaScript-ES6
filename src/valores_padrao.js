function soma(a = 1,b = 5){
    return a + b
}
console.log(soma(2));
console.log(soma());

const somaArrawFunctions = (a = 1, b = 5) => a + b;
console.log(somaArrawFunctions(2));
console.log(somaArrawFunctions());