//Variables Globales
var contadorPaginas = 1;
var peticionCurso = false;
var tipo = "";
pelisFav = [];
var detalle;
var contenedor;
var buscadorPelis;
var buscadorAño;
var btnAcceso;
var buscador;
var landing;
var switcher;
var nombrePeli = "";
var añoPeli = "";
var botonFav;
var valorInput = "";
var contId = 0;
var noMasPelis = false;
//Funciones
function maquetarPeliculas(contenedor,peliculas){
  if (!peliculas) return;
  contId++;
  for(let carteleras of peliculas){
    let div = document.createElement("div");
    let foto = document.createElement("img");
    let texto = document.createElement("h3");
    let botonFav = document.createElement("button");
    botonFav.dataset.idPeli = carteleras.imdbID; 
    botonFav.textContent = "☆";
    
    if(pelisFav.includes(carteleras.imdbID)){
      botonFav.style.backgroundColor = "red";
    }

  
    foto.addEventListener("click",()=>{

    lanzaPeticionDetalle(carteleras.imdbID);
    
    })

    if (carteleras.Poster !== "N/A") {
      foto.src = carteleras.Poster;
    } else {
      foto.src = "https://static.vecteezy.com/system/resources/previews/004/726/030/non_2x/warning-upload-error-icon-with-cloud-vector.jpg";
      foto.classList.add('imagen-error');
    }

    foto.onerror = ()=>{
      foto.src = "https://static.vecteezy.com/system/resources/previews/004/726/030/non_2x/warning-upload-error-icon-with-cloud-vector.jpg";
      foto.classList.add('imagen-error');
    };

    texto.textContent = carteleras.Title;
    div.appendChild(foto);
    div.appendChild(texto);
    div.appendChild(botonFav);
    contenedor.appendChild(div);
  }

}

function lanzaPeticionDetalle(id){
  fetch(`http://www.omdbapi.com/?i=${id}&apikey=66157bb2`).then(response => response.json())
  .then(data => {
      let foto = document.createElement("img");
      foto.classList.add('fotoDetalle');
      foto.src = data.Poster;
      let codigo = document.createElement("p");
      codigo.innerHTML = "<strong>Codigo: </strong> "+data.imdbID;
      let director = document.createElement("p");
      director.innerHTML =  "<strong>Director: </strong> "+data.Director;
      let actores = document.createElement("p");
      actores.innerHTML =  "<strong>Reparto: </strong> "+data.Actors;
      let sinopsis = document.createElement("p");
      sinopsis.innerHTML = "<strong>Sinopsis: </strong> "+data.Plot;
      let año = document.createElement("p");
      año.innerHTML = "<strong>Año: </strong> "+data.Year;
      let rating = document.createElement("p");

      for(let ratingData of data.Ratings){
        rating.innerHTML += "<br><strong>Rating: </strong> "+ratingData.Source+" - "+ratingData.Value;
      }


      let cuadro = document.createElement("div");
      cuadro.append(foto,codigo, director, actores, sinopsis, año,rating);
      detalle.innerHTML = "";
      detalle.appendChild(cuadro);

      abrirModal();
    });
}

function lanzaPeticion(url){

  if(!peticionCurso){
    peticionCurso=true;
    fetch(url).then(response => response.json())
    .then(data => {
        maquetarPeliculas(contenedor,data.Search);
        peticionCurso=false;
      });
  }
}

function abrirModal() {
  document.getElementById('modal-container').classList.remove('modal-oculto');
}

function cerrarModal() {
    document.getElementById('modal-container').classList.add('modal-oculto');
    document.getElementById("contenedor").classList.remove('oculto');
    document.getElementById("detalle").innerHTML = "";
}

function pedidaAPI(tipo){
  contenedor.innerHTML = "";
  contadorPaginas = 1;
  nombrePeli = buscadorPelis.value;
  añoPeli = buscadorAño.value;

  lanzaPeticion(`https://www.omdbapi.com/?s=${nombrePeli}&apikey=66157bb2&page=${contadorPaginas}&y=${añoPeli}&type=${tipo}`);
} 

//Main
window.onload = () =>{
  //Decalaracion
  detalle = document.getElementById("detalle");
  contenedor = document.getElementById("contenedor");
  buscadorPelis = document.getElementById("buscadorPelis");
  buscadorAño = document.getElementById("Año");
  btnAcceso = document.getElementById("Acceso");
  buscador = document.getElementById("global");
  landing = document.getElementById("landing");
  switcher = document.querySelector(".switch input");
  pelisFav = JSON.parse(localStorage.getItem("pelisFav",JSON.stringify(pelisFav))); // La parte "|| []" es el truco. Significa "O esto, O un array vacío"
  botonFav = document.getElementById("botonFav");

  if (!pelisFav) {
        pelisFav = [];
  }

  //Eventos
  switcher.addEventListener("change",()=>{
    if(switcher.checked){
      tipo = "movie";
      buscadorPelis.placeholder = "Movie";
      pedidaAPI(tipo);
      noMasPelis = false;
    }else{
      tipo = "series";
      buscadorPelis.placeholder = "Series";
      pedidaAPI(tipo);
      noMasPelis = false;
    }
  });

  btnAcceso.addEventListener("click",()=>{
      landing.style.display = "none";
      buscador.style.display = "flex";
  });

  buscadorPelis.addEventListener("input",()=>{
    valorInput = buscadorPelis.value;
        if (valorInput.length >= 3) {
          pedidaAPI(tipo);
          noMasPelis = false;
        }

        if (valorInput.length == 0) {
          contenedor.innerHTML = "";
          contadorPaginas = 1;
        }
  });
  
  document.body.addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
      pedidaAPI(tipo);
      noMasPelis = false;
    }
  });

  contenedor.addEventListener("click", (e) => {
    const boton = e.target.closest("button[data-id-peli]");

    if (!boton) return;
    
    const id = boton.dataset.idPeli;

    if (pelisFav.includes(id)) {
        const index = pelisFav.indexOf(id);
        if (index > -1) {
            pelisFav.splice(index, 1); // Lo borramos del array
        }
        
        boton.style.backgroundColor = ""; 
        console.log(`Película ${id} eliminada de favoritos`);

    } else {
        pelisFav.push(id);
        boton.style.backgroundColor = "red";
        console.log(`Película ${id} agregada a favoritos`);
    }

    localStorage.setItem("pelisFav", JSON.stringify(pelisFav));
  });

  botonFav.addEventListener("click",()=>{
    let maquetarFav = [];
    cont=0;
    contenedor.innerHTML = "";

    const pelisFav = JSON.parse(localStorage.getItem("pelisFav")) || [];

    if (pelisFav.length === 0) {
        contenedor.innerHTML = "<h3>No tienes películas favoritas guardadas</h3>";
        return;
    }

    for(let idPeli of pelisFav){
    fetch(`http://www.omdbapi.com/?i=${idPeli}&apikey=66157bb2`).then(response => response.json())
    .then(data => {
        cont++;
        maquetarFav.push(data);

        if(cont == pelisFav.length){
          maquetarPeliculas(contenedor,maquetarFav);
          noMasPelis = true;
        }
      });
    }
  });
}

//Scroll Infinito
window.onscroll =()=>{

  if(noMasPelis) return;

  let cercaFin = (window.innerHeight + window.scrollY >= document.body.offsetHeight-500)

  if(cercaFin){
    lanzaPeticion(`https://www.omdbapi.com/?s=${nombrePeli}&apikey=66157bb2&page=${contadorPaginas}&y=${añoPeli}&type=${tipo}`);
    contadorPaginas++;
  }
}