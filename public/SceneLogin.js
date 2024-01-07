class SceneLogin extends Phaser.Scene{
    constructor(){
        super ({ key: 'SceneLogin'});
        this.playing = false;
        this.mute = false;
        this.inputElement1 = null;
        this.inputElement2 = null;
        this.isLoggedIn = false;
    }
    preload(){


        //Interfaces
        this.load.image ('backgroundLogin', "Assets/Interface/Main-menu/main-menu-background-good.png");
        this.load.image ('IniciarLogin', "Assets/Interface/Login/iniciar-button.png");
        this.load.image ('RegistrarButton', "Assets/Interface/Login/registrar-button.png");
        this.load.image ('Contraseña', "Assets/Interface/Login/contraseña.png");
        this.load.image ('Usuario', "Assets/Interface/Login/usuario.png");
        this.load.image ('salirButton2', "Assets/Interface/player-selection/atras-button.png");
        //Música
        //Sonidos
        this.load.audio("audioboton10", ["Assets/Interface/Sounds/HiHatBoton.ogg", "Assets/Interface/Sounds/HiHatBoton.mp3"])
        // detecta tecla F11
        this.input.keyboard.on('keydown-F11', () => {
        this.setFullScreen();
        });
    }
    
    
     mostrarMensaje(mensaje, color) {
    // Elimina el mensaje anterior si existe
    if (this.mensajeText) {
        this.mensajeText.destroy();
    }

    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2 - 125;

    // Crea un nuevo texto con el mensaje y color proporcionados
    this.mensajeText = this.add.text(centerX, centerY, mensaje, {
        font: "20px Arial",
        fill: color,
    }).setOrigin(0.5);
}
    
    create() {
		
    
	const currentScene = this;


        this.createTextInputs();
        // #region creacion de los assets...
        // imagen de fondo
        this.background = this.add.image(395, 270, 'backgroundLogin').setScale(1.65, 2);

        // usuario
        this.usuario = this.add.image(250, 190, 'Usuario');
        this.usuario.setScale(2);

        // Contraseña
        this.contraseña = this.add.image(530, 190, 'Contraseña');
        this.contraseña.setScale(2);

        // Boton de salir
        this.atrasButton = this.add.image(100, 500, 'salirButton2');
        this.atrasButton.setScale(1.5);
        this.atrasButton.setInteractive();

        // boton de iniciar...
        this.iniciarButton = this.add.image(250, 325, 'IniciarLogin');
        this.iniciarButton.setScale(2);
        this.iniciarButton.setInteractive();

        this.registrarButton = this.add.image(525, 325, 'RegistrarButton');
        this.registrarButton.setScale(2);
        this.registrarButton.setInteractive();
        
        this.actualizarButton = this.add.image(250, 425, 'IniciarLogin');
        this.actualizarButton.setScale(2);
        this.actualizarButton.setInteractive();

        this.borrarButton = this.add.image(525, 425, 'RegistrarButton');
        this.borrarButton.setScale(2);
        this.borrarButton.setInteractive();

        // sonido botones
        
        var botonConfig10 = {
            mute: false,
            volume: 0.1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        this.buttonsound10 = this.sound.add("audioboton10");



        // #endregion

        // interaccion de los botones...
        this.iniciarButton.on('pointerdown', () => {

            this.buttonsound10.play(botonConfig10);
            iniciarSesionUsuario(currentScene);
            

        });
        
        this.actualizarButton.on('pointerdown', () => {
			actualizarUsuario(currentScene);
            this.buttonsound10.play();
            

        });
        this.atrasButton.on ('pointerdown', () => {
            this.buttonsound10.play(botonConfig10);
            this.scene.start('SceneMenu');

        });
        
        this.registrarButton.on('pointerdown', () => {
            this.buttonsound10.play(botonConfig10);
            registroUsuario(currentScene);
        });
        
        this.borrarButton.on('pointerdown', () => {
            this.buttonsound10.play();
            borrarUsuario(currentScene);
        });


    }
    
    disableKey(keyCode) {
    // Desactivar la tecla
    const key = this.input.keyboard.addKey(keyCode);
    key.enabled = false;
}
	 
    createTextInputs() {
    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;

    // Crea caja de texto 1
	this.inputElement1 = document.createElement("input");
	this.inputElement1.type = "text";
	this.inputElement1.id = "miCajaDeTexto1";
	this.inputElement1.placeholder = "Usuario";
	this.inputElement1.style.fontSize = "24px"; // Ajusta el tamaño de la fuente
	this.inputElement1.style.textAlign = "center"; // Centra el texto
	document.body.appendChild(this.inputElement1);
	this.inputElement1.style.position = "absolute";
	this.inputElement1.style.display = "block";
	
	// Crea caja de texto 2
	this.inputElement2 = document.createElement("input");
	this.inputElement2.type = "password";
	this.inputElement2.id = "miCajaDeTexto2";
	this.inputElement2.placeholder = "Contraseña";
	this.inputElement2.style.fontSize = "24px"; // Ajusta el tamaño de la fuente
	this.inputElement2.style.textAlign = "center"; // Centra el texto
	document.body.appendChild(this.inputElement2);
	this.inputElement2.style.position = "absolute";
	this.inputElement2.style.display = "block";
	
	// Crea caja de texto 3
	this.inputElement3 = document.createElement("input");
	this.inputElement3.type = "password";
	this.inputElement3.id = "miCajaDeTexto3";
	this.inputElement3.placeholder = "Nueva contraseña";
	this.inputElement3.style.fontSize = "24px"; // Ajusta el tamaño de la fuente
	this.inputElement3.style.textAlign = "center"; // Centra el texto
	document.body.appendChild(this.inputElement3);
	this.inputElement3.style.position = "absolute";
	this.inputElement3.style.display = "block";

    // Llama al método para inicializar y actualizar las posiciones
    this.actualizarPosicionCajas();

    // Agrega una devolución de llamada al evento de actualización del juego
    this.events.on('update', this.actualizarPosicionCajas, this);
}

actualizarPosicionCajas() {
    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;

    // Actualiza la posición de la caja de texto 1
    this.inputElement1.style.left = (this.sys.canvas.offsetLeft + centerX - 185) + "px";
    this.inputElement1.style.top = (this.sys.canvas.offsetTop + centerY + 40) + "px";

    // Actualiza la posición de la caja de texto 2
    this.inputElement2.style.left = (this.sys.canvas.offsetLeft + centerX + 200) + "px";
    this.inputElement2.style.top = (this.sys.canvas.offsetTop + centerY + 40) + "px";
    
    // Actualiza la posición de la caja de texto 3
    this.inputElement3.style.left = (this.sys.canvas.offsetLeft + centerX) + "px";
    this.inputElement3.style.top = (this.sys.canvas.offsetTop + centerY + 90) + "px";
}

    removeTextInputs() {
        // Elimina las cajas de texto del DOM
        if (this.inputElement1) {
            document.body.removeChild(this.inputElement1);
            this.inputElement1 = null;
        }

        if (this.inputElement2) {
            document.body.removeChild(this.inputElement2);
            this.inputElement2 = null;
        }
        
        if (this.inputElement3) {
            document.body.removeChild(this.inputElement3);
            this.inputElement3 = null;
        }
    }
    
    setFullScreen() {
        const gameCanvas = this.sys.canvas;
    
        if (gameCanvas.requestFullscreen) {
            try {
                gameCanvas.requestFullscreen();
            } catch (error) {
                console.error('Error al solicitar pantalla completa:', error);
            }
        }
    }
}

var ip = location.host;

function registroUsuario(scene) {
    var name = document.getElementById('miCajaDeTexto1').value;
    var contr = document.getElementById('miCajaDeTexto2').value;
    $.ajax({
    method: "POST",
    url: 'http://' + ip + '/usuarios/register',
    data: JSON.stringify({ nombre: name, contrasena: contr }),
    processData: false,
    headers: {
        "Content-type": "application/json"
    }
    }).done(function (data, textStatus, jqXHR) {
    console.log("Usuario creado con éxito. Nuevo ID: " + data);
    scene.mostrarMensaje("Usuario registrado con éxito", "#00FF00");

    }).fail(function (jqXHR, textStatus, errorThrown) {
    console.log("Error al crear usuario: " + textStatus + " " + errorThrown);
    console.log(jqXHR.responseText);
    });
}

function iniciarSesionUsuario(scene) {
    var usuario = document.getElementById('miCajaDeTexto1').value;
    var contrasena = document.getElementById('miCajaDeTexto2').value;

    $.ajax({
        method: "POST",
        url: 'http://' + ip + '/usuarios/login',
        data: JSON.stringify({ nombre: usuario, contrasena: contrasena }),
        processData: false,
        headers: {
            "Content-type": "application/json"
        }
    }).done(function (data, textStatus, jqXHR) {
        console.log("Inicio de sesión exitoso: " + data);
        scene.isLoggedIn = true;
        console.log("Esta logueado" + scene.isLoggedIn);
        scene.scene.stop('SceneLogin'); // Detén la escena actual (SceneLogin)
		iniciarJuego(scene)// Llama a la función para iniciar el juego

    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error al iniciar sesión: " + textStatus + " " + errorThrown);
        console.log(jqXHR.responseText);
        scene.mostrarMensaje("Esta cuenta no existe", "#FF0000");
    });
    }
    
function borrarUsuario(scene) {
    var usuario = document.getElementById('miCajaDeTexto1').value;
    var contrasena = document.getElementById('miCajaDeTexto2').value;

    $.ajax({
        method: "DELETE",
        url: 'http://' + ip + '/usuarios/delete',
        data: JSON.stringify({ nombre: usuario, contrasena: contrasena }),
        processData: false,
        headers: {
            "Content-type": "application/json"
        }
    }).done(function (data, textStatus, jqXHR) {
        console.log("Cuenta borrada correctamente " + data);
        scene.mostrarMensaje("Cuenta borrada correctamente", "#00FF00");
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseText);
        scene.mostrarMensaje("Datos incorrectos", "#FF0000");
    });
    
    }
    
function actualizarUsuario(scene) {
    var usuario = document.getElementById('miCajaDeTexto1').value;
    var contrasena = document.getElementById('miCajaDeTexto2').value;
    var nuevaContrasena = document.getElementById('miCajaDeTexto3').value;

$.ajax({
        url: 'http://' + ip + '/usuarios/cambiarContraseña',
        type: 'PUT',
        data: {
            nombreUsuario: usuario,
            contrasena: contrasena,
            nuevaContrasena: nuevaContrasena
        },
        success: function(response) {
            console.log('Contraseña actualizada exitosamente');
            scene.mostrarMensaje("Contraseña actualizada", "#00FF00");

            // Puedes realizar acciones adicionales aquí en caso de éxito
        },
        error: function(error) {
            console.error('Error al actualizar la contraseña:', error.responseText);
            scene.mostrarMensaje("Error al actualizar contraseña", "#FF0000");

            // Puedes manejar el error y realizar acciones adicionales aquí
        }
    });
    
}
    
    function iniciarJuego(scene){
		scene.scene.start('SceneSelectCh')
	}