const todasCartas = ["1.png","2.png","3.png","4.png","5.png"];

function crearParejas(){
    let posiciones = [];
    for (let i = 0; i < todasCartas.length; i++) {
        posiciones.push(i);
        posiciones.push(i);
    }
    posiciones.sort(() => Math.random() - 0.5);
    return posiciones;
}

window.onload = () => {
  //Declaracion de variables
    const posiciones = crearParejas();
    const cartas = document.querySelectorAll("#cartas div");
    const contador = document.getElementById("contador");
    let primeraCarta = null;
    let segundaCarta = null;
    let bloqueado = false;
    let segundos = 0;
    let minutos = 0;
    let intervalo = null;

    function actualizarContador() {
        let min = minutos.toString().padStart(2, "0");
        let seg = segundos.toString().padStart(2, "0");
        contador.textContent = `${min}:${seg}`;
    }

    function iniciarContador() {
        intervalo = setInterval(() => {
            segundos++;
            if (segundos === 60) {
                minutos++;
                segundos = 0;
            }
            actualizarContador();
        }, 1000);
    }

    function detenerContador() {
        clearInterval(intervalo);
    }

    // Iniciamos el temporizador
    iniciarContador();

    // Inicializamos las cartas boca abajo
    cartas.forEach((div, i) => {
        const img = document.createElement("img");
        img.src = `img/reverso.jpg`; 
        img.style.width = "200px"; 
        img.style.height = "200px";
        div.innerHTML = "";
        div.appendChild(img);

        // Atributo inventado "data.indice" para los div, en este almacenamos su posicion
        div.dataset.indice = posiciones[i];

        div.addEventListener("click", () => {
            if (bloqueado || div.classList.contains("acertada") || div === primeraCarta) return;

            mostrarCarta(div);

            if (!primeraCarta) {
                primeraCarta = div;
            } else {
                segundaCarta = div;
                comprobarPareja();
            }
        });
    });

    function mostrarCarta(div) {
        const indice = div.dataset.indice;
        div.querySelector("img").src = `img/${todasCartas[indice]}`;
    }

    function ocultarCarta(div) {
        div.querySelector("img").src = `img/reverso.jpg`;
    }

    function comprobarPareja() {
        bloqueado = true;
        const carta1 = primeraCarta.dataset.indice;
        const carta2 = segundaCarta.dataset.indice;

        if (carta1 == carta2) {
            // Pareja acertada
            primeraCarta.classList.add("acertada");
            segundaCarta.classList.add("acertada");
            resetSeleccion();

            // Comprobar si se han acertado todas las cartas
            if (document.querySelectorAll("#cartas div.acertada").length === cartas.length) {
                detenerContador();
                 contador.innerHTML = `¡GANASTE EN ${minutos} min y ${segundos} seg!`;
            }
        } else {
            // No coincide ocultar después de 1 segundo
            setTimeout(() => {
                ocultarCarta(primeraCarta);
                ocultarCarta(segundaCarta);
                resetSeleccion();
            }, 1000);
        }
    }

    function resetSeleccion() {
        primeraCarta = null;
        segundaCarta = null;
        bloqueado = false;
    }
};
