class TresEnRaya{

    tablero;
    turnoJugador;

    constructor(){
        this.reiniciaPartida();
    }

    mueveJ1(fila,columna){
        this.mueve(fila,columna,1);
    }
    mueveJ2(fila,columna){
        this.mueve(fila,columna,-1)
    }

    //0 si el jugador mueve correctamente
    //1 si la casilla esta ya ocupada
    //2 si no es el turno del jugador
    //3 si ha ganado el jugador
    //4 si estan marcadas todas las casillas
    mueve(fila,columna,jugador){
        let resultado;

        //la celda no esta vacia
        if (this.tablero[fila][columna] === "-"){
            //el es turno de el jugador
            if(jugador == this.turnoJugador){
                this.tablero[fila][columna] = this.turnoJugador;
                resultado = 0;
                this.turnoJugador *= -1
                //con este movimiento gana
                 if(this.hayGanador()){
                        resultado = 3;
                        //aplanamos el array y comprobamos que este lleno
                        if(!this.tablero.flat().includes("-")){
                            resultado = 4;
                        }
                }
            }
            else
                resultado = 2;
        }        
        else
            resultado = 1;
        
        return resultado;
        
    }

    hayGanador() {
    // Comprobamos filas y columnas
    for (let i = 0; i < 3; i++) {
    if (this.tablero[i][0] !== "-" && this.tablero[i][0] === this.tablero[i][1] && this.tablero[i][1] === this.tablero[i][2]) return true;
    if (this.tablero[0][i] !== "-" && this.tablero[0][i] === this.tablero[1][i] && this.tablero[1][i] === this.tablero[2][i]) return true;
    }
    // Comprobamos diagonales
    if (this.tablero[0][0] !== "-" && this.tablero[0][0] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[2][2]) return true;
    if (this.tablero[0][2] !== "-" && this.tablero[0][2] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[2][0]) return true;

    return false;
    }

     reiniciaPartida(){
        this.tablero = [
            ["-","-","-"],
            ["-","-","-"],
            ["-","-","-"]
        ];
        this.turnoJugador = 1;
    }

    mostrarTablero(){
        for (let i = 0; i < 3; i++) {
            console.log(this.tablero[i].join(" | "));
            if (i < 2) console.log(" ---------");
        }
    }

}





/*

let jugamos = true;
let cont = 0;
while (jugamos){
    cont++;
    jugador = cont % 2 != 0 ? "j1" : "j2";
        console.log(`Turno ${jugador}`);
        let fila = parseInt(prompt("Introduce la fila (0-2): "));
        let columna = parseInt(prompt("Introduce la columna (0-2): "));

        if (tablero[fila][columna] === "-")
            tablero[fila][columna] = cont % 2 != 0 ? "x" : "o";
        else{
            console.log("Esa casilla ya está ocupada.elige otra");
            cont--;
        }

        mostrarTablero();
        if(hayGanador()){
            console.log(`Enhorabuena!,${jugador} es el ganador`);
            jugamos = false;
        }

        if(cont == 6){
            console.log("Empate. Ambos jugadores han hecho sus 3 movimientos.");
            jugamos = false;
        }

}

*/