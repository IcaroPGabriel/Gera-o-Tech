const ProductModel = require('../models/ProductModel')

const ProductList = async (req,res) => {
    console.log(req.body);
    
    try {
        const product = await ProductModel.findAll();

        res.send(product)
    } catch (error) {
        res.status(400).send({
            sucess: false, 
            message: `Lista de produtos não autorizada${error}`
        })
    }
}

const ProductCreate = async (req, res) => {
    const description = req.body.description
    const color = req.body.color
    const price = req.body.price
    const stock = req.body.stock
    
    try {

        const ProductRegister = await ProductModel.create({
            description:description,
            color:color,
            price:price,
            stock:stock
        })
        
        res.status(201).send({
            sucess: true,
            message: `Produto cadastrado com sucessso! ${ProductRegister.description}`
        })



        
    } catch (error) {
        res.status(400).send({
            sucess: false,
            error: `Falha no cadastro!${error}`
        })
    }
}


module.exports = {
    ProductList, ProductCreate
}