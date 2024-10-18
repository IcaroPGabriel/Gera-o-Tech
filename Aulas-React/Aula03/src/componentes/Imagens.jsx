import { useState } from "react";

function Imagens() {

    let [tamanho, setTamanho] = useState(150)

    function aumentar() {
        setTamanho(tamanho+50)
        console.log(tamanho);
    }

    function diminuir() {
        setTamanho(tamanho-50)
        console.log(tamanho);
    }

    return ( 
        <>
        <button onClick={aumentar()}></button>
        <button onClick={diminuir()}></button>
        <br />
        <img src="luffy.jpg" alt="" width={`${tamanho}px`} />
        </>
     );
}

export default Imagens;