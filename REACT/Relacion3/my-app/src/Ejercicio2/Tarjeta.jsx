import { useState } from "react";

function Tarjeta({nombre,edad,isOnline,imagenUrl}){
    return(
        <>
            <img src={imagenUrl} style={{
          filter: isOnline ? "none" : "grayscale(100%)"
        }}/>
            <p>Nombre: {nombre}</p>
            <p>Edad: {edad}</p>

            {isOnline ? (<div style={{ backgroundColor: "green", width:"200px", height:"200px",borderRadius:"50px"}}></div>):
            <div style={{ backgroundColor: "red",width:"200px", height:"200px",borderRadius:"50px"}}></div>}
        </>
    )
}

export default Tarjeta