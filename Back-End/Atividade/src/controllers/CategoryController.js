const CategoryModel = require('../models/CategoryModel')

const CategoryList = async (req,res) => {
    console.log(req.body);
    
    try {
        const category = await CategoryModel.findAll();

        res.send(category)
    } catch (error) {
        res.status(400).send({
            sucess: false,
            message: `Falha no carregamento da lista ${error}`
        })
    }
}

const CategoryCreate = async (req,res) => {
    const name = req.body.name
    const slug = req.body.slug


    try {

        const categoryRegister = await CategoryModel.create({
            name:name
            
        })

        res.status(201).send({
            sucess:true,
            message: `Categoria criada com sucesso! ${categoryRegister}`
        })
    } catch (error) {
        res.status(400).send({
            sucess: false,
            error: `Erro ao criar categoria! ${error}`
        })
    }
}


module.exports = {
    CategoryList, CategoryCreate
}