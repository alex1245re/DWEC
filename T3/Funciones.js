/**
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 */

function isOdd(x){
    let resultado = true;

    if(x % 2 == 0)
        resultado = false;

    return resultado;
}

console.log(isOdd(3));

/**
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 * 
 * @param {number} x - El número a evaluar si se encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(2, -4, 10) // returns true
 */

function inRange(x,min,max){
    let resultado = false;

    if(x >= min && x <= max)
        resultado = true;

    return resultado;
}

console.log(inRange(0,-1,5));

/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */

let numeros = [3, 8, 20, 10, 1];

function getBiggestNumber(numeros){
    let maximo = 0;
    for(let i=0;i<=numeros.length;i++){
        if (numeros[i] > maximo)
            maximo = numeros[i];
    }

    return maximo;
}

console.log(getBiggestNumber(numeros));

/**
 * @name getPercentage
 * @description Devuelve el porcentaje correspondiente de un número
 * 
 * @param {number} number - Número a obtener el porcentage
 * @param {number} percentage - Porcentaje a obtener
 * @returns {Number}
 *
 * @example
 *  getPercentage(200, 10) // returns 20
 */

function getPercentage(num1,num2){
    return (num1 * num2) / 100;
}

console.log(getPercentage(200,20));

/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */

let colores = ["red", "blue", "green"]; 

function getRandomColorSequence(colores,longitud){

    for(let i=0;i<longitud;i++){
        let posicion = Math.floor(Math.random() * (colores.length - 0) + 0);
        colores[i] = colores[posicion];
    }
    return colores;
}

console.log(getRandomColorSequence(colores,10));

/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */

function getRockPaperScissor(){
    let resultado = "";
    let posibilidad = Math.floor(Math.random() * (3 - 0) + 0);

    switch (posibilidad){
        case 0:
            resultado = "piedra";
            break;
        case 1:
            resultado = "papel";
            break;
        case 2:
            resultado = "tijeras";
            break;
    }

    return resultado;

}

console.log(getRockPaperScissor());

/**
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */

function getRockPaperScissorRandomSequence(longitud){
    let cadena = [];
    for(let i =0;i<=longitud-1;i++){
        let resultado = "";
        let posibilidad = Math.floor(Math.random() * (3 - 0) + 0);

        switch (posibilidad){
            case 0:
                resultado = "piedra";
                break;
            case 1:
                resultado = "papel";
                break;
            case 2:
                resultado = "tijeras";
                break;

        }

        cadena[i] = resultado;
    }

    return cadena;
}

console.log(getRockPaperScissorRandomSequence(5));

/**
 * @name filterNumbersGreaterThan
 * @description Filtra los números de un array que sean mayor a cierto número x dejando solo los que sean menores a este
 *
 * @param {number[]} numbers - Array de números a filtrar
 * @param {number} filter - Número a partir del cuál filtrar los demás números
 * @returns {Number[]} - Array de números filtrados menores a {filter}
 *
 * @example
 *  filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
 */

function filterNumbersGreaterThan(array,filtro){
    for(let i=0;i<array.length;i++){
        if(array[i] >= filtro){
            array.splice(i,1);
            i--;
        }

    }
    return array;
}

console.log(filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7));

/**
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 */

function getFactorial(num){
    if (num === 0 || num === 1) {
        return 1;
    }
        return  num * getFactorial(num - 1);

}


console.log(getFactorial(5));

/**
 * @name areArraysEqual
 * @description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
 *
 * @param {[]} a 
 * @param {[]} b 
 * @returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
 *
 * @example
 *  areArraysEqual([1, 4], [1, 4]) // returns true
 */

function areArraysEqual(a,b){
    let resultado = true;
    for(let i=0;i<a.length;i++){
        if(a[i]!=b[i])
            resultado = false;
    }

    return resultado;
}

console.log(areArraysEqual([1,5], [1, 4]));

/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */

texto = "I'm a hacker now";

function toHackerSpeak(texto) {
  return texto.toLowerCase()
    .replaceAll("a","4")
    .replaceAll("e","3")
    .replaceAll("i","1")
    .replaceAll("o","0")
    .replaceAll("s","5");
}

console.log(toHackerSpeak(texto));

/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión 
 * @returns {String} - La extensión del archivo
 * 
 * @example
 *  getFileExtension("imagen.jpg") // returns "jpg"
 */

function getFileExtension(archivo){
    extension = archivo.split(".");
    
    return extension[1];
}

console.log(getFileExtension("imagen.jpg"));

/**
 * @name flatArray
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los ítems 
 *
 * @param {[][]} arr - Array 2D a "aplanar" 
 * @returns {[]} - El array "aplanado"
 * 
 * @example
 *  flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 4, 3, 10, 2, 5]
 */

function flatArray(dosD){
    return dosD.flat();
}

console.log(flatArray([[1, 5, 4], [3, 10], [2, 5]]))

/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array 
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 * 
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */

function removeDuplicates(array) {
  let resultado = [];
  
  for (let elementos of array) {
    if (resultado.indexOf(elementos) == -1)
        resultado.push(elementos);
  }
  
  return resultado;
}

console.log(removeDuplicates([4, 5, 10, 4, 10, 2]));

/**
 * @name countLetter
 * @description Devuelve la cantidad de veces que una letra aparece en un string 
 *
 * @param {string} letter - Letra a contar
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter}
 * @returns {Number} - Número de veces que aparece {letter} en {text}
 * 
 * @example
 *  countLetter("a", "javascript") // returns 2
 */

function countLetter(letra,texto){
    let cont=0;
    for(let i=0;i<texto.length;i++){
        if(texto[i].includes(letra)){
            cont++;
        }
    }

    return cont;
}

console.log(countLetter("a","javascript"));

/**
 * @name canPlay
 * @description Devuelve si dada una mano de Uno y una carta en la mesa, puede jugar o tiene que retirar del mazo. Las cartas
 * tienen uno de 4 colores posibles (red, blue, green or yellow) y un número del 1 al 9. Una carta se escribe como un string
 * con color y número. Por ejemplo: "yellow 3", "red 6". Se puede jugar si la carta en la mano coincide en color o en número
 * con la carta en la mesa
 *
 * @param {string[]} hand - Array de cartas que tiene en la mano 
 * @param {string} face - Carta que está en la mesa
 * @returns {Boolean} - Devuelve true si puede jugar alguna carta, o false si tiene que retirar del mazo
 * 
 * @example
 *   canPlay(["yellow 3", "yellow 5", "red 8"], "red 2") // returns true
 *   canPlay(["yellow 3", "yellow 5", "red 8"], "blue 5") // returns true
 *   canPlay(["yellow 3", "blue 5", "red 8", "red 9"], "green 4") // returns false
 *   canPlay(["yellow 3", "red 8"], "green 2") // returns false
 */

function canPlay(array,carta){
    let resultado = false;
    let colores = [];
    let numeros = [];
    let laMia = carta.split(" ");
    let completo;


    for(let i=0;i<array.length;i++){
        completo = array[i].split(" ");
        colores.push(completo[0]); 
        numeros.push(completo[1]);
    }

    for(let i=0;i<array.length && resultado == false;i++){
        if(laMia[0] == colores[i]|| laMia[1] == numeros[i]){
            resultado = true;
        }
    }

    return resultado;
}

console.log(canPlay(["yellow 3", "red 8"], "green 4"));

/**
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, devuelve el string sin las palabras removidas
 *
 * @param {string} str - Texto a recortar 
 * @param {string[]} words - Palabras a remover
 * @returns {string} - Texto resultante con las palabras removidas
 * 
 * @example
 *   removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
 */

function removeWords(texto,palabras){
    let cadena = texto.split(" ");
    let nuevaFrase ="";

    for (let i=0; i<cadena.length;i++) {
        if (!palabras.includes(cadena[i])) {
            nuevaFrase += cadena[i] + " ";
        }
    }
    return nuevaFrase;
}

console.log(removeWords("This is a really bad test", ["really", "bad", "test"]));

/**
 * @name getRange
 * @description Dado dos números, devuelve un array con los números enteros sucesivos entre ellos, puede incluir los números 
 * iniciales o no
 *
 * @param {number} a 
 * @param {number} b
 * @param {boolean} [inclusive=true] inclusive // Parámetro opcional, valor por defecto true
 * @returns {number[]} - Array de números entre a y b, incluyendo a y b
 * 
 * @example
 *   getRange(5, 10) // returns [5, 6, 7, 8, 9 ,10]
 *   getRange(3, -2) // returns [3, 2, 1, 0, -1, -2]
 *   getRange(-5, -10, false) // returns [-6, -7, -8, -9]
 */

function getRange(a,b,inclusive=true){
    let numeros = [];
    if(inclusive==true){
        for(let i=Math.min(a,b);i<=Math.max(a,b);i++){
        numeros.push(i);
        }
    }
    else{
        for(let i=(Math.min(a,b)+1);i<Math.max(a,b);i++){
        numeros.push(i);
        }
    }
    return numeros;
}

 console.log(getRange(-5,-10,false));