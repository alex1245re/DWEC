//PARA HACER RELOJ O INTERVALOS
/*
setInterval //va saltando cada x tiempo //cda x segundos
setTimeout //como una alarma
*/
var segundos = 0;
var miDiv = document.getElementById("reloj"); //IMPORTANTE PARA LLAMAR AL ID DEL DIV DE HTML
function intervalo() {
  let horaActual = new Date();
  miDiv.innerHTML =
    horaActual.getHours() +
    ":" +
    horaActual.getMinutes() +
    ":" +
    horaActual.getSeconds();
}
intervalo();
setInterval(intervalo, 1000); //el mil son milisegundos, mil milisegundos=1 segundo