class SceneLoading extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }
    preload(){
    //fondo
    this.load.image("background", "Assets/Gameplay/background.png");
    //interfaz
    // PANTALLA DE CARGA
    this.load.image("LoadingScreen", "Assets/Interface/loading-screen.png");
    //HUD
    this.load.image("health1", "Assets/Interface/HUD/health-character1.png");
    this.load.image("health2", "Assets/Interface/HUD/health-character2.png");
    this.load.image("time", "Assets/Interface/HUD/time-HUD.png")
    //Personajes y armas
    this.load.spritesheet("player1", "Assets/Gameplay/Characters/player1-spritesheet.png", {frameWidth: 16, frameHeight: 16});
    this.load.spritesheet("player2", "Assets/Gameplay/Characters/player2-spritesheet.png", {frameWidth: 16, frameHeight: 16});
    this.load.spritesheet("armacac1", "Assets/Gameplay/weapons/sword-spritesheet.png", {frameWidth:16, frameHeight:16});
    this.load.spritesheet("armacac2", "Assets/Gameplay/weapons/axe-spritesheet.png", {frameWidth:16, frameHeight:16});
    //Enemigos
    this.load.spritesheet("cuatroDedos", "Assets/Gameplay/Enemy/cuatro-dedos-enemy.png", {frameWidth: 16, frameHeight: 16});
    //this.load.spritesheet("estrellado", "Assets/Gameplay/Enemy/estrellado-enemy.png", {frameWidth: 48, frameHeight: 54});
    this.load.spritesheet("carroniero", "Assets/Gameplay/Enemy/carroniero-enemy.png", {frameWidth: 24, frameHeight: 24});
    this.load.spritesheet("pezLava", "Assets/Gameplay/Enemy/pez-lava-enemy.png", {frameWidth: 24, frameHeight: 24});
    // detecta tecla F11
this.input.keyboard.on('keydown-F11', () => {
    this.setFullScreen();
    });

    }
    create(){
        //pone una imagen que indica que se está cargando 
        this.loading= this.add.image(0,0, "LoadingScreen");
        this.loading.setOrigin(0,0);
        this.loading.setDisplaySize(this.game.config.width,this.game.config.height);
        this.scene.start("playGame");

        //animations
        //weapons
        this.anims.create
        ({
            key: "Acac1",
            frames: this.anims.generateFrameNumbers("armacac1"),
            frameRate: 20,
            repeat: 0
        });

        this.anims.create
        ({
            key: "Acac2",
            frames: this.anims.generateFrameNumbers("armacac2"),
            frameRate: 20,
            repeat: 0
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