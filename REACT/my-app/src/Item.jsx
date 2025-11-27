import { useState } from "react";

function Item({id,nombre,cantidad,onEliminar,onEditar}){

    const[edicion,setEdicion] = useState(false);
    const [texto,setTexto] = useState(nombre);
    
    const entraEdicion = ()=>{
        setEdicion(true);
    }

    const guardaCambios= ()=>{
        onEditar(id,texto);
        setEdicion(false);
    }

    return (
    <>
      {!edicion ? (
        <li>{nombre} {"-"} {cantidad}  <button onClick={entraEdicion}>Editar</button><button onClick={() => onEliminar(id)}>Eliminar</button></li>
      ) : (
        <li><input value={texto} onChange={(e) => setTexto(e.target.value)} /><button onClick={guardaCambios}>Guardar Cambios</button></li>
      )}
    </>
  );
}


export default Item