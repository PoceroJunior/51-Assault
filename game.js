//tamaño fondo juego e interfaces: 480x270
window.onload=function(){
    var config ={
        type: Phaser.AUTO,
        width: 800,
        height: 592,
        backgroundColor: 0x00000,
        pixelArt: true,
        scene: [SceneLoading, SceneGame],
        autocenter: true,
        physics: {default: "arcade", arcade:{debug: false}}
    }
    var game=new Phaser.Game(config);
}