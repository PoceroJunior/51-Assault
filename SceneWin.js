class SceneWin extends Phaser.Scene{
    constructor(){
        super ({ key: 'winScene'});
    }
    preload(){
        this.load.image ('victoria', "Assets/Interface/win-screen.png");
        this.load.image ('salirButton', "Assets/Interface/options/atras-button.png");

        //Sonidos
    this.load.audio("audioboton5", ["Assets/Interface/Sounds/HiHatBoton.ogg", "Assets/Interface/Sounds/HiHatBoton.mp3"])

        // detecta tecla F11
this.input.keyboard.on('keydown-F11', () => {
    this.setFullScreen();
    });

    }
    create() {

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

        this.imagenvictoria = this.add.image(395,270, 'victoria');
        this.imagenvictoria.setScale(1.65, 2);
        this.exitButton = this.add.image(100,500, 'salirButton');
        this.exitButton.setScale(1.5);
        this.exitButton.setInteractive();
        this.exitButton.on ('pointerdown', () => {
            this.buttonsound5.play(botonConfig5);
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