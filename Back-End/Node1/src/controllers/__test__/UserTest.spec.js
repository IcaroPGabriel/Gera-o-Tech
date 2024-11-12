const operacao = require('../OperacoesController')

it('1 + 2 deve ser igual a 3', () => {
    const result = 3

    expect(operacao.Somar(1,2)).toBe(result)
})

it('A subtração deve ser 10', () => {
    const result = 10

    expect(operacao.Subtrair(60,40,10)).toBe(result)
})

it('A multiplicação deve ser 20000', () => {
    const result = 20000

    expect(operacao.Multiplicar(80,50,5)).toBe(result)
})

it('A divisão deve ser 8 ', () => {
    const result = 8

    expect(operacao.Dividir(120,3,5)).toBe(result)
})

it('A expressão deve ser 25', () => {
    const result = 25

    expect(operacao.ExpressaoNumerica(77,32,9,5)).toBe(result)
})