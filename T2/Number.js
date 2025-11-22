//1
let cad1 = "123";
let cad2 = "3.14";
let cad3 = "abc";

Number(cad1);
parseInt(cad2);
parseInt(cad3); 

//2
function comprobarEntero(valor1){
   return Number.isInteger(valor1);
}

//3
Number.isNaN(NaN); //True
Number.isNaN("hello"); //false
Number.isNaN(undefined); //false
Number.isNaN(0/0); //true
Number.isNaN(parseInt("abc")); //true

//4
Number.isFinite(0/1); //true

//5

Math.pi.toFixed(2);
Math.pi.toFixed(4);
Math.pi.toFixed(6);

//6
let exp = 123456;

exp.toExponential(2);

//7

let a = 255;

a.toString(2);
a.toString(8);
a.toString(16);

//8

let b = 123.456789;

b.toPrecision(4);
b.toPrecision(7);

//12
function validarNum(cad){
    val = "No Valido";
    if(!(Number.isNaN(cad))){
        if(Number.isInteger(cad))
            val = "entero";
        else if (typeof cad == "string")
            val ="Cadenas de texto no son validas";
        else    
            val = "decimal";
    }
    return val;
}
let exp = 123;
validarNum(exp);


//2 RELACION

//1
function valorAbosuluto(num){
    return Math.abs(num);
}

//2
let num =parseFloat(prompt("Numero decimal: "));

Math.round(num); //redondeo
Math.ceil(num); // redondeo por exceso (hacia arriba)
Math.floor(num); // redondeo por defecto (hacia abajo)

//3
Math.pow(5,3); // 5 elevado a 3
Math.sqrt(81); //raiz de 81

//4
let numeros = [10,-5,3,99,42];

Math.max(...numeros);
Math.min(...numeros);

//5
console.log(Math.random());

//6
console.log(Math.floor(Math.random() * (6 -1) + 1));

//7

let min = parseInt(prompt("Minimo: "));
let max = parseInt(prompt("Maximo: "));

console.log(Math.floor(Math.random() * (max -min) + min));

//8

Math.sin(0,785398);
Math.cos(0,785398);

//9
Math.atan(1.0472);

//10
Math.log(10);

//11

let numAleat = Math.floor(Math.random() * (100 - 1) + 1);
console.log(numAleat);
let miNum = parseInt(prompt("Intente adivinar el numero: "));

while(numAleat !== miNum){
    if (miNum > numAleat)
        alert("Mi numero es menor");
    else
        alert("Mi numero es mayor");
    miNum = parseInt(prompt("Otro intento numero: "));
}
alert("Has acertado");  


let x1 = 5,x2 = 10,y1 = 15,y2 = 20;

Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2-y1),2));


alert ("LA BOLA ESTA GIRANDO, NO SE ADMITEN MAS APUESTAS");
let numGanador = Math.floor((Math.random() * (36 -1) +1));
alert (numGanador + " Es el premiado");


let contraseña = "v" + Math.floor((Math.random() * (10 -0) +0)) + "aBGgf" + Math.floor((Math.random() * (10 -0) +0));
console.log(contraseña);

 
