window.onload= ()=>{
    //document.addEventListener("click",()=>alert("CLICKASTE"))

    document.addEventListener("mousemove",(e)=>console.log("Posicion del raton: " + e.clientX,e.clientY))

    const tiempoCarga = performance.now();
    console.log(`La página tardó ${tiempoCarga.toFixed(2)} ms en cargarse.`);

    //PINTAR CUADROS DE COLORES EJ 4 Y 5

    let tabla = document.getElementById("tabla");
    const boton = document.getElementById("boton");
    let tr,td;

    for(let i=0;i<100;i++){
        tr = document.createElement("tr");
        tr.addEventListener("mouseover",(e)=>{
            if (e.ctrlKey) {
                e.target.style.backgroundColor = "";
            } else if (e.shiftKey) {
                e.target.style.backgroundColor = "blue";
            } else {
                e.target.style.backgroundColor = "red";
            }
        });

        for(let j=0;j<100;j++){
            td = document.createElement("td");
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }

    boton.addEventListener("click",()=>{
        const celdas = tabla.getElementsByTagName("td");
        for (let celda of celdas) {
            celda.style.backgroundColor = "";
        }
        });
    
}
