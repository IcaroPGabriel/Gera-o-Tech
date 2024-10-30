import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from '../componentes/Cmp1'


function App() {
  let [mostrar, setMostrar ] = useState(false)
  let [msgBtn, setMsgBtn] = useState('Mostrar Imagem')


  function mostrarParagrafo() {
    if (mostrar == true) {
      setMostrar(false)
      setMsgBtn('Mostrar Imagem')
    } else {
      setMostrar(true)
      setMsgBtn('Esconder Imagem')
    }
  }

  return (
    <>
      <button onClick={mostrarParagrafo}>{msgBtn}</button>

      {mostrar && (
        <div>
          <h2>Tapion</h2>
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/581d23189012335.Y3JvcCw4MjY4LDY0NjcsMCww.jpg" alt="" width={'400px'} />
        </div>
      )}

      <Comp1/>
      <DynamicDemo/>
    </>
  )
}

export default App
