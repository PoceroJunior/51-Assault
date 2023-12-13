class SceneGame extends Phaser.Scene{
    constructor(){
        super("SceneGame");
        this.lastSpawnTime = 0;
        this.pausa = false;
    }
    preload(){
        // detecta tecla F11
        this.input.keyboard.on('keydown-F11', () => {
        this.setFullScreen();
        });
    }

    create(){
       
        // #region VARIABLES GLOBALES Y BASE
        this.scene.launch("HUDScene");
        //
        this.cursorKeys= this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys("W,A,S,D,E,Q,SHIFT,J,I,K,L,U,O");
        //
        this.background =this.add.tileSprite(0,0,this.game.config.width,this.game.config.height,"background");
        this.background.setOrigin(0,0);
        //
        //#endregion

        //#region JUGADOR 1

        this.player1 = new Player1 (this, this.game.config.width/2 -64, this.game.config.height/2, "player1");

        this.weapon1 = this.physics.add.sprite(this.game.config.width/2 -32, this.game.config.height/2, "armacac1");
        this.weapon1.setScale(2.5);
        this.weapon1.setCollideWorldBounds(true);
        
        //#endregion

        //#region JUGADOR 2

        this.player2 = new Player2 (this, this.game.config.width/2 +64, this.game.config.height/2, "player2");

        this.weapon2 = this.physics.add.sprite(this.game.config.width/2 +96, this.game.config.height/2, "armacac2");
        this.weapon2.setScale(2.5);
        this.weapon2.setCollideWorldBounds(true);
        //#endregion
          
        //grupo de jugadores
        this.players= this.physics.add.group();
        this.players.add(this.player1);
        this.players.add(this.player2);

        // #region INICIALIZACIÓN SPAWNEO (OLEADA 0)

        //#region funciones aleatorias
        function getRandomNumber(min, max) {
            // Genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo)
            const randomDecimal = Math.random();

            // Ajusta el valor al rango deseado
            const randomInRange = randomDecimal * (max - min) + min;

            // Redondea al entero más cercano
            const randomNumber = Math.round(randomInRange);

            return randomNumber;
        }

        function getRandomNumberWithMargin(min, max, margin) {
            const side = Phaser.Math.Between(0, 3); // 0: arriba, 1: derecha, 2: abajo, 3: izquierda

            let randomValue;

            switch (side) {
                case 0:
                    // Arriba
                    randomValue = Phaser.Math.Between(min + margin, max - margin);
                    return { x: randomValue, y: min - margin };
                case 1:
                    // Derecha
                    randomValue = Phaser.Math.Between(min + margin, max - margin);
                    return { x: max + margin, y: randomValue };
                case 2:
                    // Abajo
                    randomValue = Phaser.Math.Between(min + margin, max - margin);
                    return { x: randomValue, y: max + margin };
                case 3:
                    // Izquierda
                    randomValue = Phaser.Math.Between(min + margin, max - margin);
                    return { x: min - margin, y: randomValue };
                default:
                    return { x: 0, y: 0 }; // Valor predeterminado en caso de algún problema
            }
        }

        //#endregion
        
        // Llamada para obtener coordenadas en el borde con un margen de 30 unidades
        const randomPosition = getRandomNumberWithMargin(0, 790, 30);
        //Inicializacion de los enemigos
        this.cuatroDedos = new Enemy(this, randomPosition.x, randomPosition.y, "cuatroDedos"); 
        this.cuatroDedos.setEnemyType("cuatroDedos");
        this.cuatroDedos.setScale(2);
        this.cuatroDedos.setInteractive();

        // #endregion

        //grupo de enemigos
        this.enemies= this.physics.add.group();
        this.enemies.add(this.cuatroDedos);

        //colisiones
        this.physics.add.overlap (this.players, this.enemies, this.DeathManager, null, this); 
    }

    //#region daño a los jugadores
    damagePlayers(player, enemy){ 
        player.hp = player.hp-enemy.attack; 
    }
    //#endregion

    //#region FUNCIONES DE MUERTE Y GAMEOVER
    GameOverManager(){

        this.scene.start("SceneLose");
        const hudScene = this.scene.get('HUDScene');
        hudScene.tiempo = 10;
        hudScene.reloj = 10000000;
        this.scene.stop("HUDScene");
    }
    //funciones de prueba
    DeathManager(player, enemy){
 
        this.PlayerDeath(player, enemy);
        this.EnemyDeath(player, enemy);
    }
    //funciones de prueba
    EnemyDeath(player, enemy){

        if(enemy.isAlive())
        {
        enemy.takeDamage(player.attack);
        }
        else{
            enemy.die();
        }

    }
    PlayerDeath(player, enemy){

        if(player.isAlive() == true)
        {
        player.takeDamage(enemy.attack);
        }
        if(player.isAlive()== false){
            this.GameOverManager();
        
        }
    }
    //#endregion

    //#region RESETPOS
    resetPosX(){

        const sectionWidth = this.game.config.width / 3; // Dividir en 3 secciones
        const centerX = this.game.config.width / 2;
        let x;

        do {
            x = Phaser.Math.RND.between(0, this.game.config.width);

        } while (
            (x >= centerX - sectionWidth - 100 && x <= centerX + sectionWidth + 100) 
        );
        return x;
    }
    resetPosY(){
        const sectionHeight = this.game.config.height / 3;
        const centerY = this.game.config.height / 2;
        let y;
    
        do {
            y = Phaser.Math.RND.between(0, this.game.config.height);
        } while (
            (y >= centerY - sectionHeight - 100 && y <= centerY + sectionHeight + 100)
        );
        return y;

    }
    //#endregion

    update(){

        this.cuatroDedos.trackClosestPlayer(this.player1,this.player2);//tracking del cuatroDedos

        //#region function getRandomNumberWithMargin
        function getRandomNumberWithMargin(min, max, margin) {
            const side = Phaser.Math.Between(0, 3); // 0: arriba, 1: derecha, 2: abajo, 3: izquierda
        
            let randomValue;
        
            switch (side) {
                case 0:
                    // Arriba
                    randomValue = Phaser.Math.Between(min + margin, max - margin);
                    return { x: randomValue, y: min - margin };
                case 1:
                    // Derecha
                    randomValue = Phaser.Math.Between(min + margin, max - margin);
                    return { x: max + margin, y: randomValue };
                case 2:
                    // Abajo
                    randomValue = Phaser.Math.Between(min + margin, max - margin);
                    return { x: randomValue, y: max + margin };
                case 3:
                    // Izquierda
                    randomValue = Phaser.Math.Between(min + margin, max - margin);
                    return { x: min - margin, y: randomValue };
                default:
                    return { x: 0, y: 0 }; // Valor predeterminado en caso de algún problema
            }
        }
        //#endregion

        //#region Control del movimiento del personaje (si está vivo)
        if (this.player1.isAlive() && this.player2.isAlive()){
            if(this.pausa == false){ //esto es para cuando metamos el menu de pausa. Jugar con esta variable para cuando sea true
                //los pjs y los enemigos se paren
            this.movePlayer1Manager();
            this.moveWeapon1Manager();
            this.movePlayer2Manager();
            this.moveWeapon2Manager();
            }
        }
        //#endregion

        // #region OLEADA 1
        const randomPosition = getRandomNumberWithMargin(0, 790, 30);
        
        //Spawn carroniero
        if (this.time.now > 10000 && this.time.now > this.lastSpawnTime + 2000) {
            this.lastSpawnTime = this.time.now; // Actualiza el tiempo del último spawn
            // Resto del código de spawn...
            const randomPosition = getRandomNumberWithMargin(0, 790, 30);
            this.carroniero = new Enemy(this, randomPosition.x, randomPosition.y, "carroniero");
            this.enemies.add(this.carroniero);
            this.carroniero.setEnemyType("carroniero");
            this.carroniero.setScale(2);
            this.carroniero.setInteractive();
            this.carroniero.trackClosestPlayer(this.player1, this.player2);
        }
        //#endregion
        
        this.updateScoreInHUD(this.player1.hp,this.player1.xp,this.player2.hp,this.player2.xp);

    }

    //#region funciones del personaje 1
    player1Attack() {
        const attackArea = new Phaser.Geom.Circle(this.weapon1.x, this.weapon1.y, 50);
     
        this.enemies.getChildren().forEach(enemy => {
          if (Phaser.Geom.Circle.ContainsPoint(attackArea, enemy)) {
            enemy.takeDamage(1);
    
            if (!enemy.isAlive()) {
              enemy.die();
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

        if (this.keys.E.isDown || this.keys.Q.isDown){
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

    //#endregion

    //#region funciones del personaje 2
    player2Attack() {
        const attackArea = new Phaser.Geom.Circle(this.weapon2.x, this.weapon2.y, 50);
     
        this.enemies.getChildren().forEach(enemy => {
          if (Phaser.Geom.Circle.ContainsPoint(attackArea, enemy)) {
            enemy.takeDamage(1);
    
            if (!enemy.isAlive()) {
              enemy.die();
            }
          }
        });
    }

    movePlayer2Manager(speed) {
        speed = 140;
    
        if (this.keys.J.isDown && this.player2.x > this.player2.width / 2) {
            this.player2.flipX = true;
            this.player2.play("walk2", true);
            this.player2.setVelocityX(-speed);
        } else if (this.keys.L.isDown && this.player2.x < this.game.config.width - this.player2.width / 2) {
            this.player2.flipX = false;
            this.player2.play("walk2", true);
            this.player2.setVelocityX(speed);
        } else {
            this.player2.setVelocityX(0);
        }
    
        if (this.keys.I.isDown && this.player2.y > this.player2.height / 2) {
            this.player2.play("walk2", true);
            this.player2.setVelocityY(-speed);
        } else if (this.keys.K.isDown && this.player2.y < this.game.config.height - this.player2.height / 2) {
            this.player2.play("walk2", true);
            this.player2.setVelocityY(speed);
        } else {
            this.player2.setVelocityY(0);
        }
    
        if (this.keys.U.isDown||this.keys.O.isDown){
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
        if (this.keys.J.isDown && this.weapon2.x > this.weapon2.width / 2) {
            this.weapon2.flipX = true;
            this.weapon2.x = (this.player2.x - offset);
            this.weapon2.setVelocityX(-speed);
        } else if (this.keys.L.isDown && this.weapon2.x < this.game.config.width - this.weapon2.width / 2) {
            this.weapon2.flipX = false;
            this.weapon2.x = (this.player2.x + offset);
            this.weapon2.setVelocityX(speed);
        } else {
            this.weapon2.setVelocityX(0);
        }
    
        if (this.keys.I.isDown && this.weapon2.y > this.weapon2.height / 2) {
            this.weapon2.setVelocityY(-speed);
        } else if (this.keys.K.isDown && this.weapon2.y < this.game.config.height - this.weapon2.height / 2) {
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
            }
        }
    }

    //#endregion


    //actualizacion del HUD...
    updateScoreInHUD(health1, exp1, health2, exp2) {
        // Obtén la escena del HUD y llama a su método para actualizar el puntaje
        const hudScene = this.scene.get('HUDScene');
        if (hudScene) {
            hudScene.updateScore(health1, exp1, health2, exp2);
        }
        if (hudScene.tiempo == 0){
            this.scene.start('SceneWin');
            hudScene.tiempo = 10;
            hudScene.reloj = 10000000;
            this.scene.stop("HUDScene");
        }

    }
    
}
    
    





