const UsersList = async (req,res, next) => {
    try {
        const Users = [
            {nome:'Icaro',
             idade:25,
             genero: 'Masculino'
            },
            {nome:'Eduardo',
             idade:21,
             genero: 'Masculino'
            },
            {nome:'Gabriela',
             idade:27,
             genero: 'Feminino'
            }]

        res.send(Users)
    } catch (error) {
        res.send({
            sucess: false,
            message: `Falha na listagem de usuários${error}`
        })
    }
}

const UsersRegister = async (req,res,next) => {
    try {
        const nome = req.body.nome
        const idade = req.body.idade
        const genero = req.body.genero

        res.send({
            sucess: true,
            message: 'Usuário cadastrado com sucesso!'
        })
    } catch (error) {
        res.send({
            sucess:false,
            message: `Falha no cadastro!!!${error}`
        })
    }


}


module.exports = {
    UsersList, UsersRegister
}


