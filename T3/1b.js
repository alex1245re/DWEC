//1
function sum(num1, num2){
    return num1 + num2
}

sum(40,2)
sum(42,0)
console.log("the answer to everything is", sum(42,0))

const sum = (num1, num2) => num1+num2;

//2
function stringLength(str){
    console.log(`the length of "${str}" is:`, str.length)
}

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

stringLength(longestCityNameInTheWorld)

const stringLength = (srt) => console.log(`the length of "${str}" is:`, str.length);

//3
function stringLength(str){
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}

stringLength("willynilly");

const stringLength = (srt) => {
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
};

//4
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

function showAlert(name){    
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}

showAlert("you ball of fluff");

const showAlert = (name) => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`);

//6

let nombre = "alex";
let edad = "edad";

console.log((nombre,edad) => `Hola soy ${nombre} y tengo ${edad} años`);

//7
const enteros = [0,1,2,3,4,5,6,7,8,9,10];

const sumaArray = (enteros) => enteros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

console.log(sumaArray(enteros));
console.log(sumaArray([5, 10, 15])); 

//8
let eye = "eye";

const fire = () => `bulls-${eye}`;

console.log(fire());


//9
const fibonacci = function(n) {
if (n < 3) return 1;
return fibonacci(n - 1) + fibonacci(n - 2);
}

const sucesionFibonacci = n => (n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));


const factor = (n) => {
    let resultado;
    if( n < 1)
        resultado = 1;
    else{
        let valor = n;
        for(let i =n-1;i>1;i--){
            valor = valor * i;
        }
        resultado = valor;
    }
    return resultado;
};