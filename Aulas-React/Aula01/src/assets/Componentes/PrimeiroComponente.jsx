function PrimeiroComponente() {
    let pessoas = [{
        nome: 'Marcelo',
        idade: 28,
        profissao:'Dev'
    },
    {
        nome: 'lara',
        idade: 25,
        profissao:'Sênior'
    }]
    
    function enviaNome() {
        let nome = document.getElementById('nome').value
        let registro = document.createElement('h1')
        registro.innerHTML = `Bom dia ${nome}, tudo bem?`
        document.getElementById("enredo").appendChild(registro)
    }
    
    
    return(
        <>
        {/* <h2>Olá ${pessoas[1].nome}, como vai?</h2> */}

        <input id="nome" type="text" placeholder="Digite seu nome" />
        <button onClick={enviaNome} type="button">Enviar</button>
        <div id="enredo"></div>
        </>
    )
}
export default PrimeiroComponente