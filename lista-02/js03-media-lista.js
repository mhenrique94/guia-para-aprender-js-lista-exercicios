/**
 * Faça um programa que faça a soma de todos os números de uma lista de números
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10]        5.7
 * [1,1,40]             14.0
 */

// Entrada

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// percorrer a lista e fazer a somatória dos elementos

let soma = 0

console.log(`Entrada: ${lista}.`)

for (n of lista){
    soma += n
}

let media = soma/lista.length
console.log(`${media.toFixed(1)}`)