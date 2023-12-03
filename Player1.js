class Player1 extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, spriteImg) {
        super(scene, x, y, spriteImg);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(3);
        // Atributos del jugador 1
        this.speed = 140;
        this.hp = 10;
        this.alive = true;
        this.attack = 1;
        this.xp = 0;

        //animaciones...
        scene.anims.create
        ({
            key: "idle1",
            frames: scene.anims.generateFrameNumbers("player1", {frames: [0]}),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create
        ({
            key: "walk1",
            frames: scene.anims.generateFrameNumbers("player1"),
            frameRate: 20,
            repeat: -1

        });
    }

    isAlive (){
        if (this.hp > 0){ 
            return this.alive= true;
        }
        else { 
            return this.alive= false;
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
        this.anims.stop("idle1", true);
        this.anims.stop("walk1", true);
        this.body.setEnable(false);
        //Agregar aquí otros efectos que suceden cuando se mata un enemigo
        // Eliminar el enemigo después de un tiempo (por ejemplo, 1 segundo)
        this.destroy();        
      }
    gainExperience(enemyExperience) {
        // Función para ganar experiencia al derrotar enemigos
        this.xp += enemyExperience;
        // Puedes agregar lógica adicional aquí, como aumentar el nivel del jugador, etc.
    }
}