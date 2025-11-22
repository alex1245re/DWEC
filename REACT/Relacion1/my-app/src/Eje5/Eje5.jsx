import { useState } from 'react'

function Eje5({nombre}){
    const [array] = useState(() => nombre ? [nombre] : [])


    return(
        <>
        {array.map((animales,index) =>(<li key={index}>{animales}</li>))}
        </>
    )
}

export default Eje5