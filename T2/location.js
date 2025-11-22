//1, 2, 3 y 4
/*function success(posicion){
    console.log(posicion.coords.latitude, posicion.coords.longitude);

    var map = L.map('map').setView([posicion.coords.latitude, posicion.coords.longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

    var marker = L.marker([posicion.coords.latitude, posicion.coords.longitude]).addTo(map);

    var circle = L.circle([posicion.coords.latitude, posicion.coords.longitude], {
    color: 'pink',
    fillColor: 'rgba(255, 1, 196, 1)',
    fillOpacity: 0.5,
    radius: 20
}).addTo(map);
}

function error(posicion){
  console.log("La geolocalización no está soportada en este navegador.")
}

if (navigator.geolocation){
    navigator.geolocation.watchPosition(success,error);
}
else{
    console.log("No se soporta la geolocalizacion");
}
//5
function interactive(posicion){

    var map = L.map('map').setView([posicion.coords.latitude, posicion.coords.longitude], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

     var marker = L.marker([posicion.coords.latitude, posicion.coords.longitude]).addTo(map);

    let lat = posicion.coords.latitude;
    let long = posicion.coords.longitude;
    marker.setLangLng([lat,long]);
    map.setView([lat,long],15);

}

navigator.geolocation.watchPosition(interactive);

//6
console.log("Valor: ", lat.coords.accuracy);
*/
//7
/*
function harvesine(lat1,lon1,lat2,lon2){
    const R = 6371;
   const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
}

var puntoFijo = {lat: 40.4168, lng: -3.7038};
var miUbi = {lat: 37.19236756776717, lng:-3.616395584390277};

var dist = harvesine(miUbi.lat, miUbi.lng, puntoFijo.lat, puntoFijo.lng);


console.log("distancia del punto a al b:", dist);

//8
function polilinea(pos){
var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map);


let ruta = [];
let polyline = L.polyline(ruta).addTo(map);

let latlng = [pos.coords.latitude,pos.coords.longitude];
ruta.push(latlng);
polyline.setLatLngs(ruta);
map.setView(latlng, 15);

ruta.push([37.19604256051307, -3.62115918741394]);
polyline.setLatLngs(ruta);

ruta.push([37.191752202661036, -3.6212235604277736]);
polyline.setLatLngs(ruta);

ruta.push(latlng);
polyline.setLatLngs(ruta);
}

navigator.geolocation.watchPosition(polilinea);*/

//WATCH POSITION
/*
let ruta = [];
var map, marker, polyline;

function verUbi(pos) {

    let punto = [pos.coords.latitude, pos.coords.longitude];
    ruta.push(punto);

    if (ruta.length == 1) {
        map = L.map('map').setView(punto, 20);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        marker = L.marker(punto).addTo(map);
        polyline = L.polyline(ruta).addTo(map);
    }
    else {
        map.setView(punto, 20);
        marker.setLatLng(punto);
        polyline.setLatLngs(ruta);
    }
}

navigator.geolocation.watchPosition(verUbi);*/
/*
//9 CIRCULO
let ruta = [];
var map, marker, circulo, miPos;
function circulo(pos){

    let miPos = [pos.coords.latitude, pos.coords.longitude];
    ruta.push(miPos);

    if (ruta.length == 1){
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 19);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom:19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        marker = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map);

        circulo = L.circle([pos.coords.latitude, pos.coords.longitude], {
            color: 'pink',
            fillColor: 'rgba(255, 1, 196, 1)',
            fillOpacity: 0.5,
            radius: 10
        }).addTo(map);
    }
    else{
        const distancia = circulo.getLatLng().distanceTo(miPos);

        console.log("Distancia al centro:",distancia);

        (distancia > circulo.getRadius()) ? console.log("Te saliste del circulo") : console.log("Sigues dentro");
    }
       
}

navigator.geolocation.watchPosition(circulo);
*/
//10
let ruta = [];
var map, marker,polyline,distanciaTotal=0;
let startTime = null;
function seguimiento(pos){

    let miPos = L.latLng(pos.coords.latitude, pos.coords.longitude);
    ruta.push(miPos);

    if (!startTime) startTime = Date.now();
    
    if (ruta.length == 1){
        map = L.map('map').setView(miPos, 19);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom:19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        marker = L.marker(miPos).addTo(map);

        polyline = L.polyline(ruta, {color: 'blue'}).addTo(map);
    }
    else{
        marker.setLatLng(miPos);

        polyline.setLatLngs(ruta);

        let tramo = ruta[ruta.length - 2].distanceTo(miPos); //cada posicion al recargar
        distanciaTotal += tramo;

        let ms = Date.now() - startTime; //tiempo total en milisegundos
        let seg = Math.floor(ms / 1000); //total a segundos
        let min = Math.floor(seg / 60); //total a minutos
        let resto = seg % 60; //el resto en segundos

        console.log(`Metros recorridos ${distanciaTotal.toFixed(2)}`);
        console.log(`Tiempo transcurrido: ${min} minutos y ${resto} segundos`);
    }
}

navigator.geolocation.watchPosition(seguimiento);