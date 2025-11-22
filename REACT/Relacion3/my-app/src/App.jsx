import { useState } from 'react'
import './App.css'
import Saludo from './Ejercicio1/Saludo'
import Tarjeta from './Ejercicio2/Tarjeta'

function App() {

  return (
    <>
    <Saludo nombre={"Ana"} emoji={"🔥"}/>
    <Saludo nombre={"Beto"} emoji={"✨"}/>
    <Saludo nombre={"Carla"} emoji={"🎄"}/>
    <Tarjeta nombre={"alex"} edad={25} isOnline={false} imagenUrl={"https://www.familiaysalud.es/sites/default/files/correcta_colocacion_escayola.jpg"}></Tarjeta>
    </>
  )
}

export default App
