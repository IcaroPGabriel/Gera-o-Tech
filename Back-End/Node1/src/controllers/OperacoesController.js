// CRIAR UM CONTROLLER E CRIAR 4 FUNÇÕES COM AS OPERAÇÕES

const Somar = (numero1,numero2) => {
    
    try {
        const total = numero1+numero2
        return total 

    } catch (error) {
        return `Erro na operação!: ${error}`
    }
}



const Subtrair = (num1,num2,num3) => {
    
    try {
        const subtracao = num1-num2-num3
        return subtracao
    } catch (error) {
        return `Erro na operação!: ${error}`
    }

}



const Multiplicar = (a,b,c) => {
    
    try {
     const multiplicacao = a*b*c

     return multiplicacao
    } catch (error) {
      return `Erro na operação!: ${error}`
    }
    


    
}


const Dividir = (x,y,z) => {
    
    try {
        let divisao = x/y/z

        return divisao
    } catch (error) {
        return `Erro na operação!: ${error}`
    }
    
}



const ExpressaoNumerica = (q,w,e,r) => {
    
    try {
        let expressao = (q-w)/e*r

        return expressao
    } catch (error) {
        return `Erro na operação!: ${error}`
    }
    
}


module.exports = {
    Somar,
    Subtrair,
    Multiplicar,
    Dividir,
    ExpressaoNumerica
};

