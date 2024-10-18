function SegundoComponente() {

    
    function mostrarDados() {
        let cepDigitado = document.getElementById("cep").value;
        console.log(cepDigitado);
        fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
          .then((resposta) => resposta.json())
          .then((cep) => {
            let bairro = document.createElement('p').value
            let rua = document.createElement('p').value
            let cidade = document.createElement('p').value
            let estado = document.createElement('p').value

            bairro.innerHTML = cep.bairro
            rua.innerHTML = cep.rua
            cidade.innerHTML = cep.cidade
            estado.innerHTML = cep.estado

            document.getElementById('resultados').appendChild(bairro)
            document.getElementById('resultados').appendChild(rua)
            document.getElementById('resultados').appendChild(cidade)
            document.getElementById('resultados').appendChild(estado)




          })
          
      }
    
    
    
    
    return(
        <>
        <article className="encontrarCep">
            <section id="dados">
                <input id="cep" type="text" placeholder="Favor digitar o CEP" />
                <button type="button" onClick={mostrarDados()}>Enviar</button>
            </section>
            <section id="resultados"></section>
            <section id="resultados2"></section>
            <section id="resultados3"></section>
            <section id="resultados4"></section>
        </article>
        </>
    )
}



//  function buscarCEP() {
//      let cepDigitado = document.getElementById("cep").value;
//      console.log(cepDigitado);
//      fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
//        .then((resposta) => resposta.json())
//        .then((cep) => {
//          document.getElementById("bairro").value = cep.bairro;
//          document.getElementById("complemento").value = cep.complemento;
//          document.getElementById("estado").value = cep.estado;
//          document.getElementById("localidade").value = cep.localidade;
//          document.getElementById("logradouro").value = cep.logradouro;
//          document.getElementById("regiao").value = cep.regiao;
//        })
       
//    }



export default SegundoComponente