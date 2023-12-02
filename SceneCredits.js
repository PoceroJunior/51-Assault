class SceneCredits extends Phaser.Scene{
    constructor(){
        super ({ key: 'credits'});
    }
    preload(){
        this.load.image ('background2', "Assets/Interface/creditos.png");
        this.load.image ('salirButton', "Assets/Interface/options/atras-button.png");

    }
    create() {
        this.background = this.add.image(395,270, 'background2');
        this.background.setScale(1.65, 2);
        this.exitButton = this.add.image(100,500, 'salirButton');
        this.exitButton.setScale(1.5);
        this.exitButton.setInteractive();
        this.exitButton.on ('pointerdown', () => {
            this.scene.start('menu');
        });

    }
}