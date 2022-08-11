/**
 * Faça um programa que faça a soma de todos os números de uma lista de números
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]     10
 * [1,1,40]             40
 * [40,1,1,0,-10]       40
 */

// Entrada
let lista = [1, 2, 3, 4, 54, 6, 89, 4, 1]

let maior = 0
for (var n of lista){
    if (n > maior){
        maior = n
    }
}

console.log(maior)