
const express = require('express');
const app = express();
const http = require('http').Server(app);

// Configuracion para servir archivos estaticos desde la carpeta 'public'
app.use(express.static(__dirname + '/public'));

// Ruta para servir el archivo HTML en la ruta raiz
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Resto de la configuracion del WebSocket...

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
