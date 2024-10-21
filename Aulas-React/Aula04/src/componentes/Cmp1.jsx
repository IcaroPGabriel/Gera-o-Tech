import { useState } from 'react';


function Cmp1(usuario) {
    let [nome, setNome] = useState('')
    let [idade, setIdade] = useState('')
    let [profissao, setProfissao] = useState('')
    let {clicar, setClicar} = useState(false)
    function mostrarUsuario() {
    
        setNome(usuario.nome)
        setIdade(usuario.idade)
        setProfissao(usuario.profissao)
        setClicar(true)
    }
  

    return ( 
        <>
            <button onClick={mostrarUsuario} type="button">Mostrar Usuário</button>

            {clicar && (
            <p>
                Nome: {usuario.nome}, Idade: {usuario.idade} e Profissão: {usuario.profissao}
            </p>
            )}
            
        </>

     );
}

export default Cmp1;