//tamaño fondo juego e interfaces: 480x270
window.onload=function(){
    var config ={
        type: Phaser.AUTO,
        width: 790,
        height: 540,
        backgroundColor: 0x00000,
        pixelArt: true,
        scene: [SceneMenu, SceneOptions, SceneSelectCh, SceneCredits, SceneLoading, SceneGame, HUDScene, SceneWin, SceneLose], //añadir HUDScene
        autocenter: true,
        physics: {default: "arcade", arcade:{debug: false}}
    }
    var game=new Phaser.Game(config);
}