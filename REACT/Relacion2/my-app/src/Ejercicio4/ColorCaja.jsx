import { useState } from "react"

function ColorCaja(){

    const [color,setColor] = useState("grey");
    
    return(
        <>
          <div style={{ backgroundColor: color, width: "200px", height: "200px" }}></div>
            <input type="text" value={color} onChange={(e) =>{
                setColor(e.target.value);
            }}></input>
            <button onClick={()=> setColor("red")}>ROJO</button>
            <button onClick={()=> setColor("green")}>VERDE</button>
            <button onClick={()=> setColor("blue")}>AZUL</button>
        </>
    )
}

export default ColorCaja