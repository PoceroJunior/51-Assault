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
    //Personajes y armas
    this.load.spritesheet("player1", "Assets/Gameplay/Characters/player1-spritesheet.png", {frameWidth: 16, frameHeight: 16});
    this.load.spritesheet("player2", "Assets/Gameplay/Characters/player2-spritesheet.png", {frameWidth: 16, frameHeight: 16});
    this.load.spritesheet("armacac1", "Assets/Gameplay/weapons/sword-spritesheet.png", {frameWidth:16, frameHeight:16});
    this.load.spritesheet("armacac2", "Assets/Gameplay/weapons/axe-spritesheet.png", {frameWidth:16, frameHeight:16});
    //Enemigos
    this.load.spritesheet("cuatroDedos", "Assets/Gameplay/Enemy/cuatro-dedos-enemy.png", {frameWidth: 16, frameHeight: 16});

    }
    create(){
        //pone una imagen que indica que se está cargando 
        this.loading= this.add.image(0,0, "LoadingScreen");
        this.loading.setOrigin(0,0);
        this.loading.setDisplaySize(this.game.config.width,this.game.config.height);
        this.scene.start("playGame");

        //animations
        //players
        this.anims.create
        ({
            key: "walk1",
            frames: this.anims.generateFrameNumbers("player1"),
            frameRate: 20,
            repeat: -1

        });
        this.anims.create
        ({
            key: "walk2",
            frames: this.anims.generateFrameNumbers("player2"),
            frameRate: 20,
            repeat: -1
    
        });
        this.anims.create
        ({
            key: "idle2",
            frames: this.anims.generateFrameNumbers("player2", {frames: [0]}),
            frameRate: 20,
            repeat: -1

        });
        this.anims.create
        ({
            key: "idle1",
            frames: this.anims.generateFrameNumbers("player1", {frames: [0]}),
            frameRate: 20,
            repeat: -1
        });
        //weapons
        this.anims.create
        ({
            key: "Acac1",
            frames: this.anims.generateFrameNumbers("armacac1"),
            frameRate: 20,
            repeat: -1
        });
    }
    
    }