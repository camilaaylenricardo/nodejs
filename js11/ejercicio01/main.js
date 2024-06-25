
const { sumar, restar } = require('./math');//requiere el archivo math

const resultadoSuma = sumar(10, 15);// valores a y b
const resultadoResta = restar(20, 18);

console.log(`Resultado de sumar 10 y 15: ${resultadoSuma}`);
console.log(`Resultado de restar 20 y 18: ${resultadoResta}`);