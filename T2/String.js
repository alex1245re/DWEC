//1
var cad = "hola";
console.log(cad.length);

//2
console.log(cad[0] + " " + cad[3]);

//3

var ej ="Programar es divertido";

ej.toLowerCase();
ej.toUpperCase();

//4
var hola = "hola";
var mundo = "mundo";

 hw = (hola.concat(" ",mundo));

//5
    let Ppos = hw.indexOf("o");
    let Upos = hw.lastIndexOf("o");
    console.log(Ppos);
    console.log(Upos);


//6
var js = "javascript es genial";

console.log(js.substring(0,10) + " " + js.slice(14));

//7

let perro = "el perro corre rapido";
let gato = perro.replace("perro","gato");
console.log(gato);

//8
let front = "Frontend Developper";
if (front.includes("end") && front.startsWith("Front") && front.endsWith("per")){
    console.log("CORRECTO");
}

//9
let colores = "rojo,verde,azul,amarillo";
let arrayColores = colores.split(","); //Convierte en un array usando el separador que le indiques,
//  si no pones ninguno lo mete todo

console.log(arrayColores);

//10
"hola".repeat(5);

//11

var espacios = "    Hola mundo    ";
console.log(espacios.trim());

//12
"7".padStart(3,"0");

//13

function contarVocales(cad){
    let cont = 0;
    let vocales ="aeiouAEIOU";
    for(let i=0;i <= cad.length-1;i++){
        if(vocales.includes(cad[i]))
            cont++;
    }
    return cont;
}

contarVocales("hola mundo");

//14
function palindromo(palabra){
    let bol = true;
    for (let i = 0; i < Math.floor(palabra.length / 2); i++) {

        if (palabra[i] !== palabra[palabra.length - 1 - i]) 

            bol = false;
    }

    return bol;
}

palindromo("radar");

//15
let java = "JavaScript";
let invertido = "";

for (let i = java.length - 1; i >= 0; i--) {
  invertido += java[i]; // vamos agregando las letras desde el final
}

console.log(invertido); 

//16

function capitalizarFrase(frase){

    let palabras = frase.split(" "); //separa la frase por palabras
    let resultado = "";

    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1); 
        //cogemos palabras del array y vamos separando, con palabras[i][0] cogemos la palabra de la 
        // posicion i y su primera letra con [0](ej."h") y concatenamos con palabras[i].slice(1) que sigue el resto de la palabra(ej."ola")
        resultado += palabras[i] + " ";
    }
    
    return resultado;
}


let frase ="hola mundo desde javascript";

console.log(capitalizarFrase(frase));

//17
let num = "1234567812345678";

console.log(num.substring(12,16).padStart(12,"*"));

//18

frase = "El lenguaje JavaScript es muy poderoso";

let palabras = frase.split(" ");

console.log("La frase tiene " + palabras.length + " palabras") ;