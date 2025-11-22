window.onload = () =>{;
    const circulo = document.getElementById("circulo");

    setInterval(()=> circulo.style.backgroundColor = "green", 3000);
    setInterval(()=> circulo.style.backgroundColor = "", 3100);

    circulo.addEventListener("click",()=>circulo.style.backgroundColor == "green" ? console.log("¡Reflejos rápidos!") : console.log("Demasiado pronto"));
    
}       