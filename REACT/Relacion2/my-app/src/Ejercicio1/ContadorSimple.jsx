import { useState } from "react"

function ContadorSimple(){
    const [cont,setCont] = useState(0);

    function comprobarCero(){
        if(cont == 0) return;
        setCont(cont-1)
    }
    return(
        <>
        <p>{cont}</p>
        <button onClick={()=> setCont(cont+1)}>INCREMENTAR</button>
        <button onClick={comprobarCero}>DECREMENTAR</button>
        <button onClick={()=> setCont(0)}>RESETEAR</button>
        <button onClick={()=> setCont(cont*2)}>DUPLICAR</button>
        </>
    )
}

export default ContadorSimple