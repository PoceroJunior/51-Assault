window.onload=function(){
    var config ={
        type: Phaser.AUTO,
        width: 256,
        height: 272,
        backgroundColor: 0x00000,
        scene: [Scene1, Scene2]
    }
    var game=new Phaser.Game(config);
}