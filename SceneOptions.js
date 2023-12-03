class SceneOptions extends Phaser.Scene{
    constructor(){
        super ({ key: 'SceneOptions'});
    }
    preload(){

    this.load.image ('background3', "Assets/Interface/options/option-background.png");
    this.load.image ('mute', "Assets/Interface/options/mute-button.png");
    this.load.image ('unmute', "Assets/Interface/options/music-button.png");
    this.load.image ('salirButton', "Assets/Interface/options/atras-button.png");

    //Sonidos
    this.load.audio("audioboton2", ["Assets/Interface/Sounds/HiHatBoton.ogg", "Assets/Interface/Sounds/HiHatBoton.mp3"])

    // detecta tecla F11
    this.input.keyboard.on('keydown-F11', () => {
    this.setFullScreen();
    });

    }
    create() {

        this.scene.launch("SceneMenu"); //launch de la escena de opciones...

        var botonConfig2 = {
            mute: false,
            volume: 0.1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
    
        //Imagen del fondo...
        this.background = this.add.image(395,270, 'background3');
        this.background.setScale(1.65, 2);

        //sonido boton
        this.buttonsound2 = this.sound.add("audioboton2");
        const soundManager = this.sound;

        //boton de quitar sonido
        this.muteButton = this.add.image (250,270, 'mute');
        this.muteButton.setScale(1.6);
        this.muteButton.setInteractive();

        //interaccion de los botones
        this.muteButton.on('pointerdown', () => {
            this.buttonsound2.play(botonConfig2);
            // Mute: Pausa todos los sonidos
            soundManager.pauseAll();
        });

        //boton de poner sonido
        this.unmuteButton = this.add.image (530,270, 'unmute');
        this.unmuteButton.setScale(1.6);
        this.unmuteButton.setInteractive();

        this.unmuteButton.on('pointerdown', () => {
            this.buttonsound2.play(botonConfig2);
            // Unmute: Reanuda todos los sonidos
            soundManager.resumeAll();
        });

        //boton de salida...
        this.exitButton = this.add.image(100,500, 'salirButton');
        this.exitButton.setScale(1.5);
        this.exitButton.setInteractive();
        
        this.exitButton.on ('pointerdown', () => {
            this.buttonsound2.play(botonConfig2);
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