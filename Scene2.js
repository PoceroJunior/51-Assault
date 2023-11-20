class Scene2 extends Phaser.Scene{
constructor(){
    super("playGame");
}
create(){
    this.background =this.add.image(0,0,"background");
    this.background.setOrigin(0,0);
     
    this.add.text(20,20,"playing game", 
    {font: "25px Arial", 
    fill: "yellow"});
}
}