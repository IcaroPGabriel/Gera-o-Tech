import Cmp1 from "./componentes/Cmp1";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [nome, setNome] = useState('')
  let [idade, setIdade] = useState('')
  let [profissao, setProfissao] = useState('')
  let [usuarioCadastrado, setUsuarioCadastrado] = useState(null)

  function carregarDados(){
    setNome(document.getElementById('nome').value)
    setIdade(document.getElementById('idade').value)
    setProfissao(document.getElementById('profissao').value)

    let cadastro = {
      nome:nome,
      idade:idade,
      profissao:profissao
    }

    setUsuarioCadastrado(cadastro)
    console.log(usuarioCadastrado);
  }
  
  return ( 
    <>

    <h1>Título</h1>
      <input id='nome' type="text" placeholder='Digite seu nome' /><br/>
      <input id='idade' type="text" placeholder='Digite sua idade' /><br/>
      <input id='profissao' type="text" placeholder='Digite sua profissão' /><br/>
      <button onClick={carregarDados} type='button'>Enviar</button>

      {usuarioCadastrado && (<Cmp1 usuario = {usuarioCadastrado}/>)}



    </>
   );
}

export default App;