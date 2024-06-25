
const Persona = require('./persona');//requiere el archivo persona

const persona1 = new Persona('Camila', 18);// le damos valores a las variables
const persona2 = new Persona('Juan', 19);


persona1.mostrarInformacion(); //mostrar en pantalla, desde el archivo persona
persona2.mostrarInformacion(); 