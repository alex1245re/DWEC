import { useState } from "react"

function Userdata({nombre,email}){

    return(
        <>
            <h2>USUARIO REGISTADO</h2>
            <h3>Nombre: {nombre}</h3>
            <h3>Email: {email}</h3>
        </>
    )
}

export default Userdata