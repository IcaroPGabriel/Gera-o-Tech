import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrimComponente from './componente/PrimComponente'
import Imagens from './componente/Imagens'

function App() {
  let tituloNovo = {
    backgroundColor:'pink',
    color:'gray'
  }

  let azul = true

  let estiloBotao = {
    backgroundColor: azul ? 'black':'yellow',
    color:'white',
    padding: '15px'
  }

  return (
    <>
      <article>
        <h1>Aula 02 react</h1>
        <p className='paragrafoPrimario'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit eligendi quidem magni repudiandae ad ut, maxime cum fuga ipsa doloribus similique consequatur at quis. Fugiat eum deleniti ratione sed.</p>
      </article>
      <PrimComponente/>

      {/* CSS inline */}

      <h1 style={tituloNovo}>Novo título</h1>
      <p style={{backgroundColor:'green',color:'white'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti soluta repellat, quia autem, consequatur fuga praesentium fugiat animi aut dolores, aliquam totam eveniet? Recusandae voluptatibus, in totam possimus rem quo.</p>


      <button style={estiloBotao}>Butaum</button>
      <br /><br /><br />

      <Imagens/>

    </>
  )
}

export default App



