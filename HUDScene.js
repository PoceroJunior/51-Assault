class HUDScene extends Phaser.Scene {
    constructor() {
        super({ key: "HUDScene", active: true });
    }

    create() {
        
        this.interfaceh1 = this.add.tileSprite(1, 1, 106, 34, "health1");
        this.interfaceh1.setScale(1.2);
        this.interfaceh1.setOrigin(0,0);
        this.interfaceh1.x = 10;
        this.interfaceh1.y = 10;
        //
        this.interfaceh2 = this.add.tileSprite(1, 1, 106, 34, "health2");
        this.interfaceh2.setScale(1.2);
        this.interfaceh2.setOrigin(0,0);
        this.interfaceh2.x = 10;
        this.interfaceh2.y = 62;
        //
        this.health1Text = this.add.text(22, 23, 'HP', { fontSize: '15px', fill: '#fff' });
        this.exp1Text = this.add.text(80, 23, 'EXP', { fontSize: '15px', fill: '#fff' });
        this.health2Text = this.add.text(22, 75, 'HP', { fontSize: '15px', fill: '#fff' });
        this.exp2Text = this.add.text(80, 75, 'EXP', { fontSize: '15px', fill: '#fff' });


    }

    updateScore(health1, exp1, health2, exp2){
        this.health1Text.setText("HP:"+ health1);
        this.exp1Text.setText("EXP:"+ exp1);
        this.health2Text.setText("HP:"+ health2);
        this.exp2Text.setText("EXP:"+exp2);
    
    // por si se necesita mas tarde: this.exp2Text.setText("EXP|${exp2}");
    

        
    }
    
}