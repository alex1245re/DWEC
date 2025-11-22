//RELACION DE EJERCICIOS DE BUCLES
var i;
for(i = 1;i<=10;i++){
    console.log(i);
}
var sumaTotal;
for(i = 1;i<=5;i++){
     sumaTotal += i;
}
console.log(sumaTotal);

var num = 7;
for(i = 1;i<=10;i++){
    console.log(num * i);
}

i = 10;
while(i > 0){
    console.log(i);
    i--;
}

i = 1;
var x = 0;
while(i <= 20){
    x++;
    i = i + x;
    console.log(i);
    i++;
}


var contrasena = "";

do{
    contrasena = prompt("Introduzca contraseña");
}while(contrasena != "1234")

console.log("Contraseña Correcta");

i = 1;
do{
    console.log(i);
    i++;
}while(i<=5)


for(i = 1;i<=6;i++){
     document.write("<h" + i + ">Cabecera h" + i + "</h" + i + ">");
}




//4.11 y 4.12
var columnas = Number(prompt("Numero de columnas:"));
var alto = Number(prompt("Altura:"));
var ancho = Number(prompt("Anchura:"));

document.write('<table border="1" cellspacing="2" bgcolor="black">');
document.write('<tr bgcolor="white" height="' + alto + '">');


for(i = 0; i < columnas; i++){
    if(i % 2 != 0) // Si quitasemos el if seria el ejercicio 4.11, con el estamos haciendo que las columnas sean blancas y negras(4.12)
        document.write('<td width="' + ancho + '" bgcolor="white" >&nbsp;</td>');
    else
     document.write('<td width="' + ancho + '" bgcolor="black" >&nbsp;</td>');
}

document.write('</tr>');
document.write('</table>');



//4.13 y 4.14, lo mismo pero con while
columnas = Number(prompt("Numero de columnas:"));
alto = Number(prompt("Altura:"));
ancho = Number(prompt("Anchura:"));

document.write('<table border="1" cellspacing="2" bgcolor="black">');
document.write('<tr bgcolor="white" height="' + alto + '">');

i=0;
while(i < columnas){
    if(i % 2 != 0) // Sin la condicion no pintariamos las celdas blancas y negras(4.13)
        document.write('<td width="' + ancho + '" bgcolor="white" >&nbsp;</td>');
    else
     document.write('<td width="' + ancho + '" bgcolor="black" >&nbsp;</td>');
    i++;
}

document.write('</tr>');
document.write('</table>');


//4.15
var num_adivinar = Number(prompt("Jugador 1, Introduzca un numero:"));
var num = Number(prompt("Jugador 2, pruebe suerte:"));

while(num_adivinar != num){
    if(num_adivinar > num){
        alert("ERROR, mi numero es mayor");
        num = Number(prompt("Jugador 2, vuelva a probar:"));
    }
    else{
        alert("ERROR, mi numero es menor");
        num = Number(prompt("Jugador 2, vuelva a probar:"));
    }
}

alert("Correcto, has acertado");

//4.16, lo mismo pero con do while
num_adivinar = Number(prompt("Jugador 1, Introduzca un numero:"));
num = Number(prompt("Jugador 2, pruebe suerte:"));

do{
    if(num_adivinar > num){
        alert("ERROR, mi numero es mayor");
        num = Number(prompt("Jugador 2, vuelva a probar:"));
    }
    else if (num_adivinar < num){
        alert("ERROR, mi numero es menor");
        num = Number(prompt("Jugador 2, vuelva a probar:"));
    }
    else
        alert("Correcto, has acertado");
    }while(num_adivinar != num)


//4.17

for (i=0;i<=10;i++) {
    document.write("<h3>Tabla del " + i + "</h3>");
    for (var j=0;j<=10;j++) {
        document.write("<p>" + j + " x " + i + " = " + i*j);
    }
}

//4.18

columnas = 2;
var filas = 2;
alto = 50;
ancho = 50;
 
document.write("<table border='0' cellspacing='2' bgcolor='black'>");

    for(j=0;j<filas;j++) {
        document.write("<tr bgcolor='white' height='" + alto + "'>");
        for (i=0;i<columnas;i++) {
                document.write("<td width='" + ancho + "'>&nbsp;</td>");
            }
            document.write("</tr>");
        }
        document.write("</table>");


var ajedrez = Number(prompt("Numero de pixeles para el ajedrez:"));

for(i=0;i<=8;i++){
     document.write('<tr height ="' + ajedrez + '">');
    for(j=0;j<=8;j++){
         document.write('<td width="' + ajedrez + '">&nbsp;</td>');
    }
}