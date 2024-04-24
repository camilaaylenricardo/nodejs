function calcularSecuencia() {
    const seedInput = document.getElementById('seed');
    const seed = parseInt(seedInput.value);
    
    let sequence = [];
    let current = seed;
    while (current !== 1) {
        sequence.push(current);
        if (current % 2 === 0) {
            current /= 2;
        } else {
            current = current * 3 + 1;
        }
    }
    sequence.push(1); // Agregamos el último elemento, que siempre será 1
    
    const longest = sequence.length;
    const maxNumber = Math.max(...sequence);

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p>Longitud de la secuencia: ${longest}</p>
        <p>Número más grande: ${maxNumber}</p>
    `;
}