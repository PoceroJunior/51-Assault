function post(player, message) {
    const data = { player: `>${player}`, message: `${message}` };
    socket.emit('post', data); // Emitir el evento 'post' con los datos
  }
  
  function get() {
    for (let i = 0; i <= 2; i++) {
      socket.emit('get', { index: i.toString() }); // Emitir el evento 'get' con el índice
    }
  }
  //aqui habría que añadir tambien los eventos delete y put...
  
  