//RELACION DE EJERCICIOS 1

var nombre = "alex";
console.log(nombre);

let edad = 20;
console.log(edad);

edad = 33;
console.log(edad);

const pais = "España";
console.log(pais);


if (edad == 33){
    var x = 10;
}

console.log(x);


if (edad == 33){
    let y = 11;
}

// RELACION DE EJERCICIOS 2
var num = Number(prompt("Introduce un numero: "));

if (num > 0){
    console.log("El numero es positivo");
}
else if (num < 0){
    console.log("El numero es negativo");
}
else{
    console.log("El numero es 0");
}

var edades = Number(prompt("Introduce tu edad: "));

if (edades >= 18){
    console.log("mayor de edad");
}
else {
    console.log("menor de edad");
}

var par = Number(prompt("Introduce un numero: "));

if (par % 2 == 0){
    console.log("El numero es par");
}
else {
    console.log("El numero es impar");
}   

var nota = Number(prompt("Introduce una nota: "));

if (nota > 10){
    console.log("La nota no es valida");
}
else if (nota < 0){
    console.log("La nota no es valida");
}
else if (nota >= 5){
    console.log("Aprobado");
}
else if (nota < 5){
    console.log("Reprobado");
}

var num1 = 2;
var num2 = 0;


if (num1 > num2){
    console.log(num1 + " Es mayor");
}
else if (num2 > num1){
    console.log(num2 + " Es mayor");
}
else {
    console.log("Son iguales");
}

var numero = Number(prompt("Introduce un numero del 1 al 7: "));

switch (numero) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;  
    case 6:
        console.log("Sabado");
        break;  
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Numero no valido");
        break;
}

var opc = Number(prompt("Elige una opcion (1, 2, 3): "));

switch (opc) {
    case 1:
        console.log("Opcion A Seleccionada");
        break;
    case 2:
        console.log("Opcion B Seleccionada");
        break;
    case 3:
        console.log("Opcion C Seleccionada");
        break;
    default:
        console.log("Opcion no valida");
        break;
}

var color = prompt("Introduce un color (rojo, amarillo, verde): ");

switch (color) {
    case "rojo":
        console.log("Alto");
        break;
    case "amarillo":
        console.log("Preacaucion");
        break;
    case "verde":
        console.log("Avanza");
        break;
    default:
        console.log("Color no valido");
        break;
}

var fruta = "platano";

switch (fruta) {
    case "manzana":
        console.log("Es una manzana roja");
        break;
    case "platano":
        console.log("Es un platano amarillo");
        break;
    case "Uva":
        console.log("Es una una uva morada");
        break;
    default:
        console.log("Fruta no reconocida");
        break;
}

var notaChina = "A";

switch (notaChina) {
    case "A":
        console.log("Excelente");
        break;
    case "B":
        console.log("Muy bien");
        break; 
    case "C":
        console.log("Bien");
        break;
    case "D":
        console.log("Suficiente");
        break;
    case "F":
        console.log("Reprobado");
        break;      
    default:
        console.log("Calificacion no valida");
        break;
}

