//1
fecha = new Date();

//2
fecha = new Date("2005/06/12");

//3
fecha.getFullYear();
fecha.getMonth();
fecha.getDate();
fecha.getDay();
fecha.getHours();
fecha.getMinutes();
fecha.getSeconds();

//4
let nacimiento = "Fecha: " + fecha.toDateString() + " Hora:" + fecha.toTimeString();
console.log(nacimiento);

//5
function nuevaFecha(fecha,numDias){
    fecha.setDate(numDias);
}

nuevaFecha(fecha,35);

//6
let finAño = new Date("2025/12/31");

let meses = fecha.getMonth() - finAño.getMonth();
let dias = fecha.getDate() - finAño.getDate();

console.log("Para el 31 de diciembre quedan " + meses + " meses y " + dias + " dias");

//7

function compararFechas(f1,f2){ // pasamos la fecha completa a milisegundos y comparamos

    let fecha1 = new Date(f1);
    let fecha2 = new Date(f2);

    if (fecha1.getTime() < fecha2.getTime())
        console.log(fecha1  + " va antes que el " + fecha2);
    else if (fecha1.getTime() > fecha2.getTime())
        console.log(fecha2  + " va antes que el " + fecha1);
    else
        console.log("Son la misma fecha");

}
compararFechas("2025-09-24", "2025-09-23");

function diaSemana(año,mes){

}

//8
function primerDiaDelMes(anio, mes) {
  let fecha = new Date(anio, mes - 1, 1);

  // (0 = domingo, 6 = sábado), con esto asignamos cada numero que nos devuelve a un dia de la semana
  let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  return diasSemana[fecha.getDay()];
}

console.log(primerDiaDelMes(2025, 9));  
console.log(primerDiaDelMes(2024, 2)); 

//9
console.log(fecha.toISOString());

//10
console.log(""+ fecha.getFullYear() + "/" + fecha.getMonth() + "/" + fecha.getDate());
    console.log("" + fecha.getUTCFullYear() +"/"+ fecha.getUTCMonth() +"/"+ fecha.getUTCDate());

//11
function formatearFecha(fecha) {
  let dia = String(fecha.getDate());
  let mes = String(fecha.getMonth() + 1); // Los meses van de 0-11
  let año = fecha.getFullYear();

  let hora = String(fecha.getHours());
  let min = String(fecha.getMinutes());
  let seg = String(fecha.getSeconds());

  return `${dia}/${mes}/${año} ${hora}:${min}:${seg}`;
}

console.log(formatearFecha(new Date()));


//12
console.log("Español (España):", new Intl.DateTimeFormat("es-ES").format(fecha));
console.log("Inglés (EE.UU.):", new Intl.DateTimeFormat("en-US").format(fecha));
console.log("Japonés:", new Intl.DateTimeFormat("ja-JP").format(fecha));

//13

fecha= new Date();
fin = new Date("2025/12/31");

let resto = fin - fecha;

let meses = fin.getMonth() - fecha.getMonth();
let dias = fin.getDate() - fecha.getDate();
let horas = fecha.getHours() - fin.getHours();
let min = fecha.getMinutes() - fin.getMinutes();


console.log(`Faltan ${meses} meses, ${dias} días, ${horas} horas, ${min} minutos`);

//14
function calcularFechaNacimiento(fechaNac){
  let fechaActual = new Date();

  let diferenciaMs = fechaActual.getTime() - fechaNac.getTime(); // en milisegundos
  
  let unSegundo = 1000;
  let unMinuto = 60 * unSegundo;
  let unaHora = 60 * unMinuto;
  let unDia = 24 * unaHora;
  let unMes = 30.44 * unDia; // promedio
  let unAno = 365.25 * unDia; // promedio

  let anos = Math.floor(diferenciaMs / unAno);
  let resto = diferenciaMs % unAno;

  let meses = Math.floor(resto / unMes);
  resto = resto % unMes;

  let dias = Math.floor(resto / unDia);

  console.log(`${anos} años, ${meses} meses y ${dias} días (aproximado)`);

}

let fechaNac = new Date("2005/06/12");
calcularFechaNacimiento(fechaNac);

//15
function generarFechasMes(año, mes) {
  let fechas = [];
  let primerDia = new Date(año, mes, 1);
  let ultimoDia = new Date(año, mes + 1, 0); // el 0 del mes siguiente = último día del mes actual

  for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
    fechas.push(new Date(año, mes, dia));
  }

  return fechas;
}

let fechasSeptiembre = generarFechasMes(2025, 8);
console.log(fechasSeptiembre);

//16
function proximoViernes13() {
  let fecha = new Date();
  let anio = fecha.getFullYear();
  let mes = fecha.getMonth();

  while (true) {
    // Creamos el día 13 del mes actual
    const dia13 = new Date(anio, mes, 13);

    // Comprobamos si es viernes (5 = viernes)
    if (dia13.getDay() === 5 && dia13 > fecha) {
      return dia13;
    }

    // Pasamos al siguiente mes
    mes++;
    if (mes > 11) {
      mes = 0;
      anio++;
    }
  }
}

// Ejemplo de uso:
const siguienteViernes13 = proximoViernes13();
console.log(`El próximo viernes 13 será el: ${siguienteViernes13}`);

function encuentraViernes13(){
  let resultado = new Date();
  let encontrado = false;

  while(!encontrado){
    if (resultado-getDay() == 5 && resultado.getDate() == 13)
      encontrado = true;
    else
      resultado.setDate(resultado.getDate()+1);
  }

  return resultado;
}