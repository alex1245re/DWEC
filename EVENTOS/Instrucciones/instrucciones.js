window.onload = () =>{
    let tecla = generarTecla();
    document.body.innerHTML = (`<p> Presione la tecla ${tecla}</p>`);

    document.addEventListener("keydown",(e)=>{
        let resultado = "";
         if (e.key.toUpperCase() == tecla)
            resultado = "TECLA CORRECTA";

          document.body.innerHTML += (`<p>${resultado}</p>`);
    })
}

function generarTecla(){
    const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let num = Math.floor(Math.random() * 27);

    let letra = letras[num];

    return letra;
}e