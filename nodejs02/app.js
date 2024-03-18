const http = require('node:http')
const fs = require('node:fs')

const mime = { 
    'html': 'text/html', 
    'css': 'text/css', 
    'jpg': 'image/jpg', 
    'ico': 'image/x-icon', 
    'mp3': 'audio/mpeg3', 
    'mp4': 'video/mp4' 
  } 
   
  const servidor = http.createServer((pedido, respuesta) => { 
    const url = new URL('http://localhost:8088' + pedido.url) 
    let camino = 'index.html' + url.pathname 
    if (camino == 'index.html') 
      camino = 'index.html' 
    encaminar(pedido, respuesta, camino) 
  }) 
   
  servidor.listen(8888) 
   
   
  function encaminar(pedido, respuesta, camino) { 
    console.log(camino) 
    switch (camino) { 
      case 'index.html/recuperardatos': { 
        recuperar(pedido, respuesta) 
        break 
      } 
      default: { 
        fs.stat(camino, error => { 
          if (!error) { 
            fs.readFile(camino, (error, contenido) => { 
              if (error) { 
                respuesta.writeHead(500, { 'Content-Type': 'text/plain' }) 
                respuesta.write('Error interno') 
                respuesta.end() 
              } else { 
                const vec = camino.split('.') 
                const extension = vec[vec.length - 1] 
                const mimearchivo = mime[extension] 
                respuesta.writeHead(200, { 'Content-Type': mimearchivo }) 
                respuesta.write(contenido) 
                respuesta.end() 
              } 
            }) 
          } else { 
            respuesta.writeHead(404, { 'Content-Type': 'text/html' }) 
            respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>') 
            respuesta.end() 
          } 
        }) 
      } 
    } 
  } 
   
   
  function recuperar(pedido, respuesta) { 
    let info = '' 
    pedido.on('data', datosparciales => { 
      info += datosparciales 
    }) 
    pedido.on('end', () => { 
      const formulario = new URLSearchParams(info) 
      console.log(formulario) 
      respuesta.writeHead(200, { 'Content-Type': 'text/html' }) 
   
      function traducirAPidioma(frase) {
        const vocales = /[aeiouáéíóú]/gi;
        let resultado = '';
    
        for (let letra of frase) {
            if (letra.match(vocales)) {
                resultado += 'p' + letra.toLowerCase() + 'p';
            } else {
                resultado += letra;
            }
        }
    
        return resultado;
    }
    
    const frase = "Santy es muy inteligente y durante su clase de matemáticas se pone a hablar con sus compañeros";
    const traduccion = traducirAPidioma(frase);
    console.log(traduccion);
      }) 
  }