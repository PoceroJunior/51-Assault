class SceneMenu extends Phaser.Scene{
    constructor(){
        super ({ key: 'SceneMenu'});
    }
    preload(){
        //Interfaces
        this.load.image ('backgroundMenu', "Assets/Interface/Main-menu/main-menu-background-good.png");
        this.load.image ('jugarButton', "Assets/Interface/Main-menu/jugar-button.png");
        this.load.image ('creditosButton', "Assets/Interface/Main-menu/creditos-button.png");
        this.load.image ('opcionesButton', "Assets/Interface/Main-menu/opciones-button.png");
        this.load.image ('salirButton', "Assets/Interface/Main-menu/salir-button.png");
        //Música
        this.load.audio("menumusic", ["Assets/Interface/Sounds/feed-the-machine.ogg", "Assets/Interface/Sounds/feed-the-machine.mp3"]);
        //Sonidos
        this.load.audio("audioboton", ["Assets/Interface/Sounds/HiHatBoton.ogg", "Assets/Interface/Sounds/HiHatBoton.mp3"])
        // detecta tecla F11
        this.input.keyboard.on('keydown-F11', () => {
        this.setFullScreen();
        });
    }
    create() {
        this.background = this.add.image(395,270, 'backgroundMenu');
        this.background.setScale(1.65, 2);
        this.startButton = this.add.image (395,150, 'jugarButton');
        this.startButton.setScale(2);
        this.startButton.setInteractive();
        this.optionButton = this.add.image(395, 220, 'opcionesButton');
        this.optionButton.setScale(2);
        this.optionButton.setInteractive();
        this.creditButton = this.add.image(395, 290, 'creditosButton');
        this.creditButton.setScale(2);
        this.creditButton.setInteractive();

        //sonido botones
        this.buttonsound = this.sound.add("audioboton");
        //Música
        this.musicmenu = this.sound.add("menumusic")
        //this.musicmenu.play();
        var musicConfig = {
            mute: false,
            volume: 0.1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0,
        }
        var botonConfig = {
            mute: musicConfig.mute,
            volume: musicConfig.volume,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        
        //intento de hacer que no se repita cuando vuelves de otra escena.
        /*
        var playing = null;

        if (playing == null){
            var playing = false;
        }
        if (playing == false){
            this.musicmenu.play(musicConfig); //play a la musica
            playing = true;
        }
        */

        this.startButton.on ('pointerdown', () => {
            this.scene.start('SceneSelectCh');
            this.buttonsound.play(botonConfig);
        });
        this.optionButton.on ('pointerdown', () => {
            this.scene.start('SceneOptions');
            this.buttonsound.play(botonConfig);
        });
        this.creditButton.on ('pointerdown', () => {
            this.scene.start('SceneCredits');
            this.buttonsound.play(botonConfig);
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

    muteOrUnmuteMusic(){
        if (musicConfig.mute = true) {
            musicConfig.mute = false;
        }
        else {
            musicConfig.mute = true;
        }
    }
    
}
