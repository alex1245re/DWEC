import { useState } from "react"

function Eje7(){

    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");

    const saludar = (e) => {
    alert(`¡Hola ${nombre} ${apellido}!`);
  };
    return(
        <>
        <form onSubmit={saludar}>
            <input type="text" name="nombre" placeholder="Nombre" onChange={(e)=>setNombre(e.target.value)}></input>
            <input type="text" name="apellido" placeholder="Apellido" onChange={(e)=>setApellido(e.target.value)}></input>
            <button type="submit">SALUDAME</button>
        </form>
        </>
    )
}

export default Eje7