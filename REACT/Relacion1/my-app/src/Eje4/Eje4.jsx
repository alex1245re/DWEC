import { useState } from 'react'

function Eje4(){
    const [cont,setCont] = useState(0);

    return(
        <>
            <p>El boton ha sido clickado: {cont} veces </p>
            <button onClick={()=> setCont(cont+1)}>CLICKAME</button>
        </>
    )
}

export default Eje4