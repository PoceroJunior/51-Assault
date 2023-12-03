class SceneCredits extends Phaser.Scene{
    constructor(){
        super ({ key: 'credits'});
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

        this.background = this.add.image(395,270, 'background2');
        this.background.setScale(1.65, 2);
        this.exitButton = this.add.image(100,500, 'salirButton');
        this.exitButton.setScale(1.5);
        this.exitButton.setInteractive();
        this.exitButton.on ('pointerdown', () => {
            this.buttonsound3.play(botonConfig3);
            this.scene.start('menu');
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