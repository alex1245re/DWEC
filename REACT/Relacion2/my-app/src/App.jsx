import { useState } from 'react'
import ContadorSimple from './Ejercicio1/ContadorSimple'
import Alternador from './Ejercicio2/Alternador'
import Sincronizador from './Ejercicio3/Sincronizador'
import ColorCaja from './Ejercicio4/ColorCaja'
import Formulario from './Ejercicio5/formulario'

function App() {
  return (
    <>
      <ContadorSimple/>
      <Alternador/>
      <Sincronizador/>
      <ColorCaja/>
      <Formulario/> 
    </>
  )
}

export default App
