const Login = async (req, res, next) => {
    try {
        console.log(req.body);
        
        const email = req.body.email
        const senha = req.body.senha

        const emailUser = "icarogabriel@gmail.com"
        const senhaUser = "123456"

        if (email == emailUser && senha == senhaUser) {
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
