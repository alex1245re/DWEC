window.onload = () =>{
    const boton = document.getElementById("boton");

    boton.addEventListener("mouseover",()=>boton.style.backgroundColor = generarColor());

    boton.addEventListener("mouseout",()=>boton.style.backgroundColor = "");

    boton.addEventListener("click",()=>boton.value = "¡Me hiciste clic!");
}

function generarColor(){
    let num = Math.floor(Math.random() * 4);
    let color = "";
    switch (num){
        case 0:
            color = "red";
            break;;
        case 1:
            color = "green";
            break;;
        case 2:
            color = "yellow";
            break;;
        case 3:
            color = "blue";
            break;;
        }
    
    return color;
}