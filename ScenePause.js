class ScenePause extends Phaser.Scene {
    constructor() {
        super({ key: "ScenePause" });
    }

    preload() {
        this.load.image ('mute', "Assets/Interface/options/mute-button.png");
        this.load.image ('unmute', "Assets/Interface/options/music-button.png");
        this.load.image ('salirButton', "Assets/Interface/options/atras-button.png");
        this.load.image ("pausa", "Assets/Interface/HUD/pause.png")
        this.load.image ("playButton", "Assets/Interface/HUD/boton-play.png")

        //Sonidos
        this.load.audio("audioboton8", ["Assets/Interface/Sounds/HiHatBoton.ogg", "Assets/Interface/Sounds/HiHatBoton.mp3"])

        // detecta tecla F11
        this.input.keyboard.on('keydown-F11', () => {
        this.setFullScreen();
    });

    }
    create() {
    //imagen con opacidad del 90% de fondo
    this.pausafoto =this.add.tileSprite(0,0,this.game.config.width,this.game.config.height,"pausa");
    this.pausafoto.setOrigin(0,0);

    //sonido boton
    this.buttonsound8 = this.sound.add("audioboton8");
    const soundManager = this.sound;

    var botonConfig8 = {
        mute: false,
        volume: 0.1,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
    }

    //boton de quitar sonido
    this.muteButton = this.add.image (250,270, 'mute');
    this.muteButton.setScale(1.6);
    this.muteButton.setInteractive();

    //interaccion de los botones
    this.muteButton.on('pointerdown', () => {
        this.buttonsound8.play(botonConfig8);
        // Mute: Pausa todos los sonidos
        soundManager.pauseAll();
    });

    //boton de poner sonido
    this.unmuteButton = this.add.image (530,270, 'unmute');
    this.unmuteButton.setScale(1.6);
    this.unmuteButton.setInteractive();

    this.unmuteButton.on('pointerdown', () => {
        this.buttonsound8.play(botonConfig8);
        // Unmute: Reanuda todos los sonidos
        soundManager.resumeAll();
    });

    //botÃ³n de play
    this.jugarButton = this.add.image(395,475, 'playButton');
    this.jugarButton.setScale(1.5);
    this.jugarButton.setInteractive();

    this.jugarButton.on ('pointerdown', () => {
        this.buttonsound8.play(botonConfig8);
        this.scene.stop();
        this.scene.resume('SceneGame'); 
        this.scene.start('HUDScene');
        const hudScene = this.scene.get('HUDScene');
        hudScene.tiempo = hudScene.auxiliar;
        hudScene.reloj = 10000000;
    });

    //boton de salida...
    this.exitButton = this.add.image(100,500, 'salirButton');
    this.exitButton.setScale(1.5);
    this.exitButton.setInteractive();
    this.exitButton.on ('pointerdown', () => {
        window.location.reload();
        //TERMINAR ESTO SERIA CLAVE
        //this.scene.stop();
        //const hudScene = this.scene.get('HUDScene');
        //hudScene.tiempo = 10;
        //hudScene.reloj = 10000000;
        //this.buttonsound8.play(botonConfig8);
        //this.scene.resume('SceneGame');
        //this.scene.start('HUDScene');
        //hudScene.tiempo = hudScene.auxiliar;
        //hudScene.reloj = 10000000;
        //this.scene.start("SceneMenu"); //pq no funciona? xd
        //dejar todo como deberia estar, el tiempo en su respectivo valor y las variables retocadas a como deberian
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