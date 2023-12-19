class SceneGuide extends Phaser.Scene{
    constructor(){
        super ({ key: 'SceneGuide'});
    }
    preload(){

    this.load.image ('fotoguia', "Assets/Interface/guia/guia.png");
    this.load.image ('salirButton', "Assets/Interface/guia/atras-button.png");

    //Sonidos
    this.load.audio("audioboton9", ["Assets/Interface/Sounds/HiHatBoton.ogg", "Assets/Interface/Sounds/HiHatBoton.mp3"])

    // detecta tecla F11
    this.input.keyboard.on('keydown-F11', () => {
    this.setFullScreen();
    });

    }
    create() {

        this.scene.launch("SceneMenu"); //launch de la escena de opciones...

        var botonConfig9 = {
            mute: false,
            volume: 0.1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
    
        //Imagen del fondo...
        this.guide= this.add.image(395,270, 'fotoguia');
        this.guide.setScale(0.55, 0.67);
        //sonido boton
        this.buttonsound9 = this.sound.add("audioboton9");

        //boton de salida...
        this.exitButton = this.add.image(100,500, 'salirButton');
        this.exitButton.setScale(1.5);
        this.exitButton.setInteractive();
        
        this.exitButton.on ('pointerdown', () => {
            this.buttonsound9.play(botonConfig9);
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