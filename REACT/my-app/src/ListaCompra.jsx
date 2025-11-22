import Item from './Item'
import Pie from './Pie'
import { useState } from 'react'

function ListaCompra(){
  //Declaracion
    const [lista, setLista ] = useState([]);
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

  const editar = (id, nuevoNombre) => {
    setLista(
      lista.map(item =>
        item.id === id ? { ...item, nombre: nuevoNombre } : item
      )
    );
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