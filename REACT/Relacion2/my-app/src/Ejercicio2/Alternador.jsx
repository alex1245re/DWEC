import { useState } from "react"

function Alternador(){

    const [visible,setVisibilidad] = useState(true);
    const [boton,setBoton] = useState("Ocultar");

    const cambiaBoton = () =>{
        visible ? setBoton("Mostrar") : setBoton("Ocultar");
    }

    return(
        <>
        <button onClick={() => {
            setVisibilidad(visible => !visible);
            cambiaBoton();
            }}>{boton}</button>
            
        {visible ? (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Quo, natus temporibus. Aliquam eveniet sed, molestias 
          necessitatibus pariatur iste sunt delectus!
        </p>
      ) : <p>El texto esta oculto</p>}
        </>
    )
}

export default Alternador