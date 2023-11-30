class SceneGame extends Phaser.Scene{
    constructor(){
        super("playGame");
    }
    create(){
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

        this.player2 =this.physics.add.sprite(this.game.config.width/2 +64, this.game.config.height/2, "player2");
        this.player2.setScale(3); //hace el jugador un poco más grande
        this.player2.setCollideWorldBounds(true);

        this.weapon1 = this.physics.add.sprite(this.game.config.width/2 -32, this.game.config.height/2, "armacac1");
        this.weapon1.setScale(2.5);
        this.weapon1.setCollideWorldBounds(true);

        this.weapon2 = this.physics.add.sprite(this.game.config.width/2 +96, this.game.config.height/2, "armacac2");
        this.weapon2.setScale(2.5);
        this.weapon2.setCollideWorldBounds(true);

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
        //scene.hudScene.bringToTop();
        this.movePlayer1Manager();
        this.moveWeapon1Manager();
        this.movePlayer2Manager();
        this.moveWeapon2Manager();
        //this.updateScoreInHUD();
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

    moveWeapon1Manager(speed, offset){
        speed = 140;
        offset = 32;
        if (this.keys.A.isDown && this.weapon1.x > this.weapon1.width / 2) {
            this.weapon1.flipX = true;
            this.weapon1.x = (this.player1.x - offset);
            this.weapon1.setVelocityX(-speed);
        } else if (this.keys.D.isDown && this.weapon1.x < this.game.config.width - this.weapon1.width / 2) {
            this.weapon1.flipX = false;
            this.weapon1.x = (this.player1.x + offset);
            this.weapon1.setVelocityX(speed);
        } else {
            this.weapon1.setVelocityX(0);
        }
    
        if (this.keys.W.isDown && this.weapon1.y > this.weapon1.height / 1) {
            this.weapon1.setVelocityY(-speed);
        } else if (this.keys.S.isDown && this.weapon1.y < this.game.config.height - this.weapon1.height / 2) {
            this.weapon1.setVelocityY(speed);
        } else {
            this.weapon1.setVelocityY(0);
        }
    
        // Ajustar la posición del arma si el jugador está a punto de salir
        this.weapon1.x = Phaser.Math.Clamp(this.weapon1.x, this.weapon1.width*1.2, this.game.config.width - this.weapon1.width*1.2);
        this.weapon1.y = Phaser.Math.Clamp(this.weapon1.y, this.weapon1.height*1.6, this.game.config.height - this.weapon1.height*1.6);
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

    moveWeapon2Manager(speed, offset){
        speed = 140;
        offset = 32;
        if (this.cursorKeys.left.isDown && this.weapon2.x > this.weapon2.width / 2) {
            this.weapon2.flipX = true;
            this.weapon2.x = (this.player2.x - offset);
            this.weapon2.setVelocityX(-speed);
        } else if (this.cursorKeys.right.isDown && this.weapon2.x < this.game.config.width - this.weapon2.width / 2) {
            this.weapon2.flipX = false;
            this.weapon2.x = (this.player2.x + offset);
            this.weapon2.setVelocityX(speed);
        } else {
            this.weapon2.setVelocityX(0);
        }
    
        if (this.cursorKeys.up.isDown && this.weapon2.y > this.weapon2.height / 2) {
            this.weapon2.setVelocityY(-speed);
        } else if (this.cursorKeys.down.isDown && this.weapon2.y < this.game.config.height - this.weapon2.height / 2) {
            this.weapon2.setVelocityY(speed);
        } else {
            this.weapon2.setVelocityY(0);
        }
    
        // Ajustar la posición del arma si el jugador está a punto de salir
        this.weapon2.x = Phaser.Math.Clamp(this.weapon2.x, this.weapon2.width*1.2, this.game.config.width - this.weapon2.width*1.2);
        this.weapon2.y = Phaser.Math.Clamp(this.weapon2.y, this.weapon2.height*1.6, this.game.config.height - this.weapon2.height*1.6);
    }
    /*
    updateScoreInHUD(health1, exp1, health2, exp2) {
        // Obtén la escena del HUD y llama a su método para actualizar el puntaje
        health1 = 10;
        health2 = 10;
        exp1 = 1;
        exp2 = 1;
        const hudScene = this.scene.get('HUDScene');
        if (hudScene) {
            hudScene.updateScore(health1, exp1, health2, exp2);
        }
    }
    */
}
    