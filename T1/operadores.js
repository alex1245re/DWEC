let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));

// Tu código aquí para mostrar suma, resta, multiplicación y división

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);

let numero = Number(prompt("Ingrese un número"));
// Usa un condicional para determinar si es par o impar

const par = numero % 2 == 0 ? "par" : "impar";

console.log(par);

let a = Number(prompt("Número 1"));
let b = Number(prompt("Número 2"));
let c = Number(prompt("Número 3"));
// Escribe un condicional para encontrar el mayor

if(a > b && a > c)
    console.log(a, " es el mayor");
else if (b > a && b > c)
    console.log(b, " es el mayor");
else if (c > a && c > b)
    console.log(c, " es el mayor");

let num = Number(prompt("Ingrese un número"));
// Usa un bucle for para mostrar la tabla de multiplicar

console.log("Tabla del", num);
for(let i = 0; i <= 10; i++){
    console.log(`${num} x ${i} = ${num * i}`);
}

let N = Number(prompt("Ingrese un número"));
// Usa un bucle for y una variable acumuladora para sumar
let x = 0;
for(let i = 0; i <= N ;i++){
    x += i;
}
console.log(x);


let positivos = 0;
let negativos = 0;

for(let i = 0; i < 5; i++) {
    let num = Number(prompt(`Ingrese el número ${i+1}`));
    // Incrementa positivos o negativos según corresponda
    num >=0 ? positivos+=1 : negativos+=1;
}

console.log(`positivos ${positivos} ; negativos ${negativos}`);


let primo = Number(prompt("Ingrese un número"));

let res = "Primo";
if (primo <= 1) 
    res = "No Primo";  // 0 y 1 no son primos
else {
    for (let i = 2; i < primo; i++) {
        if (primo % i === 0) {
            res = "No Primo";
            i = primo+1;
        }
    }
}

console.log(res);


let numero = Number(prompt("Ingrese un número"));
let factorial = 1;
// Calcula el factorial con un bucle



let N = Number(prompt("Ingrese un número"));
// Usa un bucle y el operador % para imprimir los pares

for(let i = 0; i<= N;i++){
    if(i % 2 == 0){
        console.log(i);
    }
}


let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento = Number(prompt("Adivina el número entre 1 y 10"));

while(intento !== numeroSecreto) {
    // Indica si el intento es mayor, menor o correcto
    if(numeroSecreto > intento){
        alert("ERROR, mi numero es mayor");
        intento = Number(prompt("vuelva a probar:"));
    }
    else if (numeroSecreto < intento){
        alert("ERROR, mi numero es menor");
        intento = Number(prompt("vuelva a probar:"));
    }
}
 alert("Correcto, has acertado");


// 2 RELACION

let edad = Number(prompt("Ingrese su edad"));
let permiso = prompt("¿Tiene permiso de sus padres? (sí/no)");
// Usa un condicional con && para determinar si puede entrar

edad >= 18 && permiso == "si" ? console.log("Acceso Permitido"):console.log("Acceso Denegado");

let matematicas = prompt("¿Aprobó matemáticas? (sí/no)");
let fisica = prompt("¿Aprobó física? (sí/no)");
let quimica = prompt("¿Aprobó química? (sí/no)");
// Usa un condicional con || para determinar si pasa al siguiente nivel

matematicas == "si" || fisica == "si" || quimica =="si" ? console.log("Pasa al siguiente nivel"):console.log("No pasa de nivel");

let contraseña = "1234";
// Usa ! para comprobar si no es correcta

do{
    contraseña = prompt("Ingrese la contraseña");
}while(contraseña != "1234");


numero = Number(prompt("Ingrese un número"));
// Usa && para verificar el rango

let rango;
(numero >=10 && numero <= 50)?rango = "ENTRA": rango = "NO ENTRA";

edad = Number(prompt("Ingrese su edad"));
let tutor = prompt("¿Tiene tutor presente? (sí/no)");
// Usa && y || según corresponda

if(edad >= 18 || tutor == "si"){
    console.log("PUEDES ENTRAR");
}

let usuario = prompt("Ingrese su usuario");
contraseña = prompt("Ingrese su contraseña");
// Condicional usando && y ||

if ((usuario == "admin" && contraseña == "1234") || (usuario == "invitado"))
    console.log("ACCESO VALIDO");

numero = Number(prompt("Ingrese un número"));
// Usa operadores lógicos para evaluar ambas condiciones

(numero >=0 && numero <100) ?console.log("CORRECTO"):console.log("NO ENTRA");

let dia = prompt("Ingrese un día de la semana");
// Usa || para comparar con lunes, martes, miércoles, jueves, viernes

(dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "jueves" || dia == "viernes")
?console.log("DIA CORRECTO"):console.log("INCORRECTO");

edad = Number(prompt("Ingrese su edad"));
let nacionalidad = prompt("Ingrese su nacionalidad");
// Usa && y >= para verificar la condición

(edad >=18 && nacionalidad == "España")?console.log("VOTANTE VALIDO"):console.log("VOTANTE INVALIDO");


while (!(usuario === "admin" && contraseña === "1234")) {
    usuario = prompt("Usuario:");
    contraseña = prompt("Contraseña:");
    // Mensaje de error si no es correcto
    console.log("LOGIN INCORRECTO");
}
console.log("¡Acceso permitido!");