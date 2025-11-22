//variables generales
var miBola;
var miBarra;
var miIntervalo;

//variables de la bola
var velocidadY = 5;
var posicionYBola = 150;
var velocidadX = 5;
var posicionXBola = 250;

//variables de la barra
var posicionXBarra = 225;

//Main
window.onload = () =>{
    inicializa();
    
    if(fotosVidas.length > 0)
        animaJuego();

    document.addEventListener("keydown",(e)=>{
        if(e.key == "ArrowRight" && posicionXBarra < (500 - 50)){
            posicionXBarra += 15;
            miBarra.style.marginLeft = posicionXBarra + "px";
        }
        
        if(e.key == "ArrowLeft" && posicionXBarra > 0){
            posicionXBarra -= 15;
            miBarra.style.marginLeft = posicionXBarra + "px";
        }
    });

    btnRestart.addEventListener("click",()=>{
        inicializa();
        animaJuego();
    });
}

function inicializa()
{
       miBola = document.getElementById("bola");
    miBarra = document.getElementById("barra");
    miCuadro = document.getElementById("cuadro");
    misVidas = document.getElementById("vidas");
    gif = document.getElementById("gif");
    fotosVidas = document.getElementsByClassName("vida");
    gameover = document.getElementById("gameover");
    btnRestart = document.getElementById("restart");

    //centramos la barra para que aparezca en medio
    miBarra.style.marginLeft = posicionXBarra + "px";

    //creamos bloques
    misDiv = document.getElementsByClassName("nuevoDiv");

    for(let i=0; i<21;i++){
        var nuevoDiv = document.createElement("div");
        nuevoDiv.className = "nuevoDiv";
        nuevoDiv.style.position = "absolute";

        // Calculamos posición tipo "rejilla"
        let fila = Math.floor(i / 7); // 7 columnas
        let columna = i % 7;

        nuevoDiv.style.left = (10 + columna * 70) + "px";
        nuevoDiv.style.top = (10 + fila * 50) + "px";
        miCuadro.appendChild(nuevoDiv);
    }
}
//Funciones
function animaJuego(){
    
    const objetoCuadro = miCuadro.getBoundingClientRect();
    velocidadY = 5;
    posicionYBola = 150;
    velocidadX = 5;
    posicionXBola = 250;
    gameover.style.visibility = "hidden";
    miBarra.style.visibility = "visible";    
    miBola.style.visibility = "visible";
    miIntervalo = setInterval(()=>{
        posicionYBola += velocidadY;
        miBola.style.top = posicionYBola + "px";


        posicionXBola += velocidadX;
        miBola.style.left = posicionXBola + "px";

        const objetoBola = miBola.getBoundingClientRect();
        const objetoBarra = miBarra.getBoundingClientRect();

        //rebote en la pared
        if (objetoBola.top <= objetoCuadro.top || objetoBola.bottom >= objetoCuadro.bottom)
            velocidadY *= -1;


        if (objetoBola.left <= objetoCuadro.left || objetoBola.right >= objetoCuadro.right)
            velocidadX *= -1;
        
        //choque con barra
        if (
        objetoBola.right >= objetoBarra.left &&
        objetoBola.left <= objetoBarra.right &&
        objetoBola.bottom >= objetoBarra.top &&
        objetoBola.top <= objetoBarra.bottom
        ) {
            velocidadY *= -1;
        }

        //choque con cuadros
           const bloques = document.getElementsByClassName("nuevoDiv");
            for (let i = bloques.length - 1; i >= 0; i--) { // recorremos al revés
                const bloque = bloques[i];
                const objetoBloque = bloque.getBoundingClientRect();

                if (
                    objetoBola.right >= objetoBloque.left &&
                    objetoBola.left <= objetoBloque.right &&
                    objetoBola.bottom >= objetoBloque.top &&
                    objetoBola.top <= objetoBloque.bottom
                ) {
                    velocidadY *= -1; // la bola rebota
                    bloque.remove();   // eliminamos **solo este bloque**
                    break;             // rompemos el bucle para no eliminar más de uno por frame
                }
            }

        // pierdo si se cae la bola
        if(objetoBola.bottom >= objetoCuadro.bottom){
            fotosVidas[0].remove();
            clearInterval(miIntervalo);

            if(fotosVidas.length > 0){
                gif.style.visibility = "visible"; 
                setTimeout(()=>{
                    gif.style.visibility = "hidden";
                    animaJuego();
                },4550)   
            }
        }
            if(fotosVidas.length == 0){
            gameover.style.visibility = "visible";
            miBarra.style.visibility = "hidden";    
            miBola.style.visibility = "hidden";
            }
    },30);
}