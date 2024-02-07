//Aqui irá el cliente y los mensajes que se le envian al servidor...
export default class SocketHandler{

    constructor(scene){

        scene.socket = io('http://localhost:3000');

        scene.socket.on('connect', () => {
            console.log('Connected!');
            //PARA INICIAR LA CONEXION SE TIENE QUE EMITIR PRIMERO UN MENSAJE:
            //scene.socket.emit('nombre de la accion', scene.socket.id);
            //para que se ejecute la accion seguir el siguiente formato:
            //scene.EscenaQueSea.FuncionDeLaEscena();
        })

        //aqui el resto de mensajes...
    }

}