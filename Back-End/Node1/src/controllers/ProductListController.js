const ProductList = async (req,res) => {
    console.log(req.body);
    
    try {
        const ListProducts = [
            {nome:'Tênis Puma',
             cor:'Azul',
             preco:100
            },
            {nome:'Tênis Nike',
             cor:'Branco',
             preco:300
            },
            {nome:'Tênis Futsal Adidas',
             cor:'Preto',
             preco:400
            }]

        res.send(ListProducts)

    } catch (error) {
        res.send({
            sucess: false, 
            message: `Lista de produtos não autorizada${error}`
        })
    }
}

const ProductCreate = async (req, res) => {
    try {
        const nome = req.body.nome
        const cor = req.body.cor
        const preco = req.body.preco
        
        res.send({
            sucess: true,
            message: 'Produto cadastrado!!'
        })



        
    } catch (error) {
        res.send({
            sucess: false,
            error: `Falha no cadastro!${error}`
        })
    }
}


module.exports = {
    ProductList, ProductCreate
}