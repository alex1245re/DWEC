import { useState } from "react";
import ListaCompra from "./ListaCompra";

function Pie({borraTodo}){
    return(
        <>
        <button onClick={borraTodo}>BORRAR LISTA</button>
        </>
    )
}
export default Pie