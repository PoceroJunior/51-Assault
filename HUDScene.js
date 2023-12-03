class HUDScene extends Phaser.Scene {
    constructor() {
        super({ key: "HUDScene" });
        this.tiempo;
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
        this.interfaceh2.x = 10;
        this.interfaceh2.y = 62;

        //#endregion
        //
        this.interfaceT = this.add.tileSprite(1, 1, 49, 28, "time");
        this.interfaceT.setScale(1.2);
        this.interfaceT.setOrigin(0,0);
        this.interfaceT.x = 721;
        this.interfaceT.y = 10;
        //

        //#region creacion de texto
        this.health1Text = this.add.text(22, 23, 'HP', { fontSize: '15px', fill: '#fff' });
        this.exp1Text = this.add.text(80, 23, 'EXP', { fontSize: '15px', fill: '#fff' });
        this.health2Text = this.add.text(22, 75, 'HP', { fontSize: '15px', fill: '#fff' });
        this.exp2Text = this.add.text(80, 75, 'EXP', { fontSize: '15px', fill: '#fff' });
        this.timeText = this.add.text(733, 18, '', { fontSize: '15px', fill: '#fff' })
        //
        //#endregion

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
    iniciarContador() {
        this.tiempo = 1.25*60;
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
        }, 1000);
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
    //#endregion
}