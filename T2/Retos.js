    //1

    function generadorNums(){
        return Math.floor(Math.random() * (9 -1) + 1);
    }

    function generadorLetras(){
        let letras =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];

        return letras[Math.floor(Math.random() * (27 -1) + 1)];
    }

    function generadorMatriculas(){

        let matricula = "" + generadorLetras() + generadorLetras() + generadorLetras() + generadorNums() + generadorNums() + generadorNums() + generadorNums();
    

        return matricula;
    }

    generadorMatriculas();

//2
    function tirarDado(n,m){

        let resultados = []; 
        let suma = 0 ;

        for(let i=0;i<n;i++){
           let res = Math.floor(Math.random() * (m -1) + 1);
           resultados.push(res);
           suma +=res;
        }

        console.log(`${n} dados de ${m} caras : ${resultados.join(", ")} -> total ${suma}`);
    }
    
    tirarDado(3,6);

//3
    alfanum = [];

    for(let i=0;i<=16;i++){
        posibilidad = Math.round(Math.random() * (1 -0) + 0);
        if (posibilidad == 1)
            alfanum += String(generadorNums());
        else
            alfanum +=generadorLetras();
    }


    let cadena = alfanum.toString();

//4
let pass = "A1*fFKhjk";

if(pass.length <8)
    console.log("Contraseña no valida, debe tener mas de 8 caracteres");
    else if(!/[A-Z]/.test(pass))
        console.log("Contraseña no valida, debe tener AL MENOS 1 mayuscula");
        else if (!/[0-9]/.test(pass))
            console.log("Contraseña no valida, debe tener AL MENOS 1 numero");    
            else if (!/[!$%&*]/.test(pass))
                console.log("Contraseña no valida, debe tener AL MENOS 1 caracter especial");
            else
                console.log("Contraseña Valida");
//5
function compresorCadenas(cad){
    let resultado = "";
  let contador = 1;

  for (let i = 1; i <= cad.length; i++) {
    if (cad[i] === cad[i - 1])
      contador++;
    else if (texto.length === 0)
        resultado = "";
    else{
      resultado += contador + cad[i - 1];
      contador = 1;
    }
  }

  return resultado;
}

compresorCadenas("aaabbcddd"); 

//6

function inversion(cadena){
    let resultado = "";

    for(let i = 0; i<cadena.length;i+=2){
        resultado += cadena[i].repeat(Number(cadena[i+1]));
    }
    return resultado;
}

inversion("a3b2c1d3");

//7

let aleat = Math.floor(Math.random() * (100 -1) + 1);
let encontrado = false;
console.log(aleat);

for(let i =1; i<= 7 && !encontrado;i++){
     num =parseInt(prompt("INTRODUZCA:"));
    if(aleat > num)
        alert("El mi es mayor");
    else if ( aleat < num)
        alert("el mio es menor");
    else if (aleat == num){
        alert("HAS ACERTADO");
        encontrado=true;
    }
    else
        alert("Algo salio mal");
}

//8 COMPLETO
function generarTarjeta(){
    let numeroalet = Math.floor(Math.random() * 900000000000000) + 100000000000000;
    let str = numeroalet.toString();
    let cadenaLuhn = 0;
    let num1,num2;
    let numFinal = 0;
    let aux = 0;
    for(let i=str.length-1;i>=0;i--){
        if(i % 2 == 0){
            aux = (parseInt(str[i]) * 2);
            
            if ((aux >= 10)){
            num1 = parseInt(str.charAt(0));
            num2 = parseInt(str.charAt(1));
            cadenaLuhn += num1 + num2;
            }
            else
                cadenaLuhn += aux;
        }
        else
            cadenaLuhn += parseInt(str[i]);
    }

    numFinal = 10 - (cadenaLuhn % 10);
    str += numFinal.toString();


    return str;
}

generarTarjeta();

//9
let cadenaNumeros = "10 20 30 40 50 60";
let arrayDeNumeros = cadenaNumeros.split(' ').map(Number);

//promedio
let total = 0;

for (let i=0;i<arrayDeNumeros.length;i++) {
  total += arrayDeNumeros[i];
}

let promedio = total / arrayDeNumeros.length;
console.log(promedio); 

//mediana


//desviacion estandar

//10
let palabra = "javascript";
let vacio = "-".repeat(palabra.length);

console.log(vacio);

while (vacio !== palabra) {
  let intento = prompt("Introduce una letra: ");

  for (let i = 0; i < palabra.length; i++) {
    if (intento == palabra.charAt(i)) {
      vacio = vacio.substring(0, i) + intento + vacio.substring(i + 1);
    }
  }

  console.log(vacio);
}

console.log("¡Enhorabuena! Has adivinado la palabra: " + palabra);

