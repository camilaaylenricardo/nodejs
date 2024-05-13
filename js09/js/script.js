class CAutores {
    constructor() {
      this.Autores = [];
    }
  
    agregarAutor(Nombre, Apellido, Nacionalidad, MejorObra, AñoPlanificacion, EdadPublicacion) {
      this.Autores.push({
        Nombre,
        Apellido,
        Nacionalidad,
        MejorObra,
        AñoPlanificacion,
        EdadPublicacion
      });
    }
  
    generarTablaAutor() {
      const tablaBody = document.querySelector('#TablaAutor tbody');
      tablaBody.innerHTML = '';
  
      for (const Autores of this.Autores) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${Autores.Nombre}</td>
          <td>${Autores.Apellido}</td>
          <td>${Autores.Nacionalidad}</td>
          <td>${Autores.MejorObra}</td>
          <td>${Autores.AñoPlanificacion}</td>
          <td>${Autores.EdadPublicacion}</td>
        `;
        tablaBody.appendChild(fila);
      }
    }
  
    listarArgentinos() {
      let count = 0;
      for (const Autores of this.Autores) {
        if (Autores.Nacionalidad === 'Argentino') {
          count++;
        }
      }
      return count;
    }
  
    mostrarEntre1960y1980() {
      let count = 0;
      for (const Autores of this.Autores) {
        if (Autores.AñoPlanificacion>= 1960 && Autores.AñoPlanificacion <= 1980) {
          count++;
        }
      }
      return count;
    }
  
    hacerPromedio() {
      let sum = 0;
      for (const Autores of this.Autores) {
        sum += Autores.EdadPublicacion;
      }
      return sum / this.Autores.length;
    }

    mostrarAutores() {
      let html = '';
      for (const Autores of this.Autores) {
        html += `
          
            ${Autores.Nombre}
            ${Autores.Apellido}
            ,
        `;
      }
      return html;
    }

  }
  const Autores = new CAutores();

  Autores.agregarAutor('Gabriel', 'García Márquez', 'Colombiano', 'Cien años de soledad', 1967, 40);
  Autores.agregarAutor('Julio', 'Cortázar', 'Argentino', 'Rayuela', 1963, 48);
  Autores.agregarAutor('Isabel', 'Allende', 'Chilena', 'La casa de los espíritus', 1982, 40);
  Autores.agregarAutor('Jorge Luis', 'Borges', 'Argentino', 'Ficciones', 1944, 45);
  Autores.agregarAutor('Clarice', 'Lispector', 'Brasileña', 'La hora de la estrella', 1977, 56);
  Autores.agregarAutor('Juan', 'Rulfo', 'Mexicano', 'Pedro Páramo', 1955, 38);
  Autores.agregarAutor('Carlos', 'Fuentes', 'Mexicano', 'La región más transparente', 1958, 29);
  Autores.agregarAutor('Eduardo', 'Galeano', 'Uruguayo', 'Las venas abiertas de América Latina', 1971, 31);
  
  // Generar la tabla de las personas 
  Autores.generarTablaAutor();

  document.getElementById("resultado1").textContent = "Listar todos los autores que sean de Nacionalidad Argentina:" + Autores.listarArgentinos();
  
  document.getElementById("resultado2").textContent = "Listar todos los autores que publicaron entre 1960 a 1980: " + Autores.mostrarEntre1960y1980();
  

  document.getElementById("resultado3").textContent = "Mostrar el promedio de la edad de publicación:" + Autores.hacerPromedio();

  //mostrar a los autores
  document.getElementById("resultado4").textContent = "Mostrar todos los autores: " + Autores.mostrarAutores();
  