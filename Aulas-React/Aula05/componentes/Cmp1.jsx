function Comp1() {
    
let pessoas = ['Sara','Gabriella','Rafael','Thiago' ]
let itens = [
    {objeto:'Celular', valor:'R$: 2000,00'},
    {objeto:'Garrafa', valor:'R$: 500,00'},
    {objeto:'Mochila', valor:'R$: 100,00'}
]

function CriarCard({item}) {
    return(
    <div style={{border: '2px solid blue', backgroundColor:'gray', width:'300px'}}>
        <p>Objeto: {item.objeto}</p>
        <p>Valor: {item.valor}</p>
    </div>)
}




return (  
        <>
        <h1>Loops com Map</h1>
        <ul>

            {pessoas.map((pessoa, i)=> (
                <li key={i}> {pessoas} </li>
            ))}
        </ul>
        <h2>Novos itens</h2>
        <ul>
            {itens.map((item)=>( 
                <li key={item.id}>{itens.objeto} - {itens.valor} </li>
            ))} 
        </ul>

        <h2>Loop para criação de cards</h2>
            <div>
                {
                    itens.map((item) => (
                        <CriarCard key={itens.id} item={item}/>
                    ))
                }
            </div>
        </>
    );
}

export default Comp1;