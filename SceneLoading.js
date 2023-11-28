class SceneLoading extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }
    preload(){
    this.load.image("background", "Assets/Gameplay/background.png");
    this.load.spritesheet("player1", "Assets/Gameplay/Characters/player1-spritesheet.png", {frameWidth: 16, frameHeight: 16});
    this.load.spritesheet("player2", "Assets/Gameplay/Characters/player2-spritesheet.png", {frameWidth: 16, frameHeight: 16});
    this.load.spritesheet("cuatroDedos", "Assets/Gameplay/Enemy/cuatro-dedos-enemy.png", {frameWidth: 16, frameHeight: 16});

    }
    create(){
        this.add.text(20,20,"Loading game...");
        this.scene.start("playGame");
    
        //animations
        //players
        this.anims.create({
            key: "walk1",
            frames: this.anims.generateFrameNumbers("player1"),
            frameRate: 20,
            repeat: -1
    
        });
        this.anims.create({
            key: "walk2",
            frames: this.anims.generateFrameNumbers("player2"),
            frameRate: 20,
            repeat: -1
    
        });
    }
    
    }