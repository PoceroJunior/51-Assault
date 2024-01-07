const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors'); 

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(cors()); 
//Casi todo está en la carpeta public para que se encuentre su ruta
app.use(express.static(__dirname + '/public'));

io.on('error', (error) => {
  console.error('Error en Socket.io:', error);
});

io.on('connection', (socket) => {
  console.log('Usuario conectado');

  socket.on('chat message', (msg) => {
    console.log('Mensaje recibido:', msg);
    io.emit('chat message', msg);
  });

  socket.on('post', (data) => {
    const { player, message } = data;

    
    try {
      const mensaje = JSON.parse(message);

      switch (mensaje.tipo) {
        case 'registro':
          console.log(`Registrando usuario: ${player}`);
          break;
        case 'iniciarSesion':
          console.log(`Iniciando sesión para el usuario: ${player}`);
          break;
        case 'borrarUsuario':
          console.log(`Borrando usuario: ${player}`);
          break;
        case 'actualizarUsuario':
          console.log(`Actualizando contraseña para el usuario: ${player}`);
          break;
        default:
          console.log(`Mensaje con tipo desconocido: ${player} - ${message}`);
      }
    } catch (error) {
      console.error(`Error al analizar el mensaje JSON: ${error}`);
    }
  });


  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor Socket.io en ejecución en http://localhost:${PORT}`);
});
