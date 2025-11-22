window.onload = ()=>{
    iniciaCapturaEventos();
}

function iniciaCapturaEventos(){
    const midiv1 = document.getElementById("div1");
    const midiv2 = document.getElementById("div2");

    //Defino eventos a este div
    midiv2.addEventListener("click", (e)=> {midiv2.style.backgroundColor = "green"});
    document.addEventListener("mousemove", (e)=>{e.clientX>500 ? 
        e.target.style.backgroundColor = "pink" :
        e.target.style.backgroundColor = "yellow";
    }); 
    midiv1.addEventListener("mouseover",cambiaColorEntrada);
    midiv1.addEventListener("mouseout",cambiaColorSalida);
}

function cambiaColorEntrada(event){
    if(event.altKey)
        event.target.style.backgroundColor = "red";
    else
        event.target.style.backgroundColor = "blue";
}   

function cambiaColorSalida(event){
    event.target.style.backgroundColor = "white";
}   
