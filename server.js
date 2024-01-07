const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors'); // Importa el middleware CORS

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(cors()); // Habilita CORS para todas las rutas

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(__dirname + '/public'));

// Manejo de errores en Socket.io
io.on('error', (error) => {
  console.error('Error en Socket.io:', error);
});

// Configura rutas, middleware, etc. según sea necesario

io.on('connection', (socket) => {
  console.log('Usuario conectado');

  // Maneja eventos personalizados
  socket.on('chat message', (msg) => {
    console.log('Mensaje recibido:', msg);
    // Puedes emitir el mensaje a todos los clientes
    io.emit('chat message', msg);
  });

  socket.on('post', (data) => {
    const { player, message } = data;

    try {
      const mensaje = JSON.parse(message);

      switch (mensaje.tipo) {
        case 'registro':
          // Lógica para registrar al usuario
          console.log(`Registrando usuario: ${player}`);
          // Aquí puedes realizar la lógica de registro y emitir una respuesta si es necesario
          break;
        case 'iniciarSesion':
          // Lógica para iniciar sesión
          console.log(`Iniciando sesión para el usuario: ${player}`);
          // Aquí puedes realizar la lógica de inicio de sesión y emitir una respuesta si es necesario
          break;
        case 'borrarUsuario':
          // Lógica para borrar al usuario
          console.log(`Borrando usuario: ${player}`);
          // Aquí puedes realizar la lógica de borrado de usuario y emitir una respuesta si es necesario
          break;
        case 'actualizarUsuario':
          // Lógica para actualizar la contraseña del usuario
          console.log(`Actualizando contraseña para el usuario: ${player}`);
          // Aquí puedes realizar la lógica de actualización de usuario y emitir una respuesta si es necesario
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
