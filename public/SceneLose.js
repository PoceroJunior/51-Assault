class SceneLose extends Phaser.Scene{
    constructor(){
        super ({ key: 'SceneLose'});
    }
    preload(){
        //Imagenes
        this.load.image ('derrota', "Assets/Interface/lose-screen.png");
        this.load.image ('salirButton', "Assets/Interface/options/atras-button.png");

        //Sonidos
        this.load.audio("audioboton6", ["Assets/Interface/Sounds/HiHatBoton.ogg", "Assets/Interface/Sounds/HiHatBoton.mp3"])

        // detecta tecla F11
        this.input.keyboard.on('keydown-F11', () => {
        this.setFullScreen();
        });

    }
    create() {

        //configuracion de los botones
        var botonConfig6 = {
            mute: false,
            volume: 0.1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        this.buttonsound6 = this.sound.add("audioboton6");

        //Imagen de derrota...
        this.derrota= this.add.image(0,0, "derrota");
        this.derrota.setOrigin(0,0);
        this.derrota.setDisplaySize(this.game.config.width,this.game.config.height);

        //boton de salida...
        this.exitButton = this.add.image(100,500, 'salirButton');
        this.exitButton.setScale(1.5);
        this.exitButton.setInteractive();
        //interaccion del boton de salida
        this.exitButton.on ('pointerdown', () => {
			this.scene.start ("SceneMenu");
            this.buttonsound6.play(botonConfig6);

        });

    }

    //Si detecta la tecla F11, pone/quita la pantalla completa
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