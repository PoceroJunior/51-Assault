class SceneGame extends Phaser.Scene{
    constructor(){
        super("playGame");
    }
    create(){
        this.add.text(20,20,"playing game", 
        {font: "25px Arial", 
        fill: "yellow"});
        //
        this.cursorKeys= this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys("W,A,S,D");
        //
        this.background =this.add.tileSprite(0,0,this.game.config.width,this.game.config.height,"background");
        this.background.setOrigin(0,0);
        //
        this.player1 =this.physics.add.sprite(this.game.config.width/2 -64, this.game.config.height/2, "player1");
        this.player1.setScale(3); //hace el jugador un poco más grande
        this.player1.setCollideWorldBounds(true); // colisiones con los bordes de la imagen seleccioanda; del jugador con el borde

        this.player2 =this.physics.add.sprite(this.game.config.width/2+64, this.game.config.height/2, "player2");
        this.player2.setScale(3); //hace el jugador un poco más grande
        this.player2.setCollideWorldBounds(true);

        this.cuatroDedos =this.physics.add.sprite(this.game.config.width/2, this.game.config.height/2+64, "cuatroDedos");
        this.cuatroDedos.setScale(2);
        this.cuatroDedos.setInteractive();

        //grupo de jugadores
        this.players= this.physics.add.group();
        this.players.add(this.player1);
        this.players.add(this.player2);
        //Grupo de enemigos
        this.enemies= this.physics.add.group();
        this.enemies.add(this.cuatroDedos);

        //colisiones
        //this.physics.overlap (this.players, this.enemies, this.hurtPlayer, null, this);
    }

    update(){
        this.movePlayer1Manager();
        this.movePlayer2Manager();
    }

    movePlayer1Manager(speed){
        speed = 140;
    
        if (this.keys.A.isDown && this.player1.x > this.player1.width / 2) {
            this.player1.flipX = true;
            this.player1.play("walk1");
            this.player1.setVelocityX(-speed);
        } else if (this.keys.D.isDown && this.player1.x < this.game.config.width - this.player1.width / 2) {
            this.player1.flipX = false;
            this.player1.play("walk1");
            this.player1.setVelocityX(speed);
        } else {
            this.player1.setVelocityX(0);
        }
    
        if (this.keys.W.isDown && this.player1.y > this.player1.height / 1) {
            this.player1.play("walk1");
            this.player1.setVelocityY(-speed);
        } else if (this.keys.S.isDown && this.player1.y < this.game.config.height - this.player1.height / 2) {
            this.player1.play("walk1");
            this.player1.setVelocityY(speed);
        } else {
            this.player1.setVelocityY(0);
        }
    
        // Ajustar la posición si el jugador está a punto de salir
        this.player1.x = Phaser.Math.Clamp(this.player1.x, this.player1.width*1.2, this.game.config.width - this.player1.width*1.2);
        this.player1.y = Phaser.Math.Clamp(this.player1.y, this.player1.height*1.6, this.game.config.height - this.player1.height*1.6);
    }

    movePlayer2Manager(speed) {
        speed = 140;
    
        if (this.cursorKeys.left.isDown && this.player2.x > this.player2.width / 2) {
            this.player2.flipX = true;
            this.player2.play("walk2");
            this.player2.setVelocityX(-speed);
        } else if (this.cursorKeys.right.isDown && this.player2.x < this.game.config.width - this.player2.width / 2) {
            this.player2.flipX = false;
            this.player2.play("walk2");
            this.player2.setVelocityX(speed);
        } else {
            this.player2.setVelocityX(0);
        }
    
        if (this.cursorKeys.up.isDown && this.player2.y > this.player2.height / 2) {
            this.player2.play("walk2");
            this.player2.setVelocityY(-speed);
        } else if (this.cursorKeys.down.isDown && this.player2.y < this.game.config.height - this.player2.height / 2) {
            this.player2.play("walk2");
            this.player2.setVelocityY(speed);
        } else {
            this.player2.setVelocityY(0);
        }
    
        // Ajustar la posición si el jugador está a punto de salir
        this.player2.x = Phaser.Math.Clamp(this.player2.x, this.player2.width*1.2, this.game.config.width - this.player2.width*1.2);
        this.player2.y = Phaser.Math.Clamp(this.player2.y, this.player2.height*1.6, this.game.config.height - this.player2.height*1.6);
    }

}
    