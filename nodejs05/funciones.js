
const señales = [100, 200, 50, 330, 250, 180, 190, 200, 150, 90, 165, 240, 20, 340];

function obtenerCuadrante(angulo) {
    let cuadrante = '';
    const anguloNormalizado = (angulo + 360) % 360;

    if (anguloNormalizado < 90) {
        cuadrante = 'N';
    } else if (anguloNormalizado < 180) {
        cuadrante = 'E';
    } else if (anguloNormalizado < 270) {
        cuadrante = 'S';
    } else {
        cuadrante = 'O';
    }

    return cuadrante;
}

function obtenerSecuenciaCuadrantes(señales) {
    return señales.map(signal => obtenerCuadrante(signal)).join('');
}

function obtenerCiclosCompletos(secuencia) {
    let ciclos = 0;
    for (let i = 0; i < secuencia.length - 3; i++) {
        const ciclo = secuencia.substring(i, i + 4);
        if (ciclo.includes('N') && ciclo.includes('E') && ciclo.includes('S') && ciclo.includes('O')) {
            ciclos++;
        }
    }
    return ciclos;
}

function calcularPorcentajeCuadrante(secuencia, cuadrante) {
    const ocurrencias = (secuencia.match(new RegExp(cuadrante, 'g')) || []).length;
    return (ocurrencias / secuencia.length) * 100;
}


function main() {
    console.log("Señales ingresadas:", señales.join(', '));

    const secuenciaCuadrantes = obtenerSecuenciaCuadrantes(señales);
    console.log("Secuencia de cuadrantes:", secuenciaCuadrantes);

    const ciclosCompletos = obtenerCiclosCompletos(secuenciaCuadrantes);
    console.log("Cantidad de ciclos completos:", ciclosCompletos);

    console.log("Porcentaje de ocurrencia de cada cuadrante:");
    console.log("Norte:", calcularPorcentajeCuadrante(secuenciaCuadrantes, 'N') + "%");
    console.log("Este:", calcularPorcentajeCuadrante(secuenciaCuadrantes, 'E') + "%");
    console.log("Sur:", calcularPorcentajeCuadrante(secuenciaCuadrantes, 'S') + "%");
    console.log("Oeste:", calcularPorcentajeCuadrante(secuenciaCuadrantes, 'O') + "%");
}

main();