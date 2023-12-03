class SceneLose extends Phaser.Scene{
    constructor(){
        super ({ key: 'SceneLose'});
    }
    preload(){
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

        this.victoria= this.add.image(0,0, "derrota");
        this.victoria.setOrigin(0,0);
        this.victoria.setDisplaySize(this.game.config.width,this.game.config.height);
        this.exitButton = this.add.image(100,500, 'salirButton');
        this.exitButton.setScale(1.5);
        this.exitButton.setInteractive();
        this.exitButton.on ('pointerdown', () => {
            this.buttonsound6.play(botonConfig6);
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