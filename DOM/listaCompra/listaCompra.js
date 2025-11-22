window.onload = ()=>
{
    var ul = document.getElementById("lista");
    var opciones = document.getElementsByTagName("li");

    var mibtn = document.getElementById("btnGuardar");

    mibtn.addEventListener("click", ()=>{
        let contenidoDelInput = document.getElementById("input").value;

        let nuevoLI = document.createElement("li");
        nuevoLI.innerHTML = contenidoDelInput;
        if(contenidoDelInput == "") return;


        ul.appendChild(nuevoLI);
        btnBorrar = document.createElement("button");
        btnBorrar.innerHTML = "🗑️";
        nuevoLI.appendChild(btnBorrar);

        document.getElementById("input").value = "";
    });

    document.addEventListener("click",(e)=>{
        if(e.target.tagName == "LI"){
            e.target.remove();
        }
    });
}
