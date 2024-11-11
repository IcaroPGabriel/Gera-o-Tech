const UserModel = require('../models/UserModel')

const Login = async (req, res, next) => {
    try {
        console.log(req.body);
        
        const email = req.body.email
        const senha = req.body.senha

        //  RETORNANDO UM USUÁRIO COM O EMAIL INFORMADO
        const user = await UserModel.findOne({
            where: { email }
        })

        const bcrypt = require('bcrypt')
        const userPassword = user ? user.password : ''
        const hastValid = await bcrypt.compare(senha, userPassword)


        

        if (hastValid) {
            const jwt = require('jsonwebtoken');
            const token = jwt.sign({id: 1, name: 'Icaro'}, 'SEGhlyotp(4#@0)');
            
            res.send({
                sucess: true,
                token:token,
                error:''
            })
        } else {
           res.send({
                sucess: true,
                token:'',
                error:'Email ou senha inválidos'
            })
        }


    } catch (error) {
            res.send({
                sucess: false,
                token:'',
                error:`erro na requisição: ${error}`
            })
    }
}

module.exports = {
    Login
}
