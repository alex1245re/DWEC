import { useState } from "react"

function Sincronizador(){

    const [contenido,setContenido] = useState("");
    const [cantidad,setCantidad] = useState(0);

    return(
        <>
        <input type="text" value={contenido} onChange={(e) => {setContenido(e.target.value); setCantidad(e.target.value.length)}}></input>
        <p>{contenido}</p>
        <p>Caracteres: {cantidad}</p>
        <button onClick={() => {setContenido(""); setCantidad(0)}}>LIMPIAR TEXTO</button>
        </>
    )
}

export default Sincronizador