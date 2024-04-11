function decodificarMensaje() {
   
    const mensajeEncriptado = document.getElementById('mensajeEncriptado').value;

    const mensajeDecodificado = mensajeEncriptado.split('').reverse().join('');

    document.getElementById('mensajeDecodificado').innerText = mensajeDecodificado;
  }
