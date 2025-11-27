//Variables Globales
var contadorPaginas = 1;
var peticionCurso = false;
//Funciones
function maquetarPeliculas(contenedor,peliculas){
  if (!peliculas) return;

  for(let carteleras of peliculas){
    let div = document.createElement("div");
    let foto = document.createElement("img");
    let texto = document.createElement("h3");
  
    div.addEventListener("click",()=>{

     lanzaPeticionDetalle(carteleras.imdbID);
     contenedor.classList.add('oculto');
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
    contenedor.appendChild(div);
  }

}

function lanzaPeticionDetalle(id){
   fetch(`http://www.omdbapi.com/?i=${id}&apikey=66157bb2`).then(response => response.json())
  .then(data => {
      //maquetarPeliculas(contenedor,data.Search)
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

      let cuadro = document.createElement("div");
      cuadro.append(codigo, director, actores, sinopsis, año);
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

function pedidaAPI(){
  contenedor.innerHTML = "";
  contadorPaginas = 1;
  nombrePeli = buscadorPelis.value;
  añoPeli = buscadorAño.value;

  lanzaPeticion(`https://www.omdbapi.com/?s=${nombrePeli}&apikey=66157bb2&page=${contadorPaginas}&y=${añoPeli}`);
}

//Main
window.onload = () =>{
  //Decalaracion
  detalle = document.getElementById("detalle");
  contenedor = document.getElementById("contenedor");
  buscadorPelis = document.getElementById("buscadorPelis");
  buscadorAño = document.getElementById("Año");

  //Eventos
  buscadorPelis.addEventListener("input",()=>{
    valorInput = buscadorPelis.value;
        if (valorInput.length >= 3) {
           pedidaAPI();
        }
  });
  
  document.body.addEventListener("keydown",(e)=>{

    if(e.key == "Enter"){
      pedidaAPI();
    }
  })
  
}

//Scroll Infinito
window.onscroll =()=>{
  let cercaFin = (window.innerHeight + window.scrollY >= document.body.offsetHeight-500)

  if(cercaFin){
    lanzaPeticion(`https://www.omdbapi.com/?s=${nombrePeli}&apikey=66157bb2&page=${contadorPaginas}&y=${añoPeli}`);
    contadorPaginas++;
  }
}