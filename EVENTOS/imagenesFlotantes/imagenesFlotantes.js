window.onload = () =>{
    const divImagenes = document.getElementById("divImagenes");
    let img, difx, dify;
    let clickado = false;

    divImagenes.addEventListener("click",(e)=>{
        if(!clickado){
            img = e.target;
            clickado = true;
            difx = e.clientX - img.offsetLeft;
            dify = e.clientY - img.offsetTop;
        }
        else
            clickado = false;

    })

    document.addEventListener("mouseover",(e)=>{
        if(clickado){   
            console.log("Has echo click en la imagen y su posicion es: ",e.clientX,e.clientY);  
            img.style.left = (e.clientX-difx) + "px";
            img.style.top = (e.clientY-dify) + "px";
        }
    })
}