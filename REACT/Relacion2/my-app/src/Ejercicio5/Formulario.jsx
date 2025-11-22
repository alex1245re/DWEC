import { useState } from "react";
import Userdata from "./Userdata";

function Formulario(){

    const [nombre,setNombre] = useState("");
    const [email,setEmail] = useState("");
    const [datosNombre,setDatosNombre] = useState("");
    const [datosEmail,setDatosEmail] = useState("");

    const noRecargar = (e) => {
    e.preventDefault(); // Evita que recargue la página
    console.log("Formulario enviado sin recargar");
    setDatosNombre(nombre);
    setDatosEmail(email);
  };

    return(
        <>
        <form onSubmit={noRecargar}>

            <label>Nombre:</label>
            <input type="text" value={nombre} onChange={(e) =>{ setNombre(e.target.value) }}/>
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) =>{ setEmail(e.target.value) }}/>
            <button type="submit">ENVIAR</button>
        </form>
        <Userdata nombre={datosNombre} email={datosEmail} />
        </>
    )

}

export default Formulario