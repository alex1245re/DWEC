//declaracion
const abecedario = ["abcdefghijklmnñopqrstuvwxyz"]
const palabras = [
  "montaña", "cafe", "guitarra", "nube", "sombra", "luz", "viento", "mariposa", "espejo", "bosque",
  "lluvia", "camino", "fuego", "rio", "tren", "puerta", "ventana", "flor", "sueno", "rayo",
  "arena", "sol", "noche", "estrella", "hoja", "barco", "cielo", "silencio", "murmullo", "fruta",
  "trueno", "piedra", "ciudad", "marea", "invierno", "verano", "otono", "primavera", "mar", "montura",
  "calido", "frio", "rapido", "lento", "feliz", "triste", "fuerte", "debil", "viejo", "nuevo",
  "correr", "saltar", "caminar", "pensar", "brillar", "cantar", "reir", "volar", "caer", "nadar",
  "color", "tierra", "bruma", "nieve", "fuego", "espacio", "planeta", "estrella", "universo", "galaxia",
  "roca", "arena", "bosque", "fluir", "mirar", "sentir", "crear", "romper", "construir", "crecer",
  "duda", "verdad", "mentira", "destino", "tiempo", "recuerdo", "pasado", "presente", "futuro", "instante",
  "calido", "helado", "suave", "aspero", "profundo", "ligero", "oscuro", "brillante", "simple", "complejo",
  "libro", "historia", "puente", "camino", "muralla", "torre", "llave", "misterio", "palabra", "voz",
  "risa", "llanto", "suspiro", "grito", "abrazo", "mirada", "paso", "huella", "sombra", "eco"
];


//Main
window.onload = ()=>{
    const contenedorPalabra = document.getElementById("contenedorPalabra");
    const letras = document.getElementById("letras");
    const contenedorVidas = document.getElementById("contenedorVidas");
    let mostrarVidas = document.createElement("p");
        let rayas = "";
        let vidas = 10;

        //cogemos una palabra aleatoria dentro del array
        let numAleat = Math.floor(Math.random() * palabras.length);
        let palabraMostrar = document.createElement("p");
        let palabraElegida = palabras[numAleat];
        let palabraOculta = Array(palabraElegida.length).fill("-"); // array de guiones

        console.log(palabraElegida);
        //Mostramos la rayas por pantalla
        palabraMostrar.innerHTML = palabraOculta.join("");
        contenedorPalabra.appendChild(palabraMostrar);
    
        letras.addEventListener("click",(e)=>{
            if(palabraOculta.join("") == palabraElegida) {palabraMostrar.innerHTML ="VICTORIA MAGISTRAL";return}
            if(e.target.id == "letras") return;
            if(vidas <= 0 ) {palabraMostrar.innerHTML ="CAGASTE, NO TE QUEDAN VIDAS";return};
            if(palabraElegida.includes(e.target.textContent)){
                e.target.style.backgroundColor="green";
                for (let i = 0; i < palabraElegida.length; i++) {
                    if (palabraElegida[i] == e.target.textContent) {
                        palabraOculta[i] = e.target.textContent;
                    }
                }
            palabraMostrar.innerHTML = palabraOculta.join("");
            }
            else{
                 e.target.style.backgroundColor="grey";
                 vidas--;
            }
            //mostramos las vidas que nos quedan
            mostrarVidas.innerHTML = `Te quedan ${vidas} vidas`;
            contenedorVidas.appendChild(mostrarVidas);
    });
}
