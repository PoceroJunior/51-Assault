class HUDScene extends Phaser.Scene {
    constructor() {
        super({ key: "HUDScene" });
        this.tiempo = 1.25*60;
        this.reloj = 1000;
        this.auxiliar = 1.25*60;
    }

    create() {

        //#region creacion de los sprites de vida
        this.interfaceh1 = this.add.tileSprite(1, 1, 106, 34, "health1");
        this.interfaceh1.setScale(1.2);
        this.interfaceh1.setOrigin(0,0);
        this.interfaceh1.x = 10;
        this.interfaceh1.y = 10;
        //
        this.interfaceh2 = this.add.tileSprite(1, 1, 106, 34, "health2");
        this.interfaceh2.setScale(1.2);
        this.interfaceh2.setOrigin(0,0);
        this.interfaceh2.x = 146;
        this.interfaceh2.y = 10;

        this.pause= this.add.image(52, 54, "pauseButton");
        this.pause.setScale(0.65);
        this.pause.setOrigin(0,0);
        this.pause.setInteractive();
        this.pause.x = 745;
        this.pause.y = 9;

        //#endregion
        //
        this.interfaceT = this.add.tileSprite(1, 1, 49, 28, "time");
        this.interfaceT.setScale(1.2);
        this.interfaceT.setOrigin(0,0);
        this.interfaceT.x = 680;
        this.interfaceT.y = 10;
        //

        //#region creacion de texto
        this.health1Text = this.add.text(22, 23, 'HP', { fontSize: '15px', fill: '#fff' });
        this.exp1Text = this.add.text(80, 23, 'EXP', { fontSize: '15px', fill: '#fff' });
        this.health2Text = this.add.text(158, 23, 'HP', { fontSize: '15px', fill: '#fff' });
        this.exp2Text = this.add.text(216, 23, 'EXP', { fontSize: '15px', fill: '#fff' });
        this.timeText = this.add.text(693, 18, '', { fontSize: '15px', fill: '#fff' })
        //
        //#endregion

        this.pause.on('pointerdown', () => {
            this.auxiliar = this.tiempo;
            this.scene.pause();
            this.scene.pause('SceneGame');
            this.scene.start('ScenePause');
        });

        this.iniciarContador();

    }

    updateScore(health1, exp1, health2, exp2){
        this.health1Text.setText("HP:"+ health1);
        this.exp1Text.setText("EXP:"+ exp1);
        this.health2Text.setText("HP:"+ health2);
        this.exp2Text.setText("EXP:"+exp2);
        this.timeText.setText(this.formatTiempo()); // Llama a una función para formatear el tiempo
    
    }

    //#region metodos de control de tiempo...
    iniciarContador() { //puedo hacer que entre una variable.
        this.tiempo = this.auxiliar;

        var self = this; // Capturar la referencia a la instancia de la clase

        var intervalo = setInterval(function() {
            var minutos = Math.floor(self.tiempo / 60);
            var segundos = self.tiempo % 60;

            if (segundos < 10) {
                segundos = "0" + segundos;
            }

            var tiempoRestante = minutos + ":" + segundos;

            if (self.tiempo <= 0) {
                clearInterval(intervalo);
                tiempoRestante = "0:00";
            } else {
                self.tiempo -=1; // Reducir el tiempo
                self.timeText.setText(self.formatTiempo()); // Actualizar el texto en cada iteración
            }
        }, this.reloj);
    }

    formatTiempo() {
        var minutos = Math.floor(this.tiempo / 60);
        var segundos = this.tiempo % 60;

        if (segundos < 10) {
            return minutos + ":" + "0" + Math.trunc(segundos);
        }
        else if (segundos==0){
            return minutos + ":" + segundos;
        }
        else {
            return minutos + ":" + Math.trunc(segundos);
        }
    }

    guardarTiempo(temp){
        this.auxiliar = temp;
    }
    //#endregion
}