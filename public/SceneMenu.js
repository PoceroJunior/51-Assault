class SceneMenu extends Phaser.Scene{
    constructor(){
        super ({ key: 'SceneMenu'});
        this.playing = false;
        this.mute = false;
    }
    preload(){
        //Interfaces
        this.load.image ('backgroundMenu', "Assets/Interface/Main-menu/main-menu-background-good.png");
        this.load.image ('jugarButton', "Assets/Interface/Main-menu/jugar-button.png");
        this.load.image ('creditosButton', "Assets/Interface/Main-menu/creditos-button.png");
        this.load.image ('opcionesButton', "Assets/Interface/Main-menu/opciones-button.png");
        this.load.image ('salirButton', "Assets/Interface/Main-menu/salir-button.png");
        this.load.image ('guiaButton', "Assets/Interface/Main-menu/guia-button.png");
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
        //
        //#region creacion de los assets...
        this.scene.get('SceneLogin').removeTextInputs();

        //imagen de fondo
        this.background = this.add.image(395,270, 'backgroundMenu');
        this.background.setScale(1.65, 2);

        //boton de jugar...
        this.startButton = this.add.image (395,150, 'jugarButton');
        this.startButton.setScale(2);
        this.startButton.setInteractive();

        //boton de opciones
        this.optionButton = this.add.image(395, 220, 'opcionesButton');
        this.optionButton.setScale(2);
        this.optionButton.setInteractive();

        //boton de creditos
        this.creditButton = this.add.image(395, 290, 'creditosButton');
        this.creditButton.setScale(2);
        this.creditButton.setInteractive();

        //boton de guia
        this.guideButton = this.add.image(395, 360, 'guiaButton');
        this.guideButton.setScale(1);
        this.guideButton.setInteractive();

        //boton de salir
        this.exitButton = this.add.image(395, 430, 'salirButton');
        this.exitButton.setScale(2);
        this.exitButton.setInteractive();


        //sonido botones
        this.buttonsound = this.sound.add("audioboton");
        //Música
        this.musicmenu = this.sound.add("menumusic");
        
        //#endregion
        
        // #region configuracion de la musica...
        var musicConfig = {
            mute: this.mute,
            volume: 0.1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
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
        //#endregion
        
        //condicion de parada de la musica
        if (this.playing == false){
            //play a la musica
            this.musicmenu.play(musicConfig);
            this.playing = true;
        }

        //interaccion de los botones...
        this.startButton.on('pointerdown', () => {
            this.buttonsound.play(botonConfig);
            this.scene.start('SceneSelectCh');
/*
            if (this.scene.get('SceneLogin').isLoggedIn) {
                // Si el usuario ha iniciado sesión, va directamente a la pantalla de selección de personaje
                this.scene.start('SceneSelectCh');
            } else {
                // Si el usuario no ha iniciado sesión, muestra la pantalla de login
                this.scene.start('SceneLogin');
            } */
        });
        
        this.optionButton.on ('pointerdown', () => {
            this.scene.start('SceneOptions');
            this.buttonsound.play(botonConfig);
        });
        this.creditButton.on ('pointerdown', () => {
            this.scene.start('SceneCredits');
            this.buttonsound.play(botonConfig);
        });
        this.guideButton.on ('pointerdown', () => {
            this.scene.start('SceneGuide');
            this.buttonsound.play(botonConfig);
        });
        this.exitButton.on ('pointerdown', () => {
            this.buttonsound.play(botonConfig);
            window.close();
        });

    }
    
    /*
    muteOrUnmuteMusic(){
        if (this.mute = true) {
            this.mute = false;
        }
        else {
            this.mute = true;
        }
    }
    */ 
   
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