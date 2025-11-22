window.onload = () =>{
    const colores = document.getElementById("colores");
    let color = generarColor();
    let vidas = 3;
    console.log("DALE AL" + color);

    colores.addEventListener("click",(e)=>{
        if(e.target.id == color && vidas > 0){
            console.log("COLOR CORRECTO");
            color = generarColor();
            console.log("AHORA AL " + color);
        }
        else{
            console.log("ERROR");
            vidas --;
            if(vidas < 0)
                console.log("TE QUEDASTE SIN VIDAS");
            else
                console.log(`Te quedan ${vidas} vidas`);
        }
         
    });
}

function generarColor(){
    let num = Math.floor(Math.random() * 4);
    let color = "";
    switch (num){
        case 0:
            color = "rojo";
            break;;
        case 1:
            color = "verde";
            break;;
        case 2:
            color = "amarillo";
            break;;
        case 3:
            color = "azul";
            break;;
        }
    
    return color;
}
