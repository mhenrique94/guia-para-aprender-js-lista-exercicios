// 2.2) Faça um programa que faça a soma de todos nros de uma lista 

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let soma = 0

console.log(`Entrada: ${lista}.`)
for (n of lista){
    soma += n
    console.log(`Adicionando ${n} à soma. Soma atual: ${soma}.`)
}