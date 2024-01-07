
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors'); // Importa el middleware CORS

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(cors()); // Habilita CORS para todas las rutas

// Configuracion para servir archivos estaticos desde la carpeta 'public'
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

  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor Socket.io en ejecución en http://localhost:${PORT}`);
});
