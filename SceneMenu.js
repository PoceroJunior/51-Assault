class SceneMenu extends Phaser.Scene{
    constructor(){
        super ({ key: 'menu'});
    }
    preload(){
        this.load.image ('backgroundMenu', "Assets/Interface/Main-menu/Main-menu-background-good.png");
        this.load.image ('jugarButton', "Assets/Interface/Main-menu/jugar-button.png");
        this.load.image ('creditosButton', "Assets/Interface/Main-menu/creditos-button.png");
        this.load.image ('opcionesButton', "Assets/Interface/Main-menu/opciones-button.png");
        this.load.image ('salirButton', "Assets/Interface/Main-menu/salir-button.png");

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

        this.startButton.on ('pointerdown', () => {
            this.scene.start('selectCh');
        });
        this.optionButton.on ('pointerdown', () => {
            this.scene.start('options');
        });
        this.creditButton.on ('pointerdown', () => {
            this.scene.start('credits');
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
