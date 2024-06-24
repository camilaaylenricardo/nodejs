import Calculadora from './calculadora.mjs';

const calculadora = new Calculadora();

const resultadoMultiplicacion = calculadora.multiplicar(70, 10);
const resultadoDivision = calculadora.dividir(28, 7);

console.log(`Resultado de multiplicar 70 y 10: ${resultadoMultiplicacion}`);
console.log(`Resultado de dividir 28 entre 7: ${resultadoDivision}`);