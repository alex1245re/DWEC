window.onload = ()=>{

}
function parpadeo(recorrer){
    const colores = document.getElementsByClassName("colores");
    let div;

    recorrer.forEach((mov, i) => {

        setTimeout(() =>{

            if(div) div.style.opacity = 1;
            div = colores[mov];
            div.style.opacity = 0.5;
        },i *1000);
    });

    setTimeout(() => div.style.opacity = 1,1000*recorrer.length);
}