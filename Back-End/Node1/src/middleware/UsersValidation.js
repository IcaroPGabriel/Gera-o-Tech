const UserModel = require('../models/UserModel')
const { DataTypes } = require('sequelize')


const UserCreateValidate = async (req,res,next) => {
    try {
        const{firstname, surname, email, password} = req.body
        
        const EmailValid = await UserModel.findOne({ 
        where: { email: email } });

        if(!firstname || !surname || !email || !password) {
            const message = 'As credenciais são obrigatórias!!!'

            return res.status(400).json({
                sucess: false,
                message: message
            })
            
        }

        if (EmailValid) {
            return res.status(400).json({
                
                message:'Email já cadastrado!!'
            })
        }

        if (password.length <= 4) {
            return res.status(400).json({
                sucess:false,
                message: 'A senha deve ter mais de 4 dígitos!'
            })
        }

            
 
           
    next()

    } catch (error) {
        return res.status(400).json({
            sucess: false,
            message: `Erro de requerimento! ${error}`
        })        
    }
}

module.exports = {
    UserCreateValidate
}