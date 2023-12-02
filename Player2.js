class Player2 extends Phaser.Physics.Arcade.Sprite {
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
            key: "idle2",
            frames: scene.anims.generateFrameNumbers("player2", {frames: [0]}),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create
        ({
            key: "walk2",
            frames: scene.anims.generateFrameNumbers("player2"),
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

        }
    }

    gainExperience(enemyExperience) {
        // Función para ganar experiencia al derrotar enemigos
        this.xp += xp;
        // Puedes agregar lógica adicional aquí, como aumentar el nivel del jugador, etc.
    }
}