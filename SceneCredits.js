class SceneCredits extends Phaser.Scene{
    constructor(){
        super ({ key: 'SceneCredits'});
    }
    preload(){
        this.load.image ('background2', "Assets/Interface/creditos.png");
        this.load.image ('salirButton', "Assets/Interface/options/atras-button.png");

        //Sonidos
        this.load.audio("audioboton3", ["Assets/Interface/Sounds/HiHatBoton.ogg", "Assets/Interface/Sounds/HiHatBoton.mp3"])

        // detecta tecla F11
        this.input.keyboard.on('keydown-F11', () => {
        this.setFullScreen();
        });

    }

    create() {

        //boton...
        var botonConfig3 = {
            mute: false,
            volume: 0.1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        this.buttonsound3 = this.sound.add("audioboton3");


        //fondo
        this.background = this.add.image(395,270, 'background2');
        this.background.setScale(1.65, 2);
        //boton de salida...
        this.exitButton = this.add.image(100,500, 'salirButton');
        this.exitButton.setScale(1.5);
        this.exitButton.setInteractive();
        //interaccion con el boton de salida
        this.exitButton.on ('pointerdown', () => {
            this.buttonsound3.play(botonConfig3);
            this.scene.start('SceneMenu');
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