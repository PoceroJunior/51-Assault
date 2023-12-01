class SceneGame extends Phaser.Scene{
    constructor(){
        super("playGame");
    }
    preload(){

       // detecta tecla F11
       this.input.keyboard.on('keydown-F11', () => {
        this.setFullScreen();
    });
       
        
            }

    create(){
       
        //VARIABLES GLOBALES
        this.scene.launch("HUDScene");
        //variables de prueba...
        var score= 10;
        var h1= 5;
        var h2= 6;
        var e1= 2;
        var e2= 4;
        //
        this.cursorKeys= this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys("W,A,S,D,E,SHIFT");
        //
        this.background =this.add.tileSprite(0,0,this.game.config.width,this.game.config.height,"background");
        this.background.setOrigin(0,0);
        //
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

        //grupo de jugadores
        this.players= this.physics.add.group();
        this.players.add(this.player1);
        this.players.add(this.player2);

        //Inicializacion de los enemigos
        this.cuatroDedos = new Enemy (this,this.game.config.width/2, this.game.config.height/2+64, "cuatroDedos");
        this.cuatroDedos.setEnemyType("cuatroDedos");
        this.cuatroDedos.setScale(2);
        this.cuatroDedos.setInteractive();
        //Grupo de enemigos
        this.enemies= this.physics.add.group();
        this.enemies.add(this.cuatroDedos);

        //colisiones
        this.physics.add.overlap (this.players, this.enemies, this.hurtEnemy, null, this); //detecta que cuando se le hace daño a un personaje se le hace a todos? cuando se le hace daño a un enemigo se les hace a todos?

    }

    //funciones de prueba
    hurtEnemy(player, enemy){

        

        if(enemy.isAlive()){
        enemy.takenDamage(1);
        console.log("VIDA DEL ENEMIGO: "+ enemy.hp+ "VIDA DE 4DEDOS: "+ this.cuatroDedos.hp);}
        else{
            //enemy.disableBody(true, true); //da error no sé porque
            //this.body.destroy(); //no se si tendría que ponerse 
            this.resetPos(enemy);
        }

        //enemy.disableBody(true,true);
    }
    resetPos(enem){
        enem.y= this.game.config.height/2+64;
        enem.x= this.game.config.width/2;
        //ship.enableBody(true, ship.x, ship.y, true, true); //da error no sé porque
    }
    /////////////////////////////////////////////////////
    update(){
        //scene.hudScene.bringToTop();
        this.movePlayer1Manager();
        this.moveWeapon1Manager();
        this.movePlayer2Manager();
        this.moveWeapon2Manager();
        //this.updateScoreInHUD();
        this.cuatroDedos.trackClosestPlayer(this.player1,this.player2);
        const hud = this.scene.get("HUDScene");
        hud.updateScore(this.score,this.h1,this.e1,this.e1,this.e2);
    }

    /*player1Attack() {
        const attackArea = new Phaser.Geom.Circle(this.player1.x, this.player1.y, 50); // esto hace el area circular de las unidades que quieras, lo podemos usar para el area de ataque
        
        this.enemies.forEach(enemy => {  // igual poner .getChildren, no se como esta implementado eso
            if (Phaser.Geom.Circle.ContainsPoint(attackArea, enemy)) {
                this.enemy.destroy();
            }
        });
    }*/

    player1Attack() {
        const attackArea = new Phaser.Geom.Circle(this.weapon1.x, this.weapon1.y, 55);
     
        this.enemies.getChildren().forEach(enemy => {
          if (Phaser.Geom.Circle.ContainsPoint(attackArea, enemy)) {
            enemy.takenDamage(1);
    
            if (!enemy.isAlive()) {
              this.resetPos(enemy);
            }
          }
        });
    }

    movePlayer1Manager(speed){
        speed = 140;
    
        if (this.keys.A.isDown && this.player1.x > this.player1.width / 2) {
            this.player1.flipX = true;
            this.player1.play("walk1", true);
            this.player1.setVelocityX(-speed);
        } else if (this.keys.D.isDown && this.player1.x < this.game.config.width - this.player1.width / 2) {
            this.player1.flipX = false;
            this.player1.play("walk1", true);
            this.player1.setVelocityX(speed);
        } else {
            this.player1.setVelocityX(0);
        }
    
        if (this.keys.W.isDown && this.player1.y > this.player1.height / 1) {
            this.player1.play("walk1", true);
            this.player1.setVelocityY(-speed);
        } else if (this.keys.S.isDown && this.player1.y < this.game.config.height - this.player1.height / 2) {
            this.player1.play("walk1", true);
            this.player1.setVelocityY(speed);
        } else {
            this.player1.setVelocityY(0);
        }

        if (this.keys.E.isDown){
            this.weapon1.play("Acac1", true);
            this.player1Attack();
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

    player2Attack() {
        const attackArea = new Phaser.Geom.Circle(this.weapon2.x, this.weapon2.y, 55);
     
        this.enemies.getChildren().forEach(enemy => {
          if (Phaser.Geom.Circle.ContainsPoint(attackArea, enemy)) {
            enemy.takenDamage(1);
    
            if (!enemy.isAlive()) {
              this.resetPos(enemy);
            }
          }
        });
    }

    movePlayer2Manager(speed) {
        speed = 140;
    
        if (this.cursorKeys.left.isDown && this.player2.x > this.player2.width / 2) {
            this.player2.flipX = true;
            this.player2.play("walk2", true);
            this.player2.setVelocityX(-speed);
        } else if (this.cursorKeys.right.isDown && this.player2.x < this.game.config.width - this.player2.width / 2) {
            this.player2.flipX = false;
            this.player2.play("walk2", true);
            this.player2.setVelocityX(speed);
        } else {
            this.player2.setVelocityX(0);
        }
    
        if (this.cursorKeys.up.isDown && this.player2.y > this.player2.height / 2) {
            this.player2.play("walk2", true);
            this.player2.setVelocityY(-speed);
        } else if (this.cursorKeys.down.isDown && this.player2.y < this.game.config.height - this.player2.height / 2) {
            this.player2.play("walk2", true);
            this.player2.setVelocityY(speed);
        } else {
            this.player2.setVelocityY(0);
        }
    
        if (this.keys.SHIFT.isDown){
            this.weapon2.play("Acac2", true);
            this.player2Attack();
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
    
    