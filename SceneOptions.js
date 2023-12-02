class SceneOptions extends Phaser.Scene{
    constructor(){
        super ({ key: 'options'});
    }
    preload(){
        this.load.image ('background3', "Assets/Interface/options/option-background.png");
        this.load.image ('mute', "Assets/Interface/options/mute-button.png");
        this.load.image ('unmute', "Assets/Interface/options/music-button.png");
        this.load.image ('salirButton', "Assets/Interface/options/atras-button.png");

    }
    create() {
        this.background = this.add.image(395,270, 'background3');
        this.background.setScale(1.65, 2);
        this.muteButton = this.add.image (250,270, 'mute');
        this.muteButton.setScale(1.6);
        this.muteButton.setInteractive();
        this.unmuteButton = this.add.image (530,270, 'unmute');
        this.unmuteButton.setScale(1.6);
        this.unmuteButton.setInteractive();
        this.exitButton = this.add.image(100,500, 'salirButton');
        this.exitButton.setScale(1.5);
        this.exitButton.setInteractive();
        this.exitButton.on ('pointerdown', () => {
            this.scene.start('menu');
        });

    }
}