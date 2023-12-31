class SceneLogin extends Phaser.Scene{
    constructor(){
        super ({ key: 'SceneLogin'});
        this.playing = false;
        this.mute = false;
        this.inputElement1 = null;
        this.inputElement2 = null;
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
    create() {

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
        this.iniciarButton = this.add.image(275, 325, 'IniciarLogin');
        this.iniciarButton.setScale(2);
        this.iniciarButton.setInteractive();

        this.registrarButton = this.add.image(500, 325, 'RegistrarButton');
        this.registrarButton.setScale(2);
        this.registrarButton.setInteractive();

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

            this.buttonsound10.play();
            iniciarSesionUsuario(this);
            

        });
        this.atrasButton.on ('pointerdown', () => {
            this.buttonsound10.play(botonConfig10);
            this.scene.start('SceneMenu');

        });
        
        this.registrarButton.on('pointerdown', () => {
            this.buttonsound10.play();
            registroUsuario();
        });


    }
	 
    createTextInputs() {
        const centerX = this.game.config.width / 2;
        const centerY = this.game.config.height / 2;

        // Crea caja de texto 1
        this.inputElement1 = document.createElement("input");
        this.inputElement1.type = "text";
        this.inputElement1.id = "miCajaDeTexto1";
        document.body.appendChild(this.inputElement1);
        this.inputElement1.style.position = "absolute";
        this.inputElement1.style.left = centerX + 275 + "px"; // Ajusta según el ancho deseado
        this.inputElement1.style.top = centerY + 125 + "px"; // Ajusta según la altura deseada
        this.inputElement1.style.display = "block";

        // Crea caja de texto 2
        this.inputElement2 = document.createElement("input");
        this.inputElement2.type = "password";
        this.inputElement2.id = "miCajaDeTexto2";
        document.body.appendChild(this.inputElement2);
        this.inputElement2.style.position = "absolute";
        this.inputElement2.style.left = centerX + 675 + "px"; // Ajusta según el ancho deseado
        this.inputElement2.style.top = centerY + 125 + "px"; // Ajusta según la altura deseada
        this.inputElement2.style.display = "block";
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

function registroUsuario() {
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
		iniciarJuego(scene)// Llama a la función para iniciar el juego
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error al iniciar sesión: " + textStatus + " " + errorThrown);
        console.log(jqXHR.responseText);
    });
    }
    function iniciarJuego(scene){
		scene.scene.start('SceneSelectCh')
	}