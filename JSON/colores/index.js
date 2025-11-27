const colores = {
  "colors":[
    {
      "color": "black",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,255,1],
        "hex": "#000"
      }
    },
    {
      "color": "white", 
      "category": "value",
      "type":"primary",
      "code": {
        "rgba": [0,0,0,1],
        "hex": "#FFF"
      }
    },
    {
      "color": "red",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,0,0,1],
        "hex": "rgba(255, 0, 0, 1)"
      }
    },
    {
      "color": "blue",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [0,0,255,1],
        "hex": "#00F"
      }
    },
    {
      "color": "yellow",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "green",
      "category": "hue",
      "type": "secondary",
      "code": {
        "rgba": [0,255,0,1],
        "hex": "#0F0"
      }
    }
  ]
}

window.onload = ()=>{

    const contenedor = document.getElementById("contenedor");
    for(let color of colores.colors){
        let miDiv = document.createElement("div");
        miDiv.style.backgroundColor = color.color;
        miDiv.innerHTML += color.color;
        miDiv.innerHTML += "<br>";
        miDiv.innerHTML += color.category;
        miDiv.innerHTML += "<br>";
        miDiv.innerHTML += color.type;
        miDiv.innerHTML += "<br>";
        miDiv.innerHTML += color.code.rgba;
        miDiv.innerHTML += "<br>";
        miDiv.innerHTML += color.code.hex;

        contenedor.appendChild(miDiv);

        if(color.color == "black" ||color.color == "red" ||color.color == "blue") miDiv.style.color = "white";
    }
}