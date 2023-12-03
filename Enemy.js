class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, spriteImg) {
    super(scene, x, y, spriteImg);

    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.body.setCollideWorldBounds(true);

    // se declara para cada enemigo
    //this.Type;
    this.attack = null;
    this.hp= null; 
    this.xp= null; 
    ////////////////////////////////////////
    this.alive = true;
    this.speed = 75;
    this.target = null; // El objetivo es el jugador mas cercano
    this.setScale(2);

    //animacion (si es necesaria) a continuacion...

    this.anims.create({
      key: "enemyAnim",
      frames: this.anims.generateFrameNumbers(spriteImg), // Cambia los números según los frames de tu spritesheet
      frameRate: 10,
      repeat: -1
    });
  }

  isAlive (){
    if (this.hp > 0){ 
      return this.alive= true;
    }
    else { 
      return this.alive= false;

      //aqui se añadiría una probabilidad de que se creará la llave por la cual ganas...
    }
  }

  takeDamage(damage) {
    // Función para recibir daño
    this.hp -= damage;
    if (this.hp <= 0 && !this.isAlive()) {
        // El jugador ha muerto, puede añadirse lógica adicional aquí
        this.hp = 0;
        this.alive = false;
        this.die();
    }
}

  die(){
    this.anims.stop("enemyAnim", true);
    this.body.setEnable(false);
    //Agregar aquí otros efectos que suceden cuando se mata un enemigo
    // Eliminar el enemigo después de un tiempo (por ejemplo, 1 segundo)
    this.destroy();
    
  }

  setEnemyType(EnemyType){ 
    switch (EnemyType){

      case "cuatroDedos":
        //this.Type = "cuatroDedos";
        this.attack = 2;
        this.hp= 2;
        this.xp= 1;
        break;

      case "carroniero":
        //this.Type = "carroniero";
        this.attack = 1;
        this.hp= 10;
        this.xp= 7;
        break;

      case "estrellado":
        //this.Type = "estrellado";
        this.attack = 1;
        this.hp= 7;
        this.xp= 4;
        break;

      case "pezLava":
        //this.Type = "pezLava";
        this.attack = 2;
        this.hp= 6;
        this.xp= 6;
        break;

      case "planetario":
        //this.Type = "planetario";
        this.attack = 1;
        this.hp= 4;
        this.xp= 3;
        break;
    }
  }

  trackClosestPlayer(player1, player2) {
      const distanceToPlayer1 = Phaser.Math.Distance.Between(this.x, this.y, player1.x, player1.y);
      const distanceToPlayer2 = Phaser.Math.Distance.Between(this.x, this.y, player2.x, player2.y);
  
      if (distanceToPlayer1 < distanceToPlayer2) {
        // El jugador 1 está más cerca, persigue al jugador 1
        if (player1) {
        this.moveTowardsPlayer.bind(this)(player1);
        }
      } else {
        if (player2) {
        // El jugador 2 está más cerca o están a la misma distancia, persigue al jugador 2
        this.moveTowardsPlayer.bind(this)(player2);
        }
      }
    }
    // Método para mover al enemigo hacia el jugador
    moveTowardsPlayer(player) {
      if (!this.body) {
        return; // Salir si this.body es undefined
      }
      //if (this.isAlive()){
        const angle = Phaser.Math.Angle.Between(this.x, this.y, player.x, player.y);

        // Calcula la velocidad en las direcciones x e y basada en el ángulo
        const velocityX = Math.cos(angle) * this.speed;
        const velocityY = Math.sin(angle) * this.speed;
    
        // Establece la velocidad del enemigo para que se mueva hacia el jugador
        this.body.setVelocity(velocityX, velocityY);
        this.play("enemyAnim", true);
        if (this.x <= player.x){           
          this.flipX = true; 
        }         
          else{           
            this.flipX = false;         
          }         
          if (this.y <= player.y){           
            this.flipY = true;         
          }         
          else{           
            this.flipY = false;         
          }
        
        //flipea los enemigos. econtrar como hacer que solo cambie el tipo de enmigo cuatroDedos
        this.angle = angle;                 
      //}
      //else{
      //  this.body.setVelocity(0, 0);
      //}
      /*
      switch (Type){

        case "cuatroDedos":
          if (this.x <= player.x){           
            this.flipX = true; 
          }         
            else{           
              this.flipX = false;         
            }         
            if (this.y <= player.y){           
              this.flipY = true;         
            }         
            else{           
              this.flipY = false;         
            }
          break;
  
        case "carroniero":
          if (this.x <= player.x){           
            this.flipX = true; 
          }         
            else{           
              this.flipX = false;         
            }         
          break;
  
        case "estrellado":
          if (this.x <= player.x){           
            this.flipX = true; 
          }         
            else{           
              this.flipX = false;         
            }         
          break;
  
        case "pezLava":
          if (this.x <= player.x){           
            this.flipX = true; 
          }         
            else{           
              this.flipX = false;         
            }         
          break;
  
        case "planetario":
          if (this.x <= player.x){           
            this.flipX = true; 
          }         
            else{           
              this.flipX = false;         
            }         
            if (this.y <= player.y){           
              this.flipY = true;         
            }         
            else{           
              this.flipY = false;         
            }
          break;
      }
      */
      
    }


  }
