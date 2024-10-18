import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrimeiroComponente from './Componentes/PrimeiroComponente'
import SegundoComponente from './Componentes/SegundoComponente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Olá mundo</h1>
      <p>Primeiro parágrafo</p>
      <PrimeiroComponente/>
      <br />
      <SegundoComponente/>
    </>
  )
}

export default App
