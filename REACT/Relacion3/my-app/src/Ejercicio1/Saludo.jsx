import { useState } from "react";

function Saludo({nombre,emoji}){
    return(
        <>
        <p>Hola {nombre}{emoji}!</p>
        </>
    )
}

export default Saludo