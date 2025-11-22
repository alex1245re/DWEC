//1...5
let frutas = ["manzana","pera","albaricoque","platano","nispora"];

for(elementos of frutas)
    console.log(elementos);

let kfc = ["hamburguesa","pizza"];

comida = [...frutas, ...kfc];

for(elementos of comida)
    console.log(elementos);

//6
numeros = [1,2,3,4,5,6,7,8,9,10];
numeros = numeros.map((num)=>num*2);

for(elementos of numeros)
    console.log(elementos);

//7
numeros = numeros.filter((num)=>num%2==0);

for(elementos of numeros)
    console.log(elementos);

//8
let valorInicial=0;
let total = numeros.reduce((acumulador,num)=>acumulador + num + valorInicial);

console.log(total);

//9
let nombres = ["alejandro","juan","roberto","francisco","aaaa"];

console.log(nombres.sort());
console.log(nombres.reverse());

//10
nombres = nombres.join(",");
console.log(nombres);

//11
nombres = nombres.split(",");
console.log(nombres);

//12