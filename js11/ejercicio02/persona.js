class Persona {//hacemos una clase y declaramos variables
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarInformacion() {//mostrar en pantalla
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

module.exports = Persona;//exportar persona