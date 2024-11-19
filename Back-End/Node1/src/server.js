// // IMPORTANDO O MÓDULO EXPRESS
 const express = require('express');

// // APP RECEBE O EXPRESS
 const app = express();

// // PERMITE QUE O SERVIDOR ENTENDA JSON NO CORPO DAS REQUISIÇÕES
 app.use(express.json());

//  EXPORTAR ROTAS
const login = require('./routes/RouterLogin');
app.use('/login', login);

const produtos = require('./routes/RouterProducts');
app.use('/produtos', produtos);

const users = require('./routes/RouterUsers');
const { Model } = require('sequelize')
app.use('/users', users);

const category = require('./routes/RouterCategory');
app.use('/Category', category);

// SUBINDO O SERVIDOR NA PORTA 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
})


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


    
// } )

// CRIAR UMA FUNÇÃO DE LOGIN QUE RECEBA E-MAIL E SENHA, SE FOREM IGUAIS AS VARIÁVEIS JÁ DEFINIDAS, RETORNAR UM TOKEN. ESSE TOKEN DEVE SER USADO NA FUNÇÃO DE PRODUTOS, QUE SÓ MOSTRA OS PRODUTOS SE O TOKEN FOR IGUAL AO JÁ DEFINIDO NA FUNÇÃO.


// const login = (email, senha) => {
  
//   const Useremail = 'thiago.arruda.09@hotmail.com';
//   const Usersenha = 'thiago123'
//   const token = {"result": true, "token": '123456', "message": 'Deu bom!'}

// if (Useremail === email && Usersenha === senha){
//   console.log(token)
// }
// else{
//   console.log({"result": false, "token": '', "message": 'Deu ruim!'})
// }
// }

// login('thiago.arruda.09@hotmail.com','sdds')

// const produtos = async(token) => {
//     const data =
//       [{
//        nome:'sapato nike1',
//        preço:300
//       },
//       {
//        nome:'sapato nike2',
//        preço:400
//       },
//       {
//        nome:'sapato nike3',
//        preço:500
//       }]

//     if (token == 123456){
//       console.log({"result": true, "products": data, "message": 'Deu bom!'})
//     }  else{
//       console.log({"result": false, "products": [], "message": 'Deu ruim!'})
//   }
// }

// produtos('1234567')


// const jwt = require('jsonwebtoken')
// const token = jwt.sign({id: 1, name:'Icaro'}, 'flefekfrprpggpr')

// console.log(token);

/*
const nome = 'Rafael';
const numero = 21;
const jwt = require('jsonwebtoken')
const token = jwt.sign({id: numero, name:nome}, 'flefekfrprpggpr')

const jwtVerify = (tokenUser) => {
  try {
    const decoded = jwt.verify(tokenUser, 'flefekfrprpggpr')
  return decoded
  } catch (error) {
    console.log(`Inválido${error}`);
    
  }
  
}

console.log(jwtVerify(token));
*/

// FAÇA A LÓGICA DE LOGIN PARA RETORNAR O TOKEN DE USUÁRIO. E A FUNÇÃO DE PRODUTOS SÓ MOSTRARÁ OS DADOS SE O TOKEN FOR VÁLIDO.

// const jwt = require('jsonwebtoken')
// const token = jwt.sign({id: 1, name: 'David'}, 'asdsdjfgfkjsd')

// const jwtVerify = (tokenUser) => {
//   try {
//     const decoded = jwt.verify(tokenUser, 'asdsdjfgfkjsdAASAS')
//     return decoded

//   } catch (error) {
//     console.log(`Deu ruim! ${error}`)
//   }
// }
// console.log(jwtVerify(token))

// CRIE UMA FUNÇÃO DE LOGIN QUE RECEBA EMAIL E SENHA, SE FOREM IGUAIS AS VARIÁVEIS JÁ DEFINIDAS, RETORNAR UM TOKEN. ESSE TOKEN DEVE SER USADO NA FUNÇÃO DE PRODUTOS, QUE SÓ MOSTRA OS PRODUTOS SE O TOKEN FOR IGUAL AO JÁ DEFINIDO NA FUNÇÃO.

// function login(email, senha) {
//   const UserEmail = "thiago.arruda.09@hotmail.comsdasd";
//   const UserSenha = "thiago123";

//   if (email == UserEmail && senha == UserSenha) {
//     const jwt = require('jsonwebtoken');
//     const token = jwt.sign({ id: 1, name: "thiago" }, "sudgsajkcsiuchsck");
//     return token
//   } else {
//     console.log("email ou senha invalidos");
//   }
// }

// console.log(login("thiago.arruda.09@hotmail.com", "thiago123"))

  // const produtos = (tokenUser) => {
  //   const jwt = require('jsonwebtoken');
  //   try {
  //     const decoded = jwt.verify(tokenUser, "sudgsajkcsiuchsck");
  //     const data = [
  //       {
  //         nome: "sapato nike1",
  //         preço: 300,
  //       },
  //       {
  //         nome: "sapato nike2",
  //         preço: 400,
  //       },
  //       {
  //         nome: "sapato nike3",
  //         preço: 500,
  //       },
  //     ];
  //     if (decoded) {
  //       console.log(data);
  //     }
  //     return decoded;

   
  //   } catch (error) {
  //     console.log(`Deu ruim! ${error}`);
  //   }
  // };

  // app.get('/produtos',  (req, res)=> {
  //   res.send([{
  //       name: "sapato nike",
  //       price: 300,
  //       image: "sapato3.png",
  //     },
  //     {
  //       name: "sapato nike2",
  //       price: 400,
  //       image: "sapato3.png",
  //     },
  //     {
  //       name: "sapato nike3",
  //       price: 500,
  //       image: "sapato3.png",
  //     },
  //     {
  //       name: "sapato nike4",
  //       price: 600,
  //       image: "sapato3.png",
  //     },
  //     {
  //       name: "sapato nike5",
  //       price: 700,
  //       image: "sapato3.png",
  //     },
  //     {
  //       name: "sapato nike6",
  //       price: 800,
  //       image: "sapato3.png",
  //     },
  //     {
  //       name: "sapato nike7",
  //       price: 900,
  //       image: "sapato3.png",
  //     },
  //     {
  //       name: "sapato nike8",
  //       price: 1000,
  //       image: "sapato3.png",
  //     }])
  // })

  // const express = require('express')
  // const app = express()
  // app.use(express.json())

// CRIANDO UMA ROTA PARA A API
// app.get('/home', function (req, res) {
//   res.send('Hello World')
// })

// CRIANDO UMA ROTA PARA A API
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

//   app.get('/login', (req, res) => {
//     try {
//       const email = req.query.email
//       const senha = req.query.senha
  
//       const emailUser = 'david@exemplo.com.br'
//       const senhaUser = '123456'
  
//       if (email === emailUser && senha === senhaUser){
//         const jwt = require('jsonwebtoken')
//         const token = jwt.sign({id: 1, name: 'David'}, 'asdsdjfgfkjsd')
  
//         res.send({
//           'sucess': true,
//           'token': token,
//           'error': ''
//         })
//       } else {
//         res.send({
//           'sucess': true,
//           'token': '',
//           'error': 'Usuário ou senha inválida!'
//         })
//       }
//     } catch(error) {
//       res.send({
//         'sucess': false,
//         'token': '',
//         'error': 'Deu ruim!'
//       })
//     }
//   })
  




  

// SUBINDO O SERVIDOR NA PORTA 3000
// const PORT = 3000
// app.listen(PORT, () => {
//     console.log(`O servidor está rodando na porta ${PORT}`);
// })



