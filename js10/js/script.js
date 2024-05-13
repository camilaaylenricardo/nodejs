class CJugadores {
    constructor() {
      this.Jugadores = [];
    }
  
    agregarJugador(Nombre, Posicion, Edad, Estatura, Peso, Nacionalidad) {
      this.Jugadores.push({
        Nombre,
        Posicion,
        Edad,
        Estatura,
        Peso,
        Nacionalidad
      });
    }
  
    generarTablaJugador() {
      const tablaBody = document.querySelector('#TablaJugador tbody');
      tablaBody.innerHTML = '';
  
      for (const Jugadores of this.Jugadores) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${Jugadores.Nombre}</td>
          <td>${Jugadores.Posicion}</td>
          <td>${Jugadores.Edad}</td>
          <td>${Jugadores.Estatura}</td>
          <td>${Jugadores.Peso}</td>
          <td>${Jugadores.Nacionalidad}</td>
        `;
        tablaBody.appendChild(fila);
      }
    }
  
    listarArgentinos() {
      let count = 0;
      for (const Jugadores of this.Jugadores) {
        if (Jugadores.Nacionalidad === 'Argentina') {
          count++;
        }
      }
      return count;
    }
  
    mostrarEntre75y80() {
      let count = 0;
      for (const Jugadores of this.Jugadores) {
        if (Jugadores.Peso>= 75 && Jugadores.Peso <= 80) {
          count++;
          
        }
      }
      return count;
    }

    mostrarJugadorAlto(){
    let html= '';
    for (const Jugadores of this.Jugadores) {
        
        if (Jugadores.Estatura>Jugadores.Estatura ) {
            
            html += `
        ${Jugadores.Nombre}
        ` 
    }
}
    return html;
}


  }
  const Jugadores = new CJugadores();

  Jugadores.agregarJugador('Fabio1', 'G', 43, 1.88, 86, 'Brasil');
  Jugadores.agregarJugador('Marlon4', 'D', 28, 1.83, 78, 'Brasil');
  Jugadores.agregarJugador('Marcelo12', 'D', 35, 1.73, 72, 'Brasil');
  Jugadores.agregarJugador('Nino33', 'D', 26, 1.88, 82, 'Brasil');
  Jugadores.agregarJugador('John Kennedy9', 'A', 21, 1.73,  71, 'Brasil');
  Jugadores.agregarJugador('Keno11', 'A', 34, 1.78, 72, 'Brasil');
  Jugadores.agregarJugador('German Cano14', 'A',35, 1.78, 81, 'Argentina');
 
  // Generar la tabla de las personas 
  Jugadores.generarTablaJugador();

  document.getElementById("resultado1").textContent = "Listar todos los Jugadores que sean de Nacionalidad Argentina:" + Jugadores.listarArgentinos();
  
  document.getElementById("resultado2").textContent = "Listar todos los Jugadores que pesan entre 75 y 80: " + Jugadores.mostrarEntre75y80();

  document.getElementById("resultado3").textContent = "Mostrar el Jugador mas alto:" + Jugadores.mostrarJugadorAlto();
