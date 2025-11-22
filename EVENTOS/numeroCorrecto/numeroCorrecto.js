window.onload = () =>{
    let num = generarNum();
    document.body.innerHTML += `<h2>Haz click en ${num}<h2>`;

    const botones = document.getElementById("botones");

    botones.addEventListener("click",(e)=>{
            if (e.target.tagName === "TD") {
            let valor = parseInt(e.target.textContent);

            if (valor === num) 
                e.target.style.backgroundColor = "green";
            else 
                e.target.style.backgroundColor = "red";
            }
        });
}

function generarNum(){
    return num = Math.floor(Math.random() * (10 - 1) + 1);
}