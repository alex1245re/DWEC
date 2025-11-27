import Item from './Item'
import Pie from './Pie'
import { useState } from 'react'

function ListaCompra(){
  //Declaracion
    let datosLista = {
      "items":[
        {
          "id":1,
          "nombre": "pan",
          "cantidad": 3
        },
         
        {
          "id":2,
          "nombre": "huevos",
          "cantidad": 2
        }
      ]
    }
    const [lista, setLista ] = useState(datosLista.items);
    const [alimento, setAlimento] = useState('');
    const [nextId, setNextId] = useState(0);



    //funcion añadir a la lista
    const agregar = () => {
    if (alimento.trim() === "") return;

    setLista([
      ...lista,
      { id: nextId, nombre: alimento }
    ]);

    setNextId(nextId + 1);
    setAlimento("");
  };



  //funcion eliminar alimentos de la lista
  const eliminar = (id) => {
    setLista(lista.filter(alimento => alimento.id !== id));
  };

  //funcion editar elementos lista
  const editar = (id, nuevoNombre) => {
          setLista(lista.map(item => {
              if (item.id === id) {
                  return { ...item, nombre: nuevoNombre }; // ...item copia todas las propiedades del ítem original y sobreescribe el nombre
              }
              return item;
          }));
      };

  //borramos todo el array
  const borraTodo = ()=>{
      setLista([]);
    }
  

  return (
    <>
      <input
        value={alimento}
        onChange={e => setAlimento(e.target.value)}
      />

      <button onClick={agregar}>Agregar</button>

      <ul>
        {lista.map(item => (
          <Item
            key={item.id}
            id={item.id}
            nombre={item.nombre}
            cantidad={item.cantidad}
            onEliminar={eliminar}
            onEditar={editar}
          />
        ))}
      </ul>

      <Pie borraTodo={borraTodo}/>
      </>
  )
}

export default ListaCompra