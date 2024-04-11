function decodificarMensaje() {
    // Obtener el mensaje encriptado del área de texto
    const mensajeEncriptado = document.getElementById('mensajeEncriptado').value;

    // Invertir el mensaje completo
    const mensajeDecodificado = mensajeEncriptado.split('').reverse().join('');

    // Mostrar el mensaje decodificado
    document.getElementById('mensajeDecodificado').innerText = mensajeDecodificado;
  }