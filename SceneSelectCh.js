class SceneSelectCh extends Phaser.Scene{
    constructor(){
        super ({ key: 'SceneSelectCh'});
    }
    preload(){
        this.load.image ('backgroundSelect', "Assets/Interface/player-selection/pixil-frame-0.png");
        this.load.image ('pj1', "Assets/Interface/player-selection/character1-selection.png");
        this.load.image ('pj2', "Assets/Interface/player-selection/character2-selection.png");
        this.load.image ('salirButton', "Assets/Interface/player-selection/atras-button.png");

        //Sonidos
        this.load.audio("audioboton4", ["Assets/Interface/Sounds/HiHatBoton.ogg", "Assets/Interface/Sounds/HiHatBoton.mp3"])

        // detecta tecla F11
this.input.keyboard.on('keydown-F11', () => {
    this.setFullScreen();
    });
    
    }
    create() {

        var botonConfig4 = {
            mute: false,
            volume: 0.1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }

        this.buttonsound4 = this.sound.add("audioboton4");

        this.background = this.add.image(395,270, 'backgroundSelect');
        this.background.setScale(1.65, 2);
        this.pj1Button = this.add.image (250,270, 'pj1');
        this.pj1Button.setScale(1.6);
        this.pj1Button.setInteractive();
        this.pj2Button = this.add.image (530,270, 'pj2');
        this.pj2Button.setScale(1.6);
        this.pj2Button.setInteractive();
        this.exitButton = this.add.image(100,500, 'salirButton');
        this.exitButton.setScale(1.5);
        this.exitButton.setInteractive();
        this.exitButton.on ('pointerdown', () => {
            this.buttonsound4.play(botonConfig4);
            this.scene.start('SceneMenu');
        });
        this.pj1Button.on ('pointerdown', () => {
            this.buttonsound4.play(botonConfig4);
            this.scene.start('SceneLoading');
        });
        this.pj2Button.on ('pointerdown', () => {
            this.buttonsound4.play(botonConfig4);
            this.scene.start('SceneLoading');
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