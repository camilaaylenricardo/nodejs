function calcularSecuencia() { /*se crea la funcion y no acepta argumentos*/
    const seedInput = document.getElementById('seed'); /*el input, donde el usuario ingresa el numero*/
    const seed = parseInt(seedInput.value);/*la variable seed se convierte en un int(entero)*/
    
    let sequence = [];/*Se crea una matriz vacía llamada sequence que almacenará los números de la secuencia de Collatz.*/
    let current = seed;/*Se inicializa una variable llamada current con el valor del número inicial ingresado por el usuario.*/
        while (current !== 1) {/*Comienza un bucle while que continuará ejecutándose hasta que el número actual en la secuencia sea igual a 1, que es el último número en la secuencia de Collatz.*/
        sequence.push(current);/*Dentro del bucle, el número actual se agrega a la matriz sequence. */
        if (current % 2 === 0) {/*En cada iteración del bucle, se aplica la regla de la conjetura de Collatz: si el número actual es par, se divide por 2; de lo contrario, se multiplica por 3 y se suma 1. */
            current /= 2;
        } else {
            current = current * 3 + 1;
        }
    }
    sequence.push(1); // Agregamos el último elemento, que siempre será 1
    
    const longest = sequence.length;
    const maxNumber = Math.max(...sequence);

    const outputDiv = document.getElementById('output'); /*Este es un contenedor donde se mostrarán los resultados del cálculo. */
    outputDiv.innerHTML = `
        <p>Longitud de la secuencia: ${longest}</p> 
        <p>Número más grande: ${maxNumber}</p>
    `;
}
