import Calculadora from './calculadora.js';//importar archivo de calculadora

const calculadora = new Calculadora();

const resultadoMultiplicacion = calculadora.multiplicar(70, 10);// valores a y b
const resultadoDivision = calculadora.dividir(28, 7);

console.log(`Resultado de multiplicar 70 y 10: ${resultadoMultiplicacion}`);
console.log(`Resultado de dividir 28 entre 7: ${resultadoDivision}`);//mostrar en pantalla