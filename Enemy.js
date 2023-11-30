class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, spriteImg) {
      super(scene, x, y, spriteImg);

      scene.add.existing(this);
      scene.physics.world.enable(this);
  
      this.speed = 75;
      this.target = null; // El objetivo es el jugador mas cercano
      this.setScale(2);

      this.body.setCollideWorldBounds(true);
      //animacion (si es necesaria) a continuacion...

      this.anims.create({
        key: "enemyAnim",
        frames: this.anims.generateFrameNumbers(spriteImg), // Cambia los números según los frames de tu spritesheet
        frameRate: 10,
        repeat: -1
      });


    }
    trackClosestPlayer(player1, player2) {
        const distanceToPlayer1 = Phaser.Math.Distance.Between(this.x, this.y, player1.x, player1.y);
        const distanceToPlayer2 = Phaser.Math.Distance.Between(this.x, this.y, player2.x, player2.y);
    
        if (distanceToPlayer1 < distanceToPlayer2) {
          // El jugador 1 está más cerca, persigue al jugador 1
          this.moveTowardsPlayer(player1);
        } else {
          // El jugador 2 está más cerca o están a la misma distancia, persigue al jugador 2
          this.moveTowardsPlayer(player2);
        }
      }
    
      // Método para mover al enemigo hacia el jugador
      moveTowardsPlayer(player) {
        const angle = Phaser.Math.Angle.Between(this.x, this.y, player.x, player.y);
    
        // Calcula la velocidad en las direcciones x e y basada en el ángulo
        const velocityX = Math.cos(angle) * this.speed;
        const velocityY = Math.sin(angle) * this.speed;
    
        // Establece la velocidad del enemigo para que se mueva hacia el jugador
        this.body.setVelocity(velocityX, velocityY);
        this.play("enemyAnim", true);
      }
    }
  