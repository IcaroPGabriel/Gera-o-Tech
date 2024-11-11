const UserModel = require('../models/UserModel')

const UsersList = async (req,res, next) => {
    try {
        const users = await UserModel.findAll();

        res.send(users)
    } catch (error) {
        res.send({
            sucess: false,
            message: `Falha na listagem de usuários${error}`
        })
    }
}



const UsersRegister = async (req,res,next) => {
        const firstname = req.body.firstname
        const surname = req.body.surname
        const email = req.body.email
        const password = req.body.password

        const bcrypt = require('bcrypt')
        const saltRound = 10
        const hash = await bcrypt.hash(password, saltRound)
    
    try {
            const userCreate = await UserModel.create({
                firstname:firstname,
                surname:surname,
                email:email,
                password:hash
            });

        res.status(201).send({
            sucess: true,
            message: `Usuário criado com sucesso ${userCreate.firstname - userCreate.id}`
        })
    } catch (error) {
        res.status(400).send({
            sucess:false,
            message: `Falha no cadastro!!!${error}`
        })
    }


}


module.exports = {
    UsersList, UsersRegister
}


