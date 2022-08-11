/**
 * Faça um programa que faça a soma de todos os números de uma lista de números
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10]       34
 * [1,1,40]             40
 */

// Entrada
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let soma = 0

console.log(`Entrada: ${lista}.`)
for (n of lista){
    soma += n
}
console.log(`${soma}.`)
