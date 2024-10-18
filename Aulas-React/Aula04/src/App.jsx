import Cmp1 from "./componentes/Cmp1";

function App() {
  
  let nome = ''
  let idade = ''
  let profissao = ''

  function carregarDados() {
  nome = document.getElementById('nome').value
  idade = document.getElementById('idade').value
  profissao = document.getElementById('profissão').value
  }
  
  return ( 
    <>

    <h1>Título</h1>
    <input id= 'nome' type="text" placeholder="Favor digitar seu nome" /><br />
    <input id="idade" type="text" placeholder="Favor digitar sua idade" /><br />
    <input id="profissão" type="text" placeholder="Favor digitar sua profissão" /><br />
    <button onClick={carregarDados} type="button">Cadastrar</button>


    <Cmp1 nome={nome} idade={idade} profissao={profissao} />



    </>
   );
}

export default App;