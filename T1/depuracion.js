let nombre = "Ana
console.log(nombre);

//Error, falta las segundas comillas

console.log(edad);
let edad = 20;

//Error, primero habria que declarar la variable y luego mostrarla

let a = 5;
let b = 10;
if (a = b) {
  console.log("a es igual a b");
}

//Error, si usamos un solo igual le damos el valor de "b" a la variable "a"

let i = 0;
while (i < 5) {
  console.log(i);
}

//Error, no incrementamos el valor de i

let frutas = ["manzana", "banana", "pera"];
console.log(frutas[3]);

//Error, debemos indicar el valor dentro del array, no el indice

let persona = { nombre: "Ana", edad: 25 };
console.log(persona.apellido.toUpperCase());

//Habria que añadir apeliido: "****"

let a = 5;
let b = "10";
console.log(a + b);

//Estamos concatenando un string y un integer

let nota = 8;
if (nota > 5);
{
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

// le hemos dado a nota un valor por defecto que cumple el if y hay un punto y coma despues del if

let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i <= numeros.length; i++) {
  console.log(numeros[i]);
}

// habria que quitar el igual en "i <= numeros.length", para que recorra de 0 a 4 que son los elementos que hay

// 2 RELACION

let numero = 10;
if (numero > 5) {
  numero == 20;
}
console.log(numero);

//Estamos comparando el valor de la variable numero con 20, no asignandolo

let ciudad = "Madrid";
console.log(Ciudad);

//las variables son distintas por la mayuscula

function sumar(a, b) {
  let resultado = a + b;
}
console.log(sumar(2, 3));

// Falta "return resultado" para que la funcion devuelva

let i = 1;
while (i > 5) {
  console.log(i);
  i++;
}

// nunca entra en el bucle porque i es menor y necesita que sea mayor

let saludo = "Hola";
let nombre = "Luis";
console.log(saludo + , nombre);

//La coma debe ir entre comillas

let dias = ["Lunes", "Martes", "Miércoles"];
console.log(dias[3]);

// deberia ser console.log(dias[2]), porque el indice empieza en 0;

let usuario = { nombre: "Ana", edad: 25 };
console.log(usuario.nombre.toLowerCasee());

//Sobra una "e" en toLowerCase()

let edad = 18;
if (edad = 18) {
  console.log("Tienes 18 años");
}

//estamos dando el valor 18 a la variable edad dentro del if, no comparandolo con "=="

let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++); {
  console.log(numeros[i]);
}

//Sobra el punto y coma despues del for

let palabra = "javascript";
for (let i = 0; i <= palabra.length; i++) {
  console.log(palabra[i]);
}

//Tendriamos que poner "i < palabra.length" para que recorra todos los caracteres y no salte al ultimo y nos ponga "undefined";