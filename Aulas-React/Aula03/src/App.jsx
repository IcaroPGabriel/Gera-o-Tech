import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import onePiece from './imagens/luffy.jpg'
import goku from '../imagensPrincipais/gokuoldschool.webp'
import Comp1 from './componentes/Comp1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Aula imagens</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia consectetur aut quibusdam qui dolorum incidunt illum delectus. Expedita ea esse excepturi debitis, fuga consequatur mollitia eligendi error similique quas!</p>
      <section>
      <img src="berserk.jpg" alt="" width={'200px'}/>
      <img src="bleach.webp" alt="" width={'250px'}/>
      <img src={onePiece} alt="" width={'250px'} />
      <img src={goku} alt="" width={'200px'}/>
      </section>

      <Comp1/>

      <h1></h1>
      
      
    </>
  )
}

export default App
