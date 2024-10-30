// // IMPORTANDO O MÓDULO EXPRESS
// const express = require('express')
// // APP RECEBE O EXPRESS
// const app = express()
// // PERMITE QUE O SERVIDOR ENTENDA JSON NO CORPO DAS REQUISIÇÕES
// app.use(express.json())

// // CRIANDO UMA ROTA PARA A API
// app.get('/home', function (req, res) {
//   res.send('Hello World')
// })

// // CRIANDO UMA ROTA PARA A API
// app.get('/states', function (req, res) {
//     res.send({
//         'Ceará': 10,
//         'Bahia': 8,
//         'Pernambuco':7.78,
//         'piauí': 6.4
//     })
//   })

// app.get('/users', function(req, res) {
//     res.send(
//         [{
//           nome: 'Icaro',
//           idade:'25',
//           genero: 'Masculino'
//         },{
//           nome: 'Gabriel',
//           idade:'23',
//           genero: 'Masculino'
//         },{
//           nome: 'Marcos',
//           idade:'21',
//           genero: 'Feminino'

//         },{
//           nome: 'Ana',
//           idade:'22',
//           genero: 'Feminino'
//         }]

//     )
//   })

// // SUBINDO O SERVIDOR NA PORTA 3000
// const PORT = 3000
// app.listen(PORT, () => {
//     console.log(`O servidor está rodando na porta ${PORT}`);
    
// } )

// CRIAR UMA FUNÇÃO DE LOGIN QUE RECEBA E-MAIL E SENHA, SE FOREM IGUAIS AS VARIÁVEIS JÁ DEFINIDAS, RETORNAR UM TOKEN. ESSE TOKEN DEVE SER USADO NA FUNÇÃO DE PRODUTOS, QUE SÓ MOSTRA OS PRODUTOS SE O TOKEN FOR IGUAL AO JÁ DEFINIDO NA FUNÇÃO.


function credenciais(email,senha) {
  
  const UserEmail = 'caiodantas56@gmail.com'
  const password = '456789'
  const token = 'icaro12' 

  

  if (UserEmail === email && password === senha) {
     alert(token)
  } else {
    console.log("Credenciais erradas");
    
  }

  function produtos (token) {
    
  }





}