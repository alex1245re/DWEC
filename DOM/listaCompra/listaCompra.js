window.onload = ()=>{
    
    var lista = document.getElementById("lista");
    var mibtn = document.getElementById("btnGuardar");
    var input = document.getElementById("input");


    listaCompra = JSON.parse(localStorage.getItem("listaCompra"));

    if(listaCompra){
        for(alimento of listaCompra){
            creaVista(alimento);
        }
    }
    else
        listaCompra = [];


    mibtn.addEventListener("click", ()=>{
        
        if(document.getElementById("input").value.trim() == "") return

        listaCompra.push(document.getElementById("input").value);
        creaVista(listaCompra[listaCompra.length-1]);
        localStorage.setItem("listaCompra",JSON.stringify(listaCompra));
    });
}

function creaVista(elemento){
    
    let nuevoLI = document.createElement("li");
    nuevoLI.innerHTML = elemento;

    lista.appendChild(nuevoLI);
    btnBorrar = document.createElement("button");
    btnBorrar.innerHTML = "🗑️";
    nuevoLI.appendChild(btnBorrar);

    document.getElementById("input").value = "";

    btnBorrar.addEventListener("click",()=>{
        nuevoLI.remove();
        elementoBorrar = listaCompra.find((nuevoLI)=>nuevoLI);
        listaCompra = listaCompra.filter(elemento => elemento != elementoBorrar);
        localStorage.setItem("listaCompra",JSON.stringify(listaCompra));
    });
}
