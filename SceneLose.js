class SceneLose extends Phaser.Scene{
    constructor(){
        super ({ key: 'SceneLose'});
    }

    preload(){
        this.load.image ('SceneLose', "Assets/Interface/lose-screen.png");

         // detecta tecla F11
this.input.keyboard.on('keydown-F11', () => {
    this.setFullScreen();
    });

    }

    create(){
        //pone una imagen que indica que se está cargando 
        this.loading= this.add.image(0,0, "SceneLose");
        this.loading.setOrigin(0,0);
        this.loading.setDisplaySize(this.game.config.width,this.game.config.height);
       
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