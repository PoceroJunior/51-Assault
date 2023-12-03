class SceneWin extends Phaser.Scene{
    constructor(){
        super ({ key: 'SceneWin'});
    }

    preload(){

        //Imagenes
        this.load.image ('SceneWin', "Assets/Interface/win-screen.png");
        this.load.image ('salirButton', "Assets/Interface/options/atras-button.png");

        //Sonidos
        this.load.audio("audioboton5", ["Assets/Interface/Sounds/HiHatBoton.ogg", "Assets/Interface/Sounds/HiHatBoton.mp3"])

        //Detecta tecla F11
        this.input.keyboard.on('keydown-F11', () => {
        this.setFullScreen();
        });
    }

    create() {

        //Configuración volumen sonido de boton
        var botonConfig5 = {
            mute: false,
            volume: 0.1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        this.buttonsound5 = this.sound.add("audioboton5");

        //imagen de victoria...
        this.victoria= this.add.image(0,0, "SceneWin");
        this.victoria.setOrigin(0,0);
        this.victoria.setDisplaySize(this.game.config.width,this.game.config.height);

        //boton de salir...
        this.exitButton = this.add.image(100,500, 'salirButton');
        this.exitButton.setScale(1.5);
        this.exitButton.setInteractive();
        //interaccion del boton de salida
        this.exitButton.on ('pointerdown', () => {
            this.buttonsound5.play(botonConfig5);
            this.scene.start('SceneMenu');
            this.scene.stop('SceneGame');
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