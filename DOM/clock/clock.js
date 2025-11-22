//Definicion variables
var minutos = 0;
var segundos = 0;
let intervalo = null;
//Main
window.onload = () =>{
    const btnStart = document.getElementById("start");
    const btnStop = document.getElementById("stop");
    const btnReset= document.getElementById("reset");
    const contador = document.getElementById("contador");

    const actualizarContador = () => {
        let cont = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
        contador.innerHTML = cont;
    };

    const start = () => {
        if (!intervalo){ // evita crear varios intervalos a la vez
            intervalo = setInterval(() => {
                segundos++;
                if (segundos === 60) {
                    minutos++;
                    segundos = 0;
                }
                actualizarContador();
            }, 1000);
        }
    };

    const stop = () => {
        clearInterval(intervalo);
        intervalo = null;
    };

    const reset = () => {
        stop();
        minutos = 0;
        segundos = 0;
        actualizarContador();
    };

    btnStart.addEventListener("click",start);
    btnStop.addEventListener("click",stop);
    btnReset.addEventListener("click",reset);

    actualizarContador();
}