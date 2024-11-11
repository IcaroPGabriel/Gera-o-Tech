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

        const EmailValid = await UserModel.findOne({ 
            where: { email: email } });
    
    try {
        const userCreate = await UserModel.create({
            firstname:firstname,
            surname:surname,
            email:email,
            password:hash
        });

        if (EmailValid == true) {
            res.send({
                sucess: true,
                message: `Email já cadastrado!`
        })
        } else {
        res.status(201).send({
            sucess: true,
            message: `Usuário criado com sucesso ${userCreate.firstname - userCreate.id}`
        }
        } catch (error) {
            res.status(400).send({
                sucess:false,
                message: `Falha no cadastro!!!${error}`
            })
        }
    }
const UserUpdate = async (req,res, next) => {
    try {
        const id = req.params.id
        const user = await UserModel.update(req.body, {
            where: { id }
        });

        if (user == true) {
            res.status(200).send({
                'sucess': true,
                'message': `Usuário alterado com sucesso! ID: ${user.id - user.name}`
            })
            
        } else {
            res.send({
                'sucess': true,
                'message': `Usuário não encontrado!`
            })

            
        }
    } catch (error) {
        res.send({
            'sucess': false,
            'message': `Falha na listagem de usuários${error}`
        })
    }
}

const UserDelete = async (req,res,next) => {
   
    try {
        const id = req.params.id
        const user = await UserModel.destroy( {
            where: { id }
        });
       
        res.status(200).send({
            'sucess': true,
            'message': `Usuário deletado com sucesso! ID: ${user.id - user.name}`
        })

        
    } catch (error) {
        res.send({
            'sucess': false,
            'message': `Falha na listagem de usuários${error}`
        })
    }
}



module.exports = {
    UsersList, UsersRegister, UserUpdate, UserDelete
}


