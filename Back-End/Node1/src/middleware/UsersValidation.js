const UserModel = require('../models/UserModel')


const UserCreateValidate = (req,res,next) => {
    try {
        const{firstname, surname, email, password} = req.body
        const EmailValid = UserModel.findOne({ 
            where: { email: email } });


            
        if(!firstname || !surname || !email || !password) {
            const message = 'As credenciais são obrigatórias!!!'

            return res.status(400).json({
                sucess: false,
                message: message
            })
            
        }

        if (EmailValid == true ) {
            const alert = 'Email já existente!'
          res.send(400).json({
              sucess:false,
              message:alert
          })
        } else{
            res.send({
                sucess:true,
                message:`Usuário criado com sucesso`
            })
        }
 
           
    next()


        
        
    } catch (error) {
        return res.status(400).json({
            sucess: false,
            message: `Erro: ${error}`
        })        
    }
}

module.exports = {
    UserCreateValidate
}