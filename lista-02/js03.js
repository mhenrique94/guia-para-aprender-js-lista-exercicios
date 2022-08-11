// 2.3) Faça um programa que faça a média de todos os nros de uma lista 

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let soma = 0

console.log(`Entrada: ${lista}.`)

for (n of lista){
    soma += n
}

let media = soma/lista.length
console.log(`Média: ${media}. Soma atual: ${soma}.`)